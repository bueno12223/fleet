
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
      throw new Error('Not implemented')
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
        if (!response.ok) {
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

    async post<T>(path: string, data: object, responseType = 'json'): Promise<T | null | ErrorResponse> {
      return this._fetchWithRetry(`${this.#baseUrl}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        responseType,
        body: JSON.stringify(data),
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
      console.error(`Error while fetching ${url}`, { options: JSON.stringify(options), response: JSON.stringify(response), error: JSON.stringify(error) })
    }

    getInstance() {
      return this
    }
}


export default HttpFactory