<table class="table-fixed w-full text-center">
  <thead class="bg-neutral-100">
    <tr>
      {#each headList as item}
      <th class="py-2">{item.value}</th>
      {/each}
      <th class="py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#if list.length < 1}
      <tr>
        <td class="py-10" colspan="6">No data available</td>
      </tr>
    {:else}
      {#each list as item}
        <tr class="border-y">
          {#each headList as header}
            <td class="py-4">
              {#if header.type === "IMG"}
                <img src={`${storageUrl}/${item["thumbnail"]}`} alt="product-img" class="mx-auto mb-2" />
              {:else if header.type === "WIMG"}
                <img src={`${storageUrl}/${item["thumbnail"]}`} alt="product-img" class="mx-auto mb-2" />
                <p>{item[header.name]}</p>
              {:else if header.type === "CUR"}
                <p>{Intl.NumberFormat("id-ID", ({style: "currency", currency: "IDR"})).format(item[header.name])}</p>
              {:else if header.type === "NUM"}
                <p>{Intl.NumberFormat("id-ID").format(item[header.name])}</p>
              {:else if header.type === "RATE"}
                <p>{item[header.name]}</p>
              {:else if header.type === "LABEL"}
                {#if (item[header.name]).name.toLowerCase() === "active"}
                  <p class="text-1sm text-white bg-green-500 rounded-full w-fit px-4 py-1 mx-auto">{item[header.name].name}</p>
                {:else}
                  <p class="text-1sm text-white bg-neutral-500 rounded-full w-fit px-4 py-1 mx-auto">{item[header.name].name}</p>
                {/if}
              {:else}
                <p>{item[header.name]}</p>
              {/if}  
            </td>
          {/each}
          <td class="py-4">
            <i on:click={() => push(`${currentUrl}/edit/${item.id}`)} class="aru-icon-edit rounded hover:bg-neutral-100 p-2" />
            <i class="aru-icon-trash rounded hover:bg-neutral-100 p-2" />
          </td>
        </tr>
      {/each}
    {/if}
  </tbody>
</table>

<script lang="ts">
  import routeParser from "@/factories/route-parser"
  import {location, push} from "svelte-spa-router"

  const storageUrl = import.meta.env.VITE_STORAGE_URL
  const currentUrl = routeParser.routeNow($location)
  interface headListType {
    name: string,
    value: string,
    type: string,
  }
  interface statusType {
    id:number,
    name:string,
  }
  interface listType {
    id:number,
    sku:string,
    name:string,
    thumbnail:string,
    quantity:number,
    sellPrice:number,
    status:statusType,
  }
  /* props */
  export let headList:headListType[]
  export let list:listType[]
</script>