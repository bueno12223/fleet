/* eslint-disable indent */
import { serviceClient } from 'http/index'
import { ServiceClient } from 'http/server'
import { useState } from 'react'
import useToast from './useToast'
import { ErrorResponse } from 'http/http'

interface RequestState {
  loading: boolean;
  error: Error | null;
  data: unknown;
}

type RequestMethod = 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'GET';

type RequestFunction = <ResT, ReqT extends object | FormData | string = object>(url: string, data:ReqT) => Promise<ResT | null>;

type UseRequestHook = (
  _method: RequestMethod,
  client?: ServiceClient,
) => [RequestFunction, RequestState];

const useRequest: UseRequestHook = (method, client = serviceClient) => {
  const [, toastError] = useToast()
  const [state, setState] = useState<RequestState>({
    loading: false,
    error: null,
    data: null,
  })
  const request: RequestFunction = async <ResT, ReqT extends string | object | FormData>(url: string, data:ReqT) => {       
    setState({ loading: true, error: null, data: null })
    try {
      let responseData
      switch (method) {
        case 'GET':
          responseData = await client.get<ResT>(url, 'json', true)
          break
        case 'POST':
          responseData = await client.post<ResT>(url, data)
          break
        case 'PUT':
          responseData = await client.put<ResT>(url, data as object)
          break
        case 'DELETE':
          responseData = await client.delete<ResT>(url)
          break
            
        case 'PATCH':
          responseData = await client.patch<ResT>(url, data as object)
          break
        default:
          break
      }

      setState({ loading: false, error: null, data: responseData })
      if((responseData as ErrorResponse).message) {
        toastError((responseData as ErrorResponse).message || 'Ocurrió un error inesperado')
        return null
      }
      const response: ResT | null = responseData as ResT
      return response ?? null
    } catch (error: unknown) {
      if((error as Error).message) {
        const message = (error as Error).message
        toastError(message)
      } else {
        toastError('Ocurrió un error inesperado')
      }
      return null
    }
    finally {
      setState(prev => ({ ...prev, loading: false }))
    }
  }

  return [request, state]
}

export default useRequest