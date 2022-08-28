<main class="flex flex-col bg-white shadow my-8 px-6 py-8">
  <h5 class="text-black font-semibold mb-4">{title}</h5>
  <slot />
</main>

<script lang="ts">
  export let title:string
</script>