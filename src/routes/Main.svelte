<main>
  <HeaderBarSvelte />
  <NavigationBarSvelte />
  <Router {routes} {prefix} />
</main>

<script lang="ts">
  import HeaderBarSvelte from "@/components/commons/HeaderBar.svelte"
  import NavigationBarSvelte from "@/components/commons/NavigationBar.svelte"
  import Router from "svelte-spa-router"
  import ProductSvelte from "@/pages/Product.svelte"
  const prefix = "/app"
  const routes = {
    "/": ProductSvelte,
  }
</script>