import apiCall from "./api-call"

const authUrl = `${import.meta.env.VITE_APP_API}/products`

export default {
  async addProductImage (payload:BodyInit) {
    return await apiCall.uploadFile(`${authUrl}/image`, payload)
  },
  async addProduct (payload:object) {
    return await apiCall.loggedPost(`${authUrl}`, payload)
  },
  async getProducts () {
    return await apiCall.loggedGet(`${authUrl}`)
  },
  async getProductStatuses () {
    return await apiCall.loggedGet(`${authUrl}/statuses`)
  },
}