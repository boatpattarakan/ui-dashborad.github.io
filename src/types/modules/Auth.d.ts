import type { AxiosResponse } from 'axios'

export interface Auth {
  loading: boolean
  login: ({ email, password }) => Promise<AxiosResponse>
  logout: () => void
}

export interface IAuth {
  username: string
  password: string
}

export interface IAuthRefreshToken {
  access_token: string
  expires_in: string
  token_type: string
  refresh_token: string
  id_token: string
  user_id: string
  project_id: string
}

export interface IUser {
  displayName?: string
  email?: string
  exp?: number
  id?: number
  phone?: string
  firstName?: string
  lastName?: string
  username?: string
  type?: string
  birthDate?: string
  address?: string
  country?: string
  district?: string
  fullName?: string
  postalCode?: string
  province?: string
  sex?: string
  subDistrict?: string
}
