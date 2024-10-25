<template>
  <div class="min-h-screen p-6">
    <div class="max-w-6xl">
      <h2 class="text-3xl font-extrabold text-gray-800 mb-8">Gestion des documents</h2>

      <!-- Bouton d'ajout de document en haut -->
      <button
        @click="showAddForm = !showAddForm"
        class="mb-6 bg-gradient-to-r from-[#632b8d] to-[#7539a3] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg"
      >
        {{ showAddForm ? 'Annuler' : 'Ajouter Document' }}
      </button>

      <!-- Formulaire d'ajout de document -->
      <form v-if="showAddForm" @submit.prevent="addDocument" class="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Ajouter un document</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            v-model="newDocument.title"
            type="text"
            placeholder="Titre du document"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            v-model="newDocument.document_type"
            type="text"
            placeholder="Type de document (pdf, doc, etc.)"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            v-model="newDocument.path"
            type="text"
            placeholder="Chemin du document"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <select
            v-model="newDocument.category_id"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>Sélectionner une catégorie</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="mt-6 w-full bg-gradient-to-r from-[#632b8d] to-[#7539a3] text-white font-bold py-3 rounded-lg hover:bg-gradient-to-l transition-all duration-300 shadow-md"
        >
          Ajouter Document
        </button>
      </form>

      <!-- Liste des documents -->
      <h3 class="text-2xl font-semibold text-gray-800 mb-4">Mes documents</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> <!-- Afficher 4 documents par ligne -->
        <div
          v-for="doc in userDocuments"
          :key="doc.id"
          class="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
        >
          <img
            class="w-full h-40 object-cover rounded-md"
            :src="defaultImage"
            alt="Document"
          />
          <h3 class="text-xl font-semibold text-gray-900 mt-4">{{ doc.title }}</h3>
          <p class="mt-2 text-gray-600">Type: {{ doc.document_type }}</p>
          <p class="mt-2 text-gray-600">Chemin: {{ doc.path }}</p>
          <div class="flex justify-center mt-4 space-x-2">
            <button
              @click="editDocument(doc)"
              class="text-indigo-600 hover:underline focus:outline-none"
            >
              <i class="fas fa-edit"></i> Modifier
            </button>
            <button
              @click="deleteDocument(doc.id)"
              class="text-red-600 hover:underline focus:outline-none"
            >
              <i class="fas fa-trash-alt"></i> Supprimer
            </button>
                       <button class="fa fa-download text-success mx-2"  style="color: rgb(22 163 74 / var(--tw-text-opacity)) "></button>
       
          </div>
        </div>
      </div>

      <p v-if="userDocuments.length === 0" class="text-gray-600">Aucun document trouvé.</p>

      <!-- Formulaire d'édition -->
      <form v-if="showEditForm" @submit.prevent="updateDocument" class="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Modifier le document</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            v-model="currentDocument.title"
            type="text"
            placeholder="Titre du document"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            v-model="currentDocument.document_type"
            type="text"
            placeholder="Type de document (pdf, doc, etc.)"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            v-model="currentDocument.path"
            type="text"
            placeholder="Chemin du document"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <select
            v-model="currentDocument.category_id"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>Sélectionner une catégorie</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="mt-6 w-full bg-gradient-to-r from-[#632b8d] to-[#7539a3] text-white font-bold py-3 rounded-lg hover:bg-gradient-to-l transition-all duration-300 shadow-md"
        >
          Enregistrer les modifications
        </button>
        <button
          @click="showEditForm = false"
          class="mt-2 w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300"
        >
          Annuler
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentPage',
  data() {
    return {
      newDocument: {
        title: '',
        document_type: '',
        path: '',
        category_id: '',
      },
      currentDocument: {},
      userDocuments: [],
      categories: [],
      showAddForm: false,
      showEditForm: false,
      defaultImage: 'https://thumbs.dreamstime.com/b/full-documents-folder-high-quality-d-render-illustration-file-organisation-protection-concept-computer-icon-full-documents-242168101.jpg',
    };
  },
  async created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      await this.fetchDocuments(user.id);
      await this.fetchCategories();
    } else {
      this.$router.push('/login'); // Redirige vers la page de connexion si non connecté
    }
  },
  methods: {
    async fetchDocuments(userId) {
      const response = await fetch(`http://localhost:3000/documents?user_id=${userId}`);
      const documents = await response.json();
      this.userDocuments = documents;
    },
    async fetchCategories() {
      const response = await fetch(`http://localhost:3000/categories`);
      this.categories = await response.json();
    },
    async addDocument() {
      const user = JSON.parse(localStorage.getItem('user'));
      const newDoc = { ...this.newDocument, user_id: user.id, creation_date: new Date().toISOString() };
      await fetch('http://localhost:3000/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDoc),
      });
      this.newDocument = { title: '', document_type: '', path: '', category_id: '' };
      this.showAddForm = false;
      await this.fetchDocuments(user.id);
    },
    editDocument(doc) {
      this.currentDocument = { ...doc }; // Cloner l'objet pour l'édition
      this.showEditForm = true; // Afficher le formulaire d'édition
      this.showAddForm = false; // Cacher le formulaire d'ajout
    },
    async updateDocument() {
      await fetch(`http://localhost:3000/documents/${this.currentDocument.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.currentDocument),
      });
      this.showEditForm = false;
      await this.fetchDocuments(this.currentDocument.user_id);
    },
    async deleteDocument(id) {
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce document ?");
      if (confirmDelete) {
        await fetch(`http://localhost:3000/documents/${id}`, { method: 'DELETE' });
        const user = JSON.parse(localStorage.getItem('user'));
        await this.fetchDocuments(user.id); // Mettre à jour la liste après suppression
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
