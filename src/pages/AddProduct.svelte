<main in:fade>
  <section class="flex flex-row">
    <div class="basis-2/12" />
    <section id="main-content" class="relative top-14 right-0 basis-10/12 m-8">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-4">
          <CardSvelte title={"Thumbnail"}>
            <div class="relative mx-auto mb-4">
              <div class="absolute flex items-center justify-center right-0 translate-x-4 -translate-y-4 bg-white shadow rounded-full w-8 h-8">
                <i class="text-1sm aru-icon-edit" />
              </div>
              <figure class="w-56 h-56 shadow-xl" />
            </div>
            <p class="text-center font-light">
              Set the product thumbnail image.
              <br />Only accepted PNG, JPG, JPEG files
            </p>
          </CardSvelte>
          <CardSvelte title={"Status"}>
            <select class="input bg-white mb-2">
              <option>test1</option>
              <option>test2</option>
              <option>test3</option>
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
              <input type="text" class="input w-full" />
              <p class="font-light">A product name is required and should be unique</p>
            </label>
            <label class="mb-4">
              <p class="pb-2">SKU<span class="text-red-500">*</span></p>
              <input type="text" class="input w-full" />
              <p class="font-light">A SKU is required and should be unique</p>
            </label>
          </CardSvelte>
          <CardSvelte title={"Pricing"}>
            <label class="mb-4">
              <p class="pb-2">Production Cost <span class="text-red-500">*</span></p>
              <input type="text" class="input w-full" />
              <p class="font-light">A production cost is required</p>
            </label>
            <label class="mb-4">
              <p class="pb-2">Product Price <span class="text-red-500">*</span></p>
              <input type="text" class="input w-full" />
              <p class="font-light">A product price is required</p>
            </label>
          </CardSvelte>
        </div>
      </div>
      <div class="flex justify-end gap-8 m-8">
        <button type="button" on:click={cancel}>Cancel</button>
        <button type="button" class="button btn-primary">Add Product</button>
      </div>
      <footer class="pl-8">
        ©2022 Arutek
      </footer>
    </section>
  </section>
</main>

<script lang="ts">
  import {fade} from "svelte/transition"
  import CardSvelte from "@/components/partials/Card.svelte"
  import {location, push} from "svelte-spa-router"
  import routeParser from "@/factories/route-parser"

  const beforeUrl = routeParser.routeBefore($location)
  const cancel = () => {
    push(beforeUrl)
  }
</script>