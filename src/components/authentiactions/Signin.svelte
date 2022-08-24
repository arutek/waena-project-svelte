<main in:fade>
  <h5 class="font-bold text-black">Sign In</h5>
  <div class="py-4 text-1sm">
    <input type="text" id="email-field" class="input mb-8 w-full" placeholder="Email" />
    <input type="password" id="password-field" class="input mb-8 w-full" placeholder="Password" />
    <button type="button" class="button btn-primary w-full">Sign In</button>
  </div>
  <p class="text-1sm">Not a Member yet? <a href="/signup" use:link class="text-sky-500 cursor-pointer">Sign up</a></p>
</main>

<script lang="ts">
  import {link} from "svelte-spa-router"
  import {fade} from "svelte/transition"
</script>