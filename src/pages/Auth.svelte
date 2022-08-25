<main class="max-w-3xl mx-auto">
  <section class="flex flex-col items-center my-8 mx-40">
    <div>
      <div>
        <img src={imgLogin} class="h-60" alt="login-illustrator" />
      </div>
    </div>
    <div class="my-4 text-center">
      <h5 class="my-4 font-bold text-black">Fast, Efficient and Productive</h5>
      <p class="text-1sm">
        In this kind of post, the blogger introduces a person they\’ve interviewed
        and provides some background information about the interviewee and their
        work following this is a transcript of the interview.
      </p>
    </div>
    <div class="text-center p-4 bg-white w-full rounded-lg">
      {#if routeName[routeName.length - 1] === "signin"}
        <SigninSvelte />
      {:else}
        <SignupSvelte />
      {/if}
    </div>
  </section>
</main>

<script lang="ts">
  import imgLogin from "@/assets/images/login.png"
  import SigninSvelte from "@/components/authentiactions/Signin.svelte"
  import SignupSvelte from "@/components/authentiactions/Signup.svelte"
  import {location} from "svelte-spa-router"
  
  let routeName = $location.split("/")
</script>