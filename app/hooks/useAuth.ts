import { AuthContext } from 'app/contexts'
import { router } from 'expo-router'
import { serviceClient } from 'http/index'
import { useContext } from 'react'

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)


  const onLogout = () => {
    serviceClient.logout()
    router.replace('/auth/SignUp')
  }
    
  return { user, setUser, onLogout }
}