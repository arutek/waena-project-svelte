<main in:fade>
  <section class="flex flex-row">
    <div class="basis-2/12" />
    <section id="main-content" class="relative top-14 right-0 basis-10/12">
      <div class=" bg-white shadow m-8">
        <div class="flex flex-row justify-between p-4">
          <input class="input" placeholder="Search" />
          <a href={`${currentUrl}/add`} use:link class="button btn-primary">Add Product</a>
        </div>
        <Table headList={headerList} list={products} />
        {#if products.length > 0}
          <div class="flex flex-row py-8 items-center">
            <p class="basis-4/12 mx-auto">Total: {products.length}</p>
            <div class="basis-4/12 flex flex-row text-center mx-auto">
              <p>1</p>
              <p>2</p>
            </div>
            <select class="input mx-auto">
              <option>10</option>
              <option>20</option>
            </select>
          </div>
        {/if}
      </div>
      <footer class="pl-8">
        ©2022 Arutek
      </footer>
    </section>
  </section>
</main>

<script lang="ts">
  import {onMount} from "svelte"
  import Table from "@/components/commons/Table.svelte"
  import routeParser from "@/factories/route-parser"
  import {link, location} from "svelte-spa-router"
  import {fade} from "svelte/transition"
  import product from "@/libraries/product"
  import notification from "@/factories/notification"
  

  let products = []
  onMount(async() => {
    try {
      const res = await product.getProducts()
      products = res.data
    } catch (err) {
      notification.notifError(`Get Product Statuses err: ${err.message}`)
    }
  })

  const currentUrl = routeParser.routeNow($location)
  const headerList = [
    {name: "qr", value: "QR Code", type: "IMG"},
    {name: "name", imageKey: "thumbnail", value: "Product", type: "WIMG"},
    {name: "sku", value: "SKU", type: "TEXT"},
    {name: "quantity", value: "Quantity", type: "NUM"},
    {name: "sellPrice", value: "Price", type: "CUR"},
    {name: "status", value: "Status", type: "LABEL"},
  ]
</script>