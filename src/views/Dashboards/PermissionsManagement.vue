<template>
  <div class="permissions-management container p-6 max-w-7xl">
    <h1 class="text-3xl font-bold mb-6">Gestion des permissions</h1>

    <!-- Button to show add permission form -->
    <button
      @click="showAddForm = !showAddForm"
      class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded mb-4"
    >
      <i class="fas fa-plus-circle"></i> Ajouter une permission
    </button>

    <!-- Form to add a permission -->
    <form v-if="showAddForm" @submit.prevent="createPermission" class="mb-6 bg-gray-100 p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Ajouter une permission</h2>
      <div class="mb-4">
        <input
          v-model="newPermission.name"
          type="text"
          placeholder="Nom de la permission"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <textarea
          v-model="newPermission.description"
          placeholder="Description de la permission"
          class="w-full p-2 border border-gray-300 rounded"
          required
        ></textarea>
      </div>
      <button class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded">
        Ajouter
      </button>
    </form>

    <!-- Permissions table -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-lg shadow-md mb-6">
        <thead>
          <tr class="bg-gray-200 text-left">
            <th class="py-2 px-4 text-sm font-medium">ID</th>
            <th class="py-2 px-4 text-sm font-medium">Nom</th>
            <th class="py-2 px-4 text-sm font-medium">Description</th>
            <th class="py-2 px-4 text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="permission in permissions" :key="permission.id" class="border-t">
            <td class="py-2 px-4 text-sm">{{ permission.id }}</td>
            <td class="py-2 px-4 text-sm">{{ permission.name }}</td>
            <td class="py-2 px-4 text-sm">{{ permission.description }}</td>
            <td class="py-2 px-4 flex space-x-2">
              <button @click="editPermission(permission)" class="text-[#632b8d] hover:text-[#5b2282] text-sm">
                <i class="fas fa-edit"></i> Modifier
              </button>
              <button @click="deletePermission(permission.id)" class="text-red-500 hover:text-red-700 text-sm">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Form to modify a permission -->
    <form v-if="selectedPermission" @submit.prevent="updatePermission" class="mt-6 bg-gray-100 p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Modifier la permission</h2>
      <div class="mb-4">
        <input
          v-model="selectedPermission.name"
          type="text"
          placeholder="Nom de la permission"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <textarea
          v-model="selectedPermission.description"
          placeholder="Description de la permission"
          class="w-full p-2 border border-gray-300 rounded"
          required
        ></textarea>
      </div>
      <div class="flex justify-between">
        <button class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded">
          Sauvegarder
        </button>
        <button @click="selectedPermission = null" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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
      permissions: [],
      newPermission: {
        name: "",
        description: "",
      },
      selectedPermission: null,
      showAddForm: false, // Toggle to show/hide the add permission form
    };
  },
  created() {
    this.fetchPermissions();
  },
  methods: {
    async fetchPermissions() {
      try {
        const response = await fetch('http://localhost:3000/permissions');
        this.permissions = await response.json();
      } catch (error) {
        alert('Error fetching permissions: ' + error.message);
      }
    },
    async createPermission() {
      try {
        await fetch('http://localhost:3000/permissions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newPermission),
        });
        this.fetchPermissions();
        this.resetNewPermission();
        this.showAddForm = false; // Hide form after adding
      } catch (error) {
        alert('Error creating permission: ' + error.message);
      }
    },
    resetNewPermission() {
      this.newPermission = {
        name: "",
        description: "",
      };
    },
    async deletePermission(permissionId) {
        const confirmed = confirm('Êtes-vous sûr de vouloir supprimer cet permissions ?');
      if (!confirmed) {
        return; 
      }
      try {
        await fetch(`http://localhost:3000/permissions/${permissionId}`, {
          method: 'DELETE',
        });
        this.fetchPermissions();
      } catch (error) {
        alert('Error deleting permission: ' + error.message);
      }
    },
    editPermission(permission) {
      this.selectedPermission = { ...permission };
    },
    async updatePermission() {
      try {
        await fetch(`http://localhost:3000/permissions/${this.selectedPermission.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.selectedPermission),
        });
        this.selectedPermission = null;
        this.fetchPermissions();
      } catch (error) {
        alert('Error updating permission: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

th, td {
  padding: 10px;
}

button {
  outline: none;
}
</style>
