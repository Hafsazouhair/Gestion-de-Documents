<template>
  <div class="flex flex-col h-screen">
    <Header @toggleSidebar="toggleSidebar" />
    <div class="flex flex-1 flex-col lg:flex-row">
      <Aside v-if="userRole" :isSidebarOpen="isSidebarOpen" :userRole="userRole" @toggle-sidebar="toggleSidebar" />
      <main class="flex-1 lg:ml-80 mt-20 bg-white border border-gray-200 py-6 px-4 md:px-8">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Aside from '@/components/Aside.vue';

export default {
  name: 'DashboardLayout',
  components: {
    Header,
    Aside
  },
  data() {
    return {
      isSidebarOpen: false,
      userRole: '' // Store user role here
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.userRole = user.role; // Retrieve user role from localStorage
    } else {
      this.$router.push('/login'); // Redirect to login if no user
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dashboard-content {
  display: flex;
  flex: 1;
}

.dashboard-main {
  flex: 1;
  padding: 20px;
}
</style>
