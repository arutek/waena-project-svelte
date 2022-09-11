<nav id="navbar" class="fixed bg-slate-800 text-white top-0 w-2/12 h-screen z-30">
  <div class="flex font-bold bg-slate-900 items-center justify-between h-14">
    <h5 class="px-6">Waena</h5>
    <span class="flex hover:bg-slate-800 items-center justify-center rounded h-10 w-10 mx-2">
      <i class="aru-icon-angle-left" />
    </span>
  </div>
  <ul class="text-neutral-400">
    <li class={$location === "/app/product" ? "px-6 py-2 bg-slate-900" : "px-6 py-2 hover:bg-slate-900"} on:click={() => push("/app/product")}>Products</li>
  </ul>
</nav>

<script lang="ts">
  import {location, push} from "svelte-spa-router"
</script>