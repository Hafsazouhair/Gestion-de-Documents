<template>
  <div class="documents-management container p-6 max-w-7xl">
    <h1 class="text-3xl font-bold mb-6">Gestion des catégories</h1>

    <button
      @click="showAddForm = !showAddForm"
      class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded mb-4"
    >
      <i class="fas fa-plus-circle"></i> Ajouter une catégorie
    </button>

    <form v-if="showAddForm" @submit.prevent="createCategory" class="mb-6 bg-gray-100 p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Ajouter une catégorie</h2>
      <div class="mb-4">
        <input
          v-model="newCategory.name"
          type="text"
          placeholder="Nom de la catégorie"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
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
            <th class="py-2 px-4 text-sm font-medium">Nom de la catégorie</th>
            <th class="py-2 px-4 text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id" class="border-t">
            <td class="py-2 px-4 text-sm">{{ category.id }}</td>
            <td class="py-2 px-4 text-sm">{{ category.name }}</td>
            <td class="py-2 px-4 flex space-x-2">
              <button @click="editCategory(category)" class="text-[#632b8d] hover:text-[#5b2282] text-sm">
                <i class="fas fa-edit"></i> Modifier
              </button>
              <button @click="deleteCategory(category.id)" class="text-red-500 hover:text-red-700 text-sm">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <form v-if="selectedCategory" @submit.prevent="updateCategory" class="mt-6 bg-gray-100 p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Modifier la catégorie</h2>
      <div class="mb-4">
        <input
          v-model="selectedCategory.name"
          type="text"
          placeholder="Nom de la catégorie"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="flex justify-between">
        <button class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded">
          Sauvegarder
        </button>
        <button @click="selectedCategory = null" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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
      categories: [],
      newCategory: {
        name: "",
      },
      selectedCategory: null,
      showAddForm: false,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await fetch('http://localhost:3000/categories');
        this.categories = await response.json();
      } catch (error) {
        alert('Error fetching categories: ' + error.message);
      }
    },
    async createCategory() {
      try {
        await fetch('http://localhost:3000/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newCategory),
        });
        this.fetchCategories();
        this.resetNewCategory();
        this.showAddForm = false; // Hide form after adding
      } catch (error) {
        alert('Error creating category: ' + error.message);
      }
    },
    resetNewCategory() {
      this.newCategory = {
        name: "",
      };
    },
    async deleteCategory(categoryId) {
      const confirmed = confirm('Êtes-vous sûr de vouloir supprimer cet categories ?');
      if (!confirmed) {
        return; 
      }
      try {
        await fetch(`http://localhost:3000/categories/${categoryId}`, {
          method: 'DELETE',
        });
        this.fetchCategories();
      } catch (error) {
        alert('Error deleting category: ' + error.message);
      }
    },
    editCategory(category) {
      this.selectedCategory = { ...category };
    },
    async updateCategory() {
      try {
        await fetch(`http://localhost:3000/categories/${this.selectedCategory.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.selectedCategory),
        });
        this.selectedCategory = null;
        this.fetchCategories();
      } catch (error) {
        alert('Error updating category: ' + error.message);
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
