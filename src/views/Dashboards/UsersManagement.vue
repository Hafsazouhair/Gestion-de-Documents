<template>
  <div class="documents-management container p-6 max-w-7xl">
    <h1 class="text-3xl font-bold mb-6">Gestion des utilisateurs</h1>

    <button
      @click="showAddForm = !showAddForm"
      class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded mb-4"
    >
      <i class="fas fa-plus-circle"></i> Ajouter un utilisateur
    </button>

    <form v-if="showAddForm" @submit.prevent="createUser" class="mb-6 bg-gray-100 p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Ajouter un utilisateur</h2>
      <div class="mb-4">
        <input
          v-model="newUser.username"
          type="text"
          placeholder="Nom d'utilisateur"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <input
          v-model="newUser.email"
          type="email"
          placeholder="Email"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <input
          v-model="newUser.password"
          type="password"
          placeholder="Mot de passe"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <select v-model="newUser.role" class="w-full p-2 border border-gray-300 rounded">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <button class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded">
        Ajouter
      </button>
    </form>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-lg shadow-md mb-6">
        <thead>
          <tr class="bg-gray-200 text-left">
            <th class="py-2 px-4 text-sm font-medium">ID</th>
            <th class="py-2 px-4 text-sm font-medium">Nom d'utilisateur</th>
            <th class="py-2 px-4 text-sm font-medium">Email</th>
            <th class="py-2 px-4 text-sm font-medium">Rôle</th>
            <th class="py-2 px-4 text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="border-t">
            <td class="py-2 px-4 text-sm">{{ user.id }}</td>
            <td class="py-2 px-4 text-sm">{{ user.username }}</td>
            <td class="py-2 px-4 text-sm">{{ user.email }}</td>
            <td class="py-2 px-4 text-sm">{{ user.role }}</td>
            <td class="py-2 px-4 flex space-x-2">
              <button @click="editUser(user)" class="text-[#632b8d] hover:text-[#5b2282] text-sm">
                <i class="fas fa-edit"></i> Modifier
              </button>
              <button @click="deleteUser(user.id)" class="text-red-500 hover:text-red-700 text-sm">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <form v-if="selectedUser" @submit.prevent="updateUser" class="mt-6 bg-gray-100 p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Modifier l'utilisateur</h2>
      <div class="mb-4">
        <input
          v-model="selectedUser.username"
          type="text"
          placeholder="Nom d'utilisateur"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <input
          v-model="selectedUser.email"
          type="email"
          placeholder="Email"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <input
          v-model="selectedUser.password"
          type="password"
          placeholder="Mot de passe"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <select v-model="selectedUser.role" class="w-full p-2 border border-gray-300 rounded">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div class="flex justify-between">
        <button class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded">
          Sauvegarder
        </button>
        <button @click="selectedUser = null" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Fermer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      newUser: {
        username: "",
        email: "",
        password: "",
        role: "user",
      },
      selectedUser: null,
      showAddForm: false, // Toggle to show/hide the add user form
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('http://localhost:3000/users');
        this.users = await response.json();
      } catch (error) {
        alert('Error fetching users: ' + error.message);
      }
    },
    async createUser() {
      try {
        await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newUser),
        });
        this.fetchUsers();
        this.resetNewUser();
        this.showAddForm = false; // Hide form after adding
      } catch (error) {
        alert('Error creating user: ' + error.message);
      }
    },
    resetNewUser() {
      this.newUser = {
        username: "",
        email: "",
        password: "",
        role: "user",
      };
    },
    async deleteUser(userId) {
      const confirmed = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');
      if (!confirmed) {
        return; // Sortir si l'utilisateur annule l'action
      }
      
      try {
        await fetch(`http://localhost:3000/users/${userId}`, {
          method: 'DELETE',
        });
        this.fetchUsers();
      } catch (error) {
        alert('Error deleting user: ' + error.message);
      }
    },
    editUser(user) {
      this.selectedUser = { ...user };
    },
    async updateUser() {
      try {
        await fetch(`http://localhost:3000/users/${this.selectedUser.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.selectedUser),
        });
        this.selectedUser = null;
        this.fetchUsers();
      } catch (error) {
        alert('Error updating user: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 12px;
  text-align: left;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
