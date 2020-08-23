import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
// ここで認証周りを実装できるなら実装したい
export default async (request: NowRequest, response: NowResponse) => {
  const accessURL = 'https://github.com/login/oauth/access_token'
  const { code } = request.query

  const sendData = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code,
  }
  try {
    const res = await axios.post(accessURL, sendData, {
      headers: { ACCEPT: 'application/json' },
    })
    if (res) {
      console.log(res)
      return response.json(res)
    }
  } catch (e) {
    console.error(e)
    return response.json(e)
  }
}
