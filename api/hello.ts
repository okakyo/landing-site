import { NowRequest, NowResponse } from '@vercel/node'
import { JSDOM } from 'jsdom'
import axios from 'axios'
// ここで認証周りを実装できるなら実装したい
export default async (request: NowRequest, response: NowResponse) => {
  const res = await axios.get('https://github.com/okakyo/landing-site')
  const html = new JSDOM(res.data).window.document
  const title = html.title
  return response.json({
    title,
    meta: html.getElementsByTagName('meta'),
  })
}
