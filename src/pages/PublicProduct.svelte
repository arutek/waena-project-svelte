<main>
  {#if !err}
    <p>{err}</p>
  {/if}
  <img src={`${storageUrl}/${image}`} alt="product-thumbnail" />
  <p>Product Name: {name}</p>
  <p>Product Price: {price}</p>
</main>

<script lang="ts">
  import routeParser from "@/factories/route-parser"
  import {location} from "svelte-spa-router"
  import publicApi from "@/libraries/public"
  import {onMount} from "svelte"

  let image:string
  let name:string
  let price:string
  let err:string

  const storageUrl = import.meta.env.VITE_STORAGE_URL
  const routeParams = routeParser.paramParse($location, "product") 
  onMount(async () => {
    try {
      const res = await publicApi.getPublicProduct(routeParams[0], routeParams[1])
      image = res.data[0].thumbnail
      name = res.data[0].name
      price = res.data[0].sellPrice
    } catch (err) {
      console.log(err.message)
    }
  })
</script>