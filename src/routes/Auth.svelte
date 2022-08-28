<Router {routes} {prefix} />

<script lang="ts">
  import Router from "svelte-spa-router"
  import AuthSvelte from "@/pages/Auth.svelte"
  
  const prefix = "/auth"
  const routes = {
    "/signin": AuthSvelte,
    "/signup": AuthSvelte,
  }
</script>