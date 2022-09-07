<main class="fixed flex flex-col gap-2 bottom-4 right-4 z-50">
  {#each $toastData as item}
    <div class={`${bgChecker(item.type)} flex gap-2 w-72 min-h-24 h-fit rounded-md items-center p-2`}>
      <p class="text-white text-1sm">icon</p>
      <p class="text-white text-1sm">{item.message}</p>
    </div>
  {/each}
</main>

<script lang="ts">
  import {toastData} from "@/store"
  import {beforeUpdate} from "svelte"

  let notifData
  
  beforeUpdate(() => {
    notifData = $toastData
    if ($toastData.length > 0) {
      setTimeout(() => {
        notifData.splice(0, 1)
        toastData.update(() => notifData)
      }, 2500)
    }
  })
  
  const bgChecker = (type:string) => {
    switch (type) {
    case "notifError":
      return "bg-red-500"
    case "notifWarn":
      return "bg-amber-500"
    default:
      return "bg-green-500"
    }
  }
</script>