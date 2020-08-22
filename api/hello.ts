import { NowRequest, NowResponse } from '@vercel/node'

// ここで認証周りを実装できるなら実装したい
export default (request: NowRequest, response: NowResponse) => {
  const { name = 'World' } = request.query
  response.status(200).send(`Hello ${name}!`)
}
