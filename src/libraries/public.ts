import apiCall from "./api-call"

const publicUrl = `${import.meta.env.VITE_APP_API}/public`

export default {
  async getPublicProduct (id:string, sku:string) {
    return await apiCall.getData(`${publicUrl}/product/${id}/${sku}`)
  },
}