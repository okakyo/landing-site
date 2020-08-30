import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
// ここで認証周りを実装できるなら実装したい
export default async (request: NowRequest, response: NowResponse) => {
  const res = await axios.get('https://github.com/okakyo/landing-site')

  return response.json({
    data: res.data,
    header: res.headers,
    config: res.config,
  })
}
