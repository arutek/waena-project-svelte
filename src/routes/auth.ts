import AuthSvelte from "@/pages/Auth.svelte"
import ProductSvelte from "@/pages/Product.svelte"

export default {
  "/signin": AuthSvelte,
  "/signup": AuthSvelte,
  "/": ProductSvelte,
}