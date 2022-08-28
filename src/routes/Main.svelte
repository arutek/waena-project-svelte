<main>
  <HeaderBarSvelte />
  <NavigationBarSvelte />
  <Router {routes} {prefix} />
</main>

<script lang="ts">
  import HeaderBarSvelte from "@/components/commons/HeaderBar.svelte"
  import NavigationBarSvelte from "@/components/commons/NavigationBar.svelte"
  import Router, {replace} from "svelte-spa-router"
  import ProductSvelte from "@/pages/Product.svelte"
  import AddProductSvelte from "@/pages/AddProduct.svelte"
  import {wrap} from "svelte-spa-router/wrap"

  const prefix = "/app"
  const routes = {
    "/": wrap({
      component: ProductSvelte,
      conditions: [() => {
        replace("/app/product")
        return false
      }],
    }),
    "/product": ProductSvelte,
    "/product/add": AddProductSvelte,
  }
</script>