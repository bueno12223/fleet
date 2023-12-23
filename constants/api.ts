export const API_AUTH = {
  login: '/auth/login',
}

export const API_USERS = {
  'getMe': '/users/me',
  'verifyCode': '/users/verify',
  'signUp': '/users',
  'uploadProfileImage': '/users/profile-picture',
}

export const API_DRIVERS = {
  'register': '/drivers',
  'get': '/drivers',
  'verificationFiles': '/drivers/verification-files',
  'update': '/drivers',
}

export const API_OWNERS = {
  'register': '/owners',
  'document': '/owners/document',
}