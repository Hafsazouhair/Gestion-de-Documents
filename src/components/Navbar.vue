<template>
  <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-yellow-300 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-300"
  >
    <div class="px-4">
      <div class="flex items-center justify-between">
        <div class="flex shrink-0">
          <a aria-current="page" class="flex items-center" href="/">
            <img
              class="h-10 w-auto bg-transparent"
              src="https://www.freeiconspng.com/thumbs/document-icon/document-icon-26.png"
              alt="Website Logo"
            />
            <p class="sr-only">Docify</p>
          </a>
        </div>

        <div class="md:flex md:items-center md:justify-center md:gap-5">
          <router-link
            to="/"
            class="inline-block rounded-lg px-2 py-1 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          >
            Home
          </router-link>
        
        
        </div>

        <div class="flex items-center justify-end gap-3">
          <router-link
            v-if="!isLoggedIn"
            to="/login"
            class="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:text-gray-900"
          >
            Sign In
          </router-link>

          <router-link
            v-if="!isLoggedIn"
            to="/register"
            class="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:text-gray-900"
          >
            Sign Up
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar-app",
  data() {
    return {
      isLoggedIn: false, // À remplacer par une véritable condition de connexion
    };
  },
  methods: {
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style>
header {
  background-color: #632b8d;
}
</style>
