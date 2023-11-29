export type IPaginationQuery = {
  page: number
  limit?: number
}

export interface IMenuItem {
  label: string
  path: string
}

export interface IMenu {
  label: string
  path: string
  icon: React.ReactNode
  list: IMenuItem[]
}

export type IToken = {
  token: string
}

export interface IErrorResponse {
  errorCode: string
  response: {
    data: {
      message: string
    }
  }
}
