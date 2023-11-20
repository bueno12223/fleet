import AsyncStorage from '@react-native-async-storage/async-storage'
import HttpFactory,{ ErrorResponse } from './http'
import { API_AUTH, API_USERS } from 'constants/api'
import { User } from 'types/users'

export class ServiceClient extends HttpFactory {
    #currentToken: string | undefined = ''

    constructor() {
      super({
        baseUrl: process.env.EXPO_PUBLIC_API_URL || '',
        initialHeaders: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Access-Control-Allow-Credentials': 'true',
        },
      })
      AsyncStorage.getItem('token').then((token) => {
        this.#currentToken = token || undefined
      })
    }

    async setAuthorizationToken(): Promise<void> {
      this.setHeaders({
        'Authorization': `Bearer ${this.#currentToken}`,
      })
    }

    async login(email: string, password: string): Promise<boolean | string> {
      try {
        this.setDefaultHeaders()
        const response = await this.post<{access_token: string}>(API_AUTH.login, { phone: email, password }, 'json')
        if(!response) return false

        if((response as ErrorResponse).message) {
          return (response as ErrorResponse).message
        }
        if((response as {access_token: string} ).access_token) {
          this.#currentToken = (response as {access_token: string} ).access_token
          AsyncStorage.setItem('token', this.#currentToken)
          this.setAuthorizationToken()
          return true
        }
        return false
        
      } catch (error) {
        console.log('error', error)
        return false
      }
    }

    logout() {
      AsyncStorage.removeItem('token')
      this.#currentToken = undefined
    }

    onUnauthorized(): void {
      this.logout()
      // window.location.href = '/login'
    }

    async getMe() {
      if(!this.#currentToken) throw new Error('Inicia sesión antes de continuar')
      const user = await this.get<User>(API_USERS.getMe)
      return user
    }
}
