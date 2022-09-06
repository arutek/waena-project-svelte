<main in:fade>
  <h5 class="font-bold text-black">Sign Up</h5>
  <form on:submit|preventDefault={signup} class="py-4 text-1sm">
    <input bind:value={username} type="text" id="username-field" class="input mb-8 w-full" placeholder="Username" />
    <input bind:value={email} type="text" id="email-field" class="input mb-8 w-full" placeholder="Email" />
    <input bind:value={password} type="password" id="password-field" class="input mb-8 w-full" placeholder="Password" />
    <input bind:value={confPass} type="password" id="conf-pass-field" class="input mb-8 w-full" placeholder="Confirm Password" />
    <button type="submit" class="button btn-primary w-full">Sign Up</button>
  </form>
  <p class="text-1sm">Already registered? <a href={`${beforeUrl}/signin`} use:link class="text-sky-500 cursor-pointer">Sign in</a></p>
</main>

<script lang="ts">
  import routeParser from "@/factories/route-parser"
  import {link, location, push} from "svelte-spa-router"
  import {fade} from "svelte/transition"
  import auth from "@/libraries/auth"
  
  let username = ""
  let email = ""
  let password = ""
  let confPass = ""
  const beforeUrl = routeParser.routeBefore($location)
  const signup = async () => {
    const payload = {
      email: email,
      username: username,
      password: password,
      confPass: confPass,
    }
    try {
      await auth.signup(payload)
      console.log("signup success")
      push(`${beforeUrl}/signin`)
    } catch (err) {
      console.error(`Signup Err: ${err.message}`)
    }
  }
</script>