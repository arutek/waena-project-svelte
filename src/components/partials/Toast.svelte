<main class="fixed flex flex-col gap-2 bottom-4 right-4">
  {#each notifData as item}
    <div class={`${bgChecker(item.type)} flex gap-2 w-72 min-h-24 h-fit rounded-md items-center p-2`}>
      <p class="text-white text-1sm">icon</p>
      <p class="text-white text-1sm">{item.message}</p>
    </div>
  {/each}
</main>

<script lang="ts">
  import {toastData} from "@/store"

  let notifData:any[]

  toastData.subscribe(arr => {
    notifData = arr
  })
  $: if (notifData.length > 0) {
    setTimeout(() => {
      const newData = notifData.splice(0, 1)
      toastData.set(newData)
    }, notifData[0].timeout)
  }
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