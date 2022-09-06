<main in:fade>
  <h5 class="font-bold text-black">Sign In</h5>
  <form on:submit|preventDefault={signin} class="py-4 text-1sm">
    <input type="text" bind:value={email} id="email-field" class="input mb-8 w-full" placeholder="Email" />
    <input type="password" bind:value={password} id="password-field" class="input mb-8 w-full" placeholder="Password" />
    <button type="submit" class="button btn-primary w-full" disabled={isLoading}>
      {#if !isLoading}
        <p>Sign In</p>
      {:else}
        <LoadingButtonSvelte />
      {/if}
    </button>
  </form>
  <p class="text-1sm">
    Not a Member yet?
    <a href={`${beforeUrl}/signup`} use:link class="text-sky-500 cursor-pointer">Sign up</a>
  </p>
</main>

<script lang="ts">
  import {link, location, replace} from "svelte-spa-router"
  import {fade} from "svelte/transition"
  import routeParser from "@/factories/route-parser"
  import auth from "@/libraries/auth"
  import LoadingButtonSvelte from "@/components/partials/LoadingButton.svelte"
  import notification from "@/factories/notification"

  let email:string
  let password:string
  let isLoading = false
  const beforeUrl = routeParser.routeBefore($location)
  const signin = async () => {
    isLoading = true
    const payload = {
      email: email,
      password: password,
    }
    try {
      await auth.signin(payload)
      replace("/app")
    } catch (err:any) {
      notification.notifError(`Signin Err: ${err.message}`)
    } finally {
      isLoading = false
    }
  }
</script>