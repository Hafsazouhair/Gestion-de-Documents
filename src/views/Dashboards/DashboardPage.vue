<template>
  <div class="flex flex-col items-center py-20 justify-center">
    <div v-if="userRole" class="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-3xl font-bold text-center mb-6">Dashboard</h2>
      <p class="text-lg text-center text-gray-600 mb-6">Bienvenue sur le tableau de bord de gestion des documents. </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col items-center justify-center bg-blue-100 p-6 rounded-lg">
          <img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png" alt="Users" class="w-32 h-32 mb-4 object-cover rounded-full shadow-lg" />
          <p class="text-2xl font-semibold">Utilisateurs</p>
          <p class="text-xl text-gray-700">{{ userCount }} utilisateurs</p>
        </div>
        <div class="flex flex-col items-center justify-center bg-green-100 p-6 rounded-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmXmKOYc5LIDuXDVENHCaetAmSE5lR7FIqg&s" alt="Documents" class="w-32 h-32 mb-4 object-cover rounded-full shadow-lg" />
          <p class="text-2xl font-semibold">Documents</p>
          <p class="text-xl text-gray-700">{{ documentCount }} documents</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-10">
      <p class="text-xl text-gray-600">Veuillez vous connecter pour accéder au tableau de bord.</p>
      <router-link to="/login" class="mt-4 inline-block text-blue-500 hover:underline">Se connecter</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      userCount: 0,
      documentCount: 0,
      userRole: '' // Holds the user role to check access
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.userRole = user.role; // Fetch role from localStorage
      this.fetchCounts(); // Call fetch function to get counts
    } else {
      this.$router.push('/login'); // Redirect to login if not authenticated
    }
  },
  methods: {
    async fetchCounts() {
      try {
        // Fetch users and documents
        const usersResponse = await fetch('http://localhost:3000/users');
        const documentsResponse = await fetch('http://localhost:3000/documents');
        
        const users = await usersResponse.json();
        const documents = await documentsResponse.json();

        // Set counts
        this.userCount = users.length;
        this.documentCount = documents.length;
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS handles most of the styling here */
</style>
