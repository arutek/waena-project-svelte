<main in:fade>
  <h5 class="font-bold text-black">Sign In</h5>
  <form on:submit|preventDefault={signin} class="py-4 text-1sm">
    <input type="text" bind:value={email} id="email-field" class="input mb-8 w-full" placeholder="Email" />
    <input type="password" bind:value={password} id="password-field" class="input mb-8 w-full" placeholder="Password" />
    <button type="submit" class="button btn-primary w-full">Sign In</button>
  </form>
  <p class="text-1sm">
    Not a Member yet?
    <a href={`${routeParser.routeParser($location)}/signup`} use:link class="text-sky-500 cursor-pointer">Sign up</a>
  </p>
</main>

<script lang="ts">
  import {link, location, replace} from "svelte-spa-router"
  import {fade} from "svelte/transition"
  import routeParser from "@/factories/route-parser"
  import auth from "@/libraries/auth"

  let email = ""
  let password= ""
  const signin = async () => {
    const payload = {
      email: email,
      password: password,
    }
    try {
      await auth.signin(payload)
      replace("/app")
    } catch (err:any) {
      console.error(`Signin Err: ${err.message}`)
    }
  }
</script>