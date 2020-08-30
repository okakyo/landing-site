import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
// ここで認証周りを実装できるなら実装したい
export default async (request: NowRequest, response: NowResponse) => {
  const res = await axios.get('https://github.com/okakyo/landing-site')
  console.log(res.headers)
  console.log(res.config)
  console.log(res.data)
  return response.send('Done')
}
