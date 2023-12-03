import * as FileSystem from 'expo-file-system'


interface HttpHeaders {
  'access_token'?: string,
  'Content-Type'?: string,
  'Access-Control-Allow-Origin'?: string,
  'Access-Control-Allow-Methods'?: string,
  'Access-Control-Allow-Headers'?: string,
  'Access-Control-Allow-Credentials'?: string,
  'Authorization'?: string,
}

interface HttpOptions {
  headers?: HttpHeaders,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  body?: string | FormData,
  auth?: boolean,
  responseType?: string,
}

interface HttpFactoryOptions {
  baseUrl: string,
  maxRetries?: number,
  initialHeaders?: HttpHeaders,
}

export interface ErrorResponse {
  status: number,
  message: string,
  error: string,
    
}

const defaultHeaders: HttpHeaders = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  'Content-Type': 'application/json',
}


class HttpFactory {
    #baseUrl: string
    #headers: HttpHeaders
    #maxRetries: number
  
    constructor({ 
      baseUrl, 
      maxRetries = 1, 
      initialHeaders = defaultHeaders,
    }: HttpFactoryOptions) {
      this.#baseUrl = baseUrl
      this.#headers = initialHeaders
      this.#maxRetries = maxRetries
    }

    async setAuthorizationToken(): Promise<void> {
      console.log('setAuthorizationToken')
    }

    onUnauthorized(): void {
      console.log('Unauthorized')
    }

    setHeaders(headers: HttpHeaders) {
      this.#headers = headers
    }

    setDefaultHeaders() {
      this.#headers = defaultHeaders
    }

    getHeaders() {
      return this.#headers
    }

    async postByFileSystem<T>(path: string, fileData: {
      uri: string,
      parameters: Record<string, string>,
    }): Promise<T> {
      const url = `${this.#baseUrl}${path}`
      const options = {
        headers: {
          ...this.#headers,
        },
        httpMethod: 'POST',
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: 'file',
        parameters: fileData.parameters
      } as const
      const result = await FileSystem.uploadAsync(url, fileData.uri, options)
      const body: ErrorResponse | null | T = result.body ? JSON.parse(result.body) : null

      if(result.status === 401) {
        this.onUnauthorized()
      }

      if (![200, 201].includes(result.status)) {
        console.log(result, body)
        throw (body as ErrorResponse)?.message ?? 'Ocurrió un error inesperado'
      }
      console.log(result, body)
      return result.body as T
    }

    async _fetchWithRetry<TRes>(url: string, options: HttpOptions, retriesLeft: number = this.#maxRetries): Promise<TRes | ErrorResponse | null> {
      try {
        await this.setAuthorizationToken()
        const { responseType = 'json', ...httpOptions } = options
        const response = await fetch(url, {
          ...httpOptions,
          headers: {
            ...this.#headers,
            ...options.headers,
          },
        })
        if(response.status === 401) {
          this.onUnauthorized()
        }
        if (!response.ok && response.status !== 401) {
          await this.captureException({ url, options, response })
          throw await response.json() as ErrorResponse
        }
        if (options.method === 'GET' || options.method === 'POST' || options.method === 'PUT' || options.method === 'PATCH') {
          try {
            if (responseType === 'json') {
              return await response.json() as TRes
            }
                    
          } catch (error) {
            await this.captureException({ url, options, response })
            throw error
          }

        }

        return response as unknown as TRes
      } catch (error) {
        if (options.method !== 'GET') throw error

        if (retriesLeft === 1) {
          await this.captureException({ 
            url, 
            options, 
            error: new Error(JSON.stringify(error)),
          })
          throw error
        }

        return this._fetchWithRetry(url, options, retriesLeft - 1)
      }
    }

    async get<T>(path: string, responseType = 'json', auth = true): Promise<T | null | ErrorResponse> {

      return this._fetchWithRetry<T>(`${this.#baseUrl}${path}`, { method: 'GET', responseType, auth })
    }

    async post<T>(path: string, data: object | FormData, responseType = 'json'): Promise<T | null | ErrorResponse> {
      const isUri = 'uri' in data && 'parameters' in data

      if (isUri) {
        return this.postByFileSystem<T>(path, {
          uri: (data as {uri: string}).uri,
          parameters: (data as {parameters: Record<string, string>}).parameters,
        })
      }

      const isFormData = data instanceof FormData
      const headers = isFormData ? {} : { 'Content-Type': 'application/json' }
      const body = isFormData ? data : JSON.stringify(data)

      return this._fetchWithRetry(`${this.#baseUrl}${path}`, {
        method: 'POST',
        headers,
        responseType,
        body,
      })
    }

    async put<T>(path: string, data: object): Promise<T | null | ErrorResponse> {
      return this._fetchWithRetry(`${this.#baseUrl}${path}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      })
    }

    async patch<T>(path: string, data: object): Promise<T | null | ErrorResponse> {
      return this._fetchWithRetry(`${this.#baseUrl}${path}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    }

    async delete<T>(path: string): Promise<T | null | ErrorResponse> {
      return this._fetchWithRetry(`${this.#baseUrl}${path}`, { method: 'DELETE' })
    }

    async captureException({
      url,
      options,
      response,
      error,
    }: {
      url: string,
      options: HttpOptions,
      response?: Response,
      error?: Error,
    }) {
      console.error({
        message: `Error while fetching ${url}`,
        options,
        response: {
          ok: response?.ok,
          status: response?.status,
          statusText: response?.statusText,
          url: response?.url,
        },
        error,
        requestBody: options.body,
        responseBody: response ? await response.text() : undefined,
        baseUrl: this.#baseUrl,
        headers: this.#headers,
        maxRetries: this.#maxRetries,
      })
    }

    getInstance() {
      return this
    }
}


export default HttpFactory