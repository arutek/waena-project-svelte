import cookie from "@/factories/cookie"
import paramParser from "@/factories/param-parser"

export default {
  async getIp () {
    try {
      const res = fetch("https://api64.ipify.org")
      const resBody = (await res).text()
      return resBody
    } catch(err:any) {
      return `${err.name}: ${err.message}`
    }
  },
  async getData (url:string, param?:object) {
    if (param) {
      url = paramParser.paramParser(url, param)
    }
    const res = await fetch(url)
    const resBody = await res.json()
    if (resBody.errors) throw new Error(resBody.errors[0])
    if (!res.ok) throw new Error(resBody)
    return resBody
  },
  async loggedGet (url:string, param?:object) {
    if (param) {
      url = paramParser.paramParser(url, param)
    }
    const token = cookie.getCookie("accessToken")
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const resBody = await res.json()
    if (resBody.errors) throw new Error(resBody.errors[0])
    if (!res.ok) throw resBody
    return resBody
  },
  async postData (url:string, payload:Object) {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    })
    const resBody = await res.json()
    if (resBody.errors) throw new Error(resBody.errors[0])
    if (!res.ok) throw resBody
    return resBody
  },
  async loggedPost (url:string, payload:object) {
    const token = cookie.getCookie("accessToken")
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
    const resBody = await res.json()
    if (resBody.errors) throw new Error(resBody.errors[0])
    if (!res.ok) throw resBody
    return resBody
  },
  async uploadFile (url:string, payload:BodyInit) {
    const token = cookie.getCookie("accessToken")
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: payload,
    })
    const resBody = await res.json()
    if (resBody.errors) throw new Error(resBody.errors[0])
    if (!res.ok) throw resBody
    return resBody
  },
}