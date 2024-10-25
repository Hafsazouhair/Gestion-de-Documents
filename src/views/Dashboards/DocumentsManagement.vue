<template>
  <div class="documents-management container p-6 max-w-7xl">
    <h1 class="text-3xl font-bold mb-6">Gestion des documents</h1>

    <button
      @click="showAddForm = !showAddForm"
      class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded mb-4"
    >
      <i class="fas fa-plus-circle"></i> Ajouter un document
    </button>

    <form v-if="showAddForm" @submit.prevent="createDocument" class="mb-6 bg-gray-100 p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Ajouter un document</h2>
      <div class="mb-4">
        <input
          v-model="newDocument.title"
          type="text"
          placeholder="Titre du document"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <input
          v-model="newDocument.document_type"
          type="text"
          placeholder="Type de document"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <input
          v-model="newDocument.path"
          type="text"
          placeholder="Chemin du document"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <span class="text-gray-500"> categorie</span>
        <select v-model="newDocument.category_id"   class="w-full p-2 border border-gray-300 rounded" required>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
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
            <th class="py-2 px-4 text-sm font-medium">Titre</th>
            <th class="py-2 px-4 text-sm font-medium">Type</th>
            <th class="py-2 px-4 text-sm font-medium">Chemin</th>
            <th class="py-2 px-4 text-sm font-medium">Catégorie</th>
            <th class="py-2 px-4 text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="document in documents" :key="document.id" class="border-t">
            <td class="py-2 px-4 text-sm">{{ document.id }}</td>
            <td class="py-2 px-4 text-sm">{{ document.title }}</td>
            <td class="py-2 px-4 text-sm">{{ document.document_type }}</td>
            <td class="py-2 px-4 text-sm">{{ document.path }}</td>
            <td class="py-2 px-4 text-sm">{{ getCategoryName(document.category_id) }}</td>
            <td class="py-2 px-4 flex space-x-2">
              <button @click="editDocument(document)" class="text-[#632b8d] hover:text-[#5b2282] text-sm">
                <i class="fas fa-edit"></i> Modifier
              </button>
              <button @click="deleteDocument(document.id)" class="text-red-500 hover:text-red-700 text-sm">
                <i class="fas fa-trash"></i> Supprimer
              </button>
             <button class="fa fa-download text-success mx-2"  style="color: rgb(22 163 74 ) "></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <form v-if="selectedDocument" @submit.prevent="updateDocument" class="mt-6 bg-gray-100 p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Modifier le document</h2>
      <div class="mb-4">
        <input
          v-model="selectedDocument.title"
          type="text"
          placeholder="Titre du document"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <input
          v-model="selectedDocument.document_type"
          type="text"
          placeholder="Type de document"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <input
          v-model="selectedDocument.path"
          type="text"
          placeholder="Chemin du document"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <select v-model="selectedDocument.category_id" class="w-full p-2 border border-gray-300 rounded" required>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="flex justify-between">
        <button class="bg-[#632b8d] hover:bg-[#5b2282] text-white font-bold py-2 px-4 rounded">
          Sauvegarder
        </button>
        <button @click="selectedDocument = null" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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
      documents: [],
      newDocument: {
        title: "",
        document_type: "",
        path: "",
        category_id: null,
      },
      selectedDocument: null,
      showAddForm: false,
      categories: [],
    };
  },
  created() {
    this.fetchDocuments();
    this.fetchCategories();
  },
  methods: {
    async fetchDocuments() {
      try {
        const response = await fetch('http://localhost:3000/documents');
        this.documents = await response.json();
      } catch (error) {
        alert('Error fetching documents: ' + error.message);
      }
    },
    async fetchCategories() {
      try {
        const response = await fetch('http://localhost:3000/categories');
        this.categories = await response.json();
      } catch (error) {
        alert('Error fetching categories: ' + error.message);
      }
    },
    async createDocument() {
      try {
        await fetch('http://localhost:3000/documents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newDocument),
        });
        this.fetchDocuments();
        this.resetNewDocument();
        this.showAddForm = false; // Hide form after adding
      } catch (error) {
        alert('Error creating document: ' + error.message);
      }
    },
    resetNewDocument() {
      this.newDocument = {
        title: "",
        document_type: "",
        path: "",
        category_id: null,
      };
    },
    async deleteDocument(documentId) {
          const confirmed = confirm('Êtes-vous sûr de vouloir supprimer cet documents ?');
      if (!confirmed) {
        return; 
      }
      try {
        await fetch(`http://localhost:3000/documents/${documentId}`, {
          method: 'DELETE',
        });
        this.fetchDocuments();
      } catch (error) {
        alert('Error deleting document: ' + error.message);
      }
    },
    editDocument(document) {
      this.selectedDocument = { ...document };
    },
    async updateDocument() {
      try {
        await fetch(`http://localhost:3000/documents/${this.selectedDocument.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.selectedDocument),
        });
        this.selectedDocument = null;
        this.fetchDocuments();
      } catch (error) {
        alert('Error updating document: ' + error.message);
      }
    },
    getCategoryName(categoryId) {
      const category = this.categories.find(c => c.id === categoryId);
      return category ? category.name : 'Non défini';
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
