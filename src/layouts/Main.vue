
<template>
  <div>
    <Navbar />
    <main class="min-h-screen ">
      <router-view />
    </main>
    <FooterPage />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterPage from '@/components/Footer.vue';

export default {
  name:'DefaultMain',
  components: {
    Navbar,
    FooterPage,
  },
};
</script>
