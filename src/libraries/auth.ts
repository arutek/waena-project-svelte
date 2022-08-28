import apiCall from "./api-call"
import cookie from "@/factories/cookie"

const authUrl = `${import.meta.env.VITE_APP_API}/auth`

export default {
  async signin (payload:object) {
    const clientIp = await apiCall.getIp()
    const newPayload = Object.assign(
      payload,
      {ip: clientIp},
    )
    const res = await apiCall.postData(`${authUrl}/signin`, newPayload)
    const expiry = 30 * 60
    cookie.setCookie("accessToken", res.data, expiry)
    return true
  },
  async signup (payload:object) {
    const clientIp = await apiCall.getIp()
    const newPayload = Object.assign(
      payload,
      {ip: clientIp},
    )
    return await apiCall.postData(`${authUrl}/signup`, newPayload)
  },
}