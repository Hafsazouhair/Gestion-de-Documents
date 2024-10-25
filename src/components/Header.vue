<template>
  <header class="fixed lg:pl-80 md:px-12 w-full flex justify-between items-center shadow-md h-16 bg-white text-gray-800 z-40 py-2 px-6">
    <!-- Bouton pour ouvrir la barre latérale en mode mobile -->
    <button @click="toggleSidebar" class="lg:hidden p-2 text-gray-600">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <!-- Input de recherche -->
    <div class="flex-1 md:pl-12 flex justify-center relative">
      <div class="bg-white rounded flex items-center w-full max-w-md p-2 shadow-md border border-gray-200">
        <button class="outline-none focus:outline-none">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <input
          type="search"
          placeholder="Search"
          class="w-full pl-3 text-sm text-gray-900 outline-none bg-transparent focus:outline-none"
        />
      </div>
    </div>

    <!-- Section de l'utilisateur connecté -->
    <ul class="flex items-center space-x-4 md:space-x-6">
      <!-- Message de bienvenue -->
      <li v-if="user">
        <span class="text-gray-600">Bienvenue, {{ user.username }} !</span>
      </li>

     
      <li class="relative">
    <!-- Bouton de déconnexion avec icône -->
    <button @click="logout" class="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7"></path>
      </svg>
      <span>Déconnexion</span>
    </button>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
  data() {
    return {
      user: null, // Informations de l'utilisateur connecté
      isProfileMenuOpen: false,
    };
  },
  mounted() {
    // Récupérer l'utilisateur connecté depuis le localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
  methods: {
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    },
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    logout() {
      // Supprimer les informations de l'utilisateur du localStorage
      localStorage.removeItem('user');
      // Rediriger vers la page de connexion
      this.$router.push('/login');
    },
  },
  computed: {
    userAvatar() {
      // Vous pouvez ajouter une logique pour utiliser une image par défaut si l'utilisateur n'a pas d'avatar
      return this.user && this.user.avatar ? this.user.avatar : 'default-avatar.png';
    },
  },
};
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
