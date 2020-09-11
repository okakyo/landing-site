// TODO: ここに State管理を行うための実装を行う

export interface UserInterface {
  id?: string
  name: string
  email: string
  photoUrl: string
  emailVerified: boolean
  acceptLogin: boolean
}

export interface UserDetailInterface extends UserInterface {
  userId: string
  userName: string
  description: Text

  isshow?: boolean
  createdAt: number
  updateAt: number
}

export interface OauthUserInterface {
  name: string
  picture: string
  iss: string
  aud: string
  authTime: number
  user_id: string
  sub: string
  iat: number
  exp: number
  email: string
  email_verified: boolean
  firebase: unknown
}
