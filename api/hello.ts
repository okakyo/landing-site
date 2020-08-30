import { NowRequest, NowResponse } from '@vercel/node'

import axios from 'axios'

// ここで認証周りを実装できるなら実装したい
export default async (request: NowRequest, response: NowResponse) => {
  const getMeta: any = {}
  const res = await axios.get('https://github.com/okakyo/landing-site')
  const parser = new DOMParser()
  const html = parser.parseFromString(res.data, 'text/html')
  const headers = html.head.children
  Array.from(headers).map((v) => {
    const prop = v.getAttribute('property')
    if (!prop) return
    getMeta[prop] = v.getAttribute('content')
  })

  return response.json({
    meta: getMeta,
  })
}
