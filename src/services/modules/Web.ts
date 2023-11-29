import BaseService from './Base'

import type { IToken } from '@/types/modules/Base'
import type { IAuth, IUser } from '@/types/modules/Auth'

export default class WebService extends BaseService {
  // [POST] Login
  static async login(params: IAuth): Promise<IToken> {
    return this._post(`/auth/login`, { phone: params.username, password: params.password })
  }

  // [GET] user info
  static async userInfo(): Promise<IUser> {
    return this._get(`/users`)
  }
}
