<main in:fade>
  <section class="flex flex-row">
    <div class="basis-2/12" />
    <section id="main-content" class="relative top-14 right-0 basis-10/12 m-8">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-4">
          {#if currentUrl.includes("edit")}
            <CardSvelte title={"QR"}>
              <div class="flex flex-col mb-4 items-center">
                <div class="relative w-56 h-56 shadow-xl">
                  <div class="absolute flex items-center justify-center right-0 translate-x-4 -translate-y-4 shadow rounded-full cursor-pointer bg-white hover:bg-slate-100 w-8 h-8">
                    <i class="text-1sm aru-icon-edit" />
                  </div>
                  {#if !qr}
                    <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="upload-placeholder" />
                  {:else}
                    <img src={`${storageUrl}/${qr}`} class="object-contain w-56 h-56" alt="upload-placeholder" />
                  {/if}
                </div>
                <p>{qr}</p>
                <button type="button" class="button btn-primary" on:click={genQr}>Generate QR</button>
              </div>
            </CardSvelte>
          {/if}
          <CardSvelte title={"Thumbnail"}>
            <div class="flex flex-col mb-4 items-center">
              <label class="relative w-56 h-56 shadow-xl">
                <div class="absolute flex items-center justify-center right-0 translate-x-4 -translate-y-4 shadow rounded-full cursor-pointer bg-white hover:bg-slate-100 w-8 h-8">
                  <i class="text-1sm aru-icon-edit" />
                </div>
                {#if !image}
                  <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="upload-placeholder" />
                {:else}
                  <img src={`${storageUrl}/${image}`} class="object-contain w-56 h-56" alt="upload-placeholder" />
                {/if}
                <input type="file" id="productImage" accept={accFiles()} bind:files={uploadedImage} on:change={(e) => imageSelected(e)} hidden />
              </label>
              <p class="text-center font-light mb-4">
                Set the product thumbnail image.
                <br />Only accepted PNG, JPG, JPEG files
              </p>
              <button type="reset" class="button btn-primary">Remove Image</button>
            </div>
          </CardSvelte>
          <CardSvelte title={"Status"}>
            <select bind:value={statusSelected} class="input bg-white mb-2">
              {#each productStatuses as status}
                <option value={status.id}>{status.name.toUpperCase()}</option>
              {/each}
            </select>
            <p class="font-light">Set the product status</p>
          </CardSvelte>
          <CardSvelte title={"Category"}>
            <select class="input bg-white mb-2">
              <option>test1</option>
              <option>test2</option>
              <option>test3</option>
            </select>
            <p class="font-light">Add product to category</p>
          </CardSvelte>
        </div>
        <div class="col-span-8">
          <CardSvelte title={"General"}>
            <label class="mb-4">
              <p class="pb-2">Product Name <span class="text-red-500">*</span></p>
              <input type="text" bind:value={productName} class="input w-full" />
              <p class="font-light">A product name is required and should be unique</p>
            </label>
            <label class="mb-4">
              <p class="pb-2">SKU<span class="text-red-500">*</span></p>
              <input type="text" bind:value={productSku} class="input w-full" />
              <p class="font-light">A SKU is required and should be unique</p>
            </label>
            <label class="mb-4">
              <p class="pb-2">Quantity <span class="text-red-500">*</span></p>
              <input type="number" bind:value={productQuantity} class="input w-full" />
              <p class="font-light">A product quantity is required</p>
            </label>
          </CardSvelte>
          <CardSvelte title={"Pricing"}>
            <label class="mb-4">
              <p class="pb-2">Production Cost <span class="text-red-500">*</span></p>
              <input type="number" bind:value={productCost} class="input w-full" />
              <p class="font-light">A production cost is required</p>
            </label>
            <label class="mb-4">
              <p class="pb-2">Product Price <span class="text-red-500">*</span></p>
              <input type="number" bind:value={productPrice} class="input w-full" />
              <p class="font-light">A product price is required</p>
            </label>
          </CardSvelte>
        </div>
      </div>
      <div class="flex justify-end gap-8 m-8">
        <button type="button" on:click={cancel}>Cancel</button>
        {#if currentUrl.includes("edit")}
          <button type="button" on:click={updateProduct} class="button btn-primary">Update Product</button>
        {:else}
          <button type="button" on:click={addProduct} class="button btn-primary">Add Product</button>
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
  import {fade} from "svelte/transition"
  import CardSvelte from "@/components/partials/Card.svelte"
  import {location, push} from "svelte-spa-router"
  import routeParser from "@/factories/route-parser"
  import product from "@/libraries/product"
  import notification from "@/factories/notification"

  interface productStatus {
    id: number,
    name: string
  }

  let image
  let qr
  let uploadedImage
  let productName
  let productSku
  let productQuantity
  let productPrice
  let productCost
  let productStatuses:productStatus[] = []
  let statusSelected:number
  let productImage
  
  const storageUrl = import.meta.env.VITE_STORAGE_URL
  const currentUrl = routeParser.routeNow($location)
  const beforeUrl = routeParser.routeBefore($location)
  const routeParams = routeParser.paramParse($location, "edit") 

  onMount(async() => {
    try {
      if (currentUrl.includes("edit")) {
        const res1 = await product.getProductDetails(routeParams[0])
        productName = res1.data[0].name
        productSku = res1.data[0].sku
        qr = res1.data[0].qr
        productQuantity = res1.data[0].quantity
        productPrice = res1.data[0].sellPrice
        productCost = res1.data[0].productionCost
        statusSelected = res1.data[0].status.id
        image = res1.data[0].thumbnail
        productImage = res1.data[0].thumbnail
      }
      const res2 = await product.getProductStatuses()
      productStatuses = res2.data
    } catch (err) {
      console.error(`Get Product Statuses err: ${err.message}`)
    }
  })
  const cancel = () => {
    push("/app/product")
  }
  const accFileList = [
    "image/jpeg",
    "image/jpg",
    "image/png",
  ]
  const accFiles = () => {
    let format = ""
    accFileList.forEach((item) => {
      format += `${item},`
    })
    return format
  }
  const imageSelected = async (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e => {
      image = e.target.result
    }
    const formData = new FormData()
    formData.append("image", uploadedImage[0])
    try {
      const res = await product.addProductImage(formData)
      productImage = res.data
    } catch (err) {
      notification.notifWarn(`Upload Product Image err: ${err.message}`)
    }
  }
  const genQr = async () => {
    try {
      const res = await product.getProductQr(routeParams[0])
      qr = res.data
      console.log(qr)
    } catch (err) {
      notification.notifWarn(`Generate Product QR Err: ${err.message}`)
    }
  }
  const addProduct = async () => {
    const payload = {
      name: productName,
      sku: productSku,
      thumbnail: productImage,
      qr: qr,
      quantity: productQuantity,
      sellPrice: productPrice,
      productionCost: productCost,
      statusId: statusSelected,
    }
    try {
      await product.addProduct(payload)
      push(beforeUrl)
    } catch (err) {
      notification.notifError(`Add Product Err: ${err.message}`)
    }
  }
  const updateProduct = async () => {
    const payload = {
      name: productName,
      sku: productSku,
      thumbnail: productImage,
      qr: qr,
      quantity: productQuantity,
      sellPrice: productPrice,
      productionCost: productCost,
      statusId: statusSelected,
    }
    try {
      await product.updateProduct(routeParams[0] ,payload)
      push("/app/product")
    } catch (err) {
      notification.notifError(`Update Product Err: ${err.message}`)
    }
  }
</script>