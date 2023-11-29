import jwt from 'jsonwebtoken'
import dayjs from 'dayjs'

export const getAccessTokenExpires = (accessToken: string) => {
  const decode = jwt.decode(accessToken) as { exp: number }
  const accessTokenExpires = decode?.exp * 1000
  return accessTokenExpires
}

export const isTokenExpired = (accessTokenExpires: number) => {
  const currentTime = dayjs()
  const expirationTime = dayjs(accessTokenExpires)
  const durationInHours = expirationTime.diff(currentTime, 'hour')
  return durationInHours < 0
}
