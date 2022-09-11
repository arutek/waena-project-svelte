import apiCall from "./api-call"

const productUrl = `${import.meta.env.VITE_APP_API}/products`

export default {
  async addProductImage (payload:BodyInit) {
    return await apiCall.uploadFile(`${productUrl}/image`, payload)
  },
  async getProductQr (id:string) {
    return await apiCall.loggedGet(`${productUrl}/qr/${id}`)
  },
  async addProduct (payload:object) {
    return await apiCall.loggedPost(`${productUrl}`, payload)
  },
  async getProducts (params?:object) {
    return await apiCall.loggedGet(`${productUrl}`, params)
  },
  async getProductDetails (id:string) {
    return await apiCall.loggedGet(`${productUrl}/${id}`)
  },
  async updateProduct (id:string, payload:object) {
    return await apiCall.loggedPut(`${productUrl}/${id}`, payload)
  },
  async getProductStatuses () {
    return await apiCall.loggedGet(`${productUrl}/statuses`)
  },
  async getProductListPdf (params = {}){
    const payload = Object.assign(
      params,
      {createPdf: true},
    )
    return await apiCall.loggedDl(`${productUrl}`, payload)
  },
}