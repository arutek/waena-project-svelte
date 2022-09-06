<svelte:head>
  <title>Waena Project</title>
</svelte:head>
<Router {routes} />

<script lang="ts">
  import Router, {replace} from "svelte-spa-router"
  import wrap from "svelte-spa-router/wrap"
  import MainRoute from "./routes/Main.svelte"
  import AuthRoute from "./pages/Auth.svelte"
  import "./assets/styles/index.scss"
  import "./assets/styles/button.scss"
  import "./assets/styles/input.scss"
  import "./assets/icons/aru-icon.scss"
  import apiCall from "@/libraries/api-call"
  import cookie from "@/factories/cookie"
  import PublicProduct from "./pages/PublicProduct.svelte"
  
  const authUrl = `${import.meta.env.VITE_APP_API}/auth`
  const isAuthorized = async () => {
    try {
      const res = await apiCall.loggedGet(authUrl)
      const expiry = 30 * 60
      cookie.setCookie("accessToken", res.data, expiry)
      return true
    } catch (err:any) {
      console.error(`Not Authorized: ${err.message}`)
      cookie.delCookie("accessToken")
      replace("/auth/signin")
      return false
    }
  }
  const notAuthorized = async () => {
    try {
      const res = await apiCall.loggedGet(authUrl)
      if (res.data) {
        const expiry = 30 * 60
        cookie.setCookie("accessToken", res.data, expiry)
        replace("/app")
        return false
      }
      cookie.delCookie("accessToken")
      return true
    } catch (err:any) {
      console.error(err.message)
      return true
    }
  }
  const routes = {
    "/": wrap({
      component: MainRoute,
      conditions: [() => {
        replace("/app")
        return false
      }],
    }),
    "/app": wrap({
      component: MainRoute,
      conditions: [isAuthorized],
    }),
    "/app/*": wrap({
      component: MainRoute,
      conditions: [isAuthorized],
    }),
    "/auth": wrap({
      component: AuthRoute,
      conditions: [notAuthorized],
    }),
    "/auth/*": wrap({
      component: AuthRoute,
      conditions: [notAuthorized],
    }),
    "/public/product/:id/:sku": PublicProduct,
  }
</script>