<template>
  <aside :class="{'block': isSidebarOpen, 'hidden': !isSidebarOpen, 'lg:block': true}" class="fixed z-50 rounded-t-2xl w-80 h-full bg-gradient-to-r from-[#632b8d] to-[#7539a3] shadow-lg border border-gray-50 overflow-auto">
    <!-- Bouton de fermeture (visible uniquement en mobile) -->
    <button @click="toggleSidebar" class="absolute top-4 right-4 lg:hidden p-2 text-white">
      <i class="fas fa-times"></i> 
    </button>
    <h1 class="px-6 py-3 text-2xl font-bold text-white text-center border-b border-purple-600 mb-6 mt-5">Docify</h1>
    
    <div class="text-white">
      <ul class="mt-6 space-y-2">
        <li class="relative px-6 py-3">
          <a
            href="/dashboard"
            class="flex h-12 items-center truncate rounded-t-xl rounded-b-xl px-6 py-4 outline-none transition duration-300 ease-linear hover:bg-white hover:text-[#2a2185]"
            :class="{ 'bg-white text-[#2a2185] font-semibold': isActive('/dashboard') }"
          >
            <i class="fas fa-home"></i>
            <span class="ml-4">Dashboard</span>
          </a>
        </li>
        <!-- Liens admin -->
        <template  v-if="userRole === 'admin'">
          <li class="relative px-6 py-3">
            <a
              href="/dashboard/users"
              class="flex h-12 items-center truncate rounded-t-xl rounded-b-xl px-6 py-4 outline-none transition duration-300 ease-linear hover:bg-white hover:text-[#2a2185]"
              :class="{ 'bg-white text-[#2a2185] font-semibold': isActive('/dashboard/users') }"
            >
              <i class="fas fa-users"></i>
              <span class="ml-4">Users</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a
              href="/dashboard/Documents"
              class="flex h-12 items-center truncate rounded-t-xl rounded-b-xl px-6 py-4 outline-none transition duration-300 ease-linear hover:bg-white hover:text-[#2a2185]"
              :class="{ 'bg-white text-[#2a2185] font-semibold': isActive('/dashboard/Documents') }"
            >
              <i class="fas fa-file"></i>
              <span class="ml-4">Documents</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a
              href="/dashboard/Categories"
              class="flex h-12 items-center truncate rounded-t-xl rounded-b-xl px-6 py-4 outline-none transition duration-300 ease-linear hover:bg-white hover:text-[#2a2185]"
              :class="{ 'bg-white text-[#2a2185] font-semibold': isActive('/dashboard/Categories') }"
            >
              <i class="fas fa-list"></i>
              <span class="ml-4">Categories</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a
              href="/dashboard/Permissions"
              class="flex h-12 items-center truncate rounded-t-xl rounded-b-xl px-6 py-4 outline-none transition duration-300 ease-linear hover:bg-white hover:text-[#2a2185]"
              :class="{ 'bg-white text-[#2a2185] font-semibold': isActive('/dashboard/Permissions') }"
            >
              <i class="fas fa-user-shield"></i>
              <span class="ml-4">Permissions</span>
            </a>
          </li>
        </template>

       
          <li class="relative px-6 py-3">
            <a
              href="/dashboard/DocumentPage"
              class="flex h-12 items-center truncate rounded-t-xl rounded-b-xl px-6 py-4 outline-none transition duration-300 ease-linear hover:bg-white hover:text-[#2a2185]"
              :class="{ 'bg-white text-[#2a2185] font-semibold': isActive('/dashboard/DocumentPage') }"
            >
              <i class="fas fa-file"></i>
              <span class="ml-4">Mes Documents</span>
            </a>
          </li>
     
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AsideApp',
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true
    },
    userRole: { // Ajout de la prop pour le rôle de l'utilisateur
      type: String,
      required: true
    }


  },
      created() {
  console.log(this.userRole); // Vérifiez ici si le rôle est bien passé
},
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    isActive(path) {
      return window.location.pathname === path;
    }
  }
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
::-webkit-scrollbar {
  width: 2.5px;
}

::-webkit-scrollbar-thumb {
  background-color: #9a9aa2;
  border-radius: 10px;
}
</style>
