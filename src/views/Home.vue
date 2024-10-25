<template>
  <section id="home">
    <div class="min-h-screen">
      <!-- Section d'Introduction -->
     <section class="bg-cover bg-center mt-10 md:mt-2 bg-no-repeat text-white flex flex-col lg:flex-row items-center">
  <div class="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-left w-full lg:w-1/2">
    <h1 class="text-4xl font-bold text-black text-center">Bienvenue sur Docify : Votre plateforme pour une création de documents simplifiée !</h1>
    <p class="mt-4 ml-6 animate-text text-gray-400">
      Libérez votre créativité et structurez vos idées en connaissance organisée.
    </p>
    <div class="flex justify-center mt-6">
      <router-link to="/login">
        <a class="get inline-block text-white px-6 py-3 font-semibold rounded-md shadow-lg hover:bg-blue-800">
          Commencer
        </a>
      </router-link>
    </div>
  </div>
  <div class="w-full lg:w-1/2 flex justify-center">
    <img width="100%" class="animate-img object-cover" src="https://i0.wp.com/document360.com/wp-content/uploads/2022/08/internal_documentation_guide.jpg" alt="Image de documentation">
  </div>
</section>


      <!-- Section À propos du site -->
      <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800">À propos de Docify</h2>
          <p class="mt-4 text-gray-600">
            Docify est une plateforme de gestion de documents puissante et intuitive qui permet aux utilisateurs de créer, gérer et organiser facilement leurs documents. Que vous soyez un utilisateur individuel ou un administrateur, notre interface simplifiée vous aide à structurer vos idées et à collaborer efficacement.
          </p>
        </div>
      </section>

      <!-- Section Services -->
      <section class="bg-gray-100 py-20">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800">Nos Services</h2>
          <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- Service 1 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-purple-600">Gestion de Documents</h3>
              <p class="mt-4 text-gray-600">
                Créez, éditez et organisez vos documents avec une interface intuitive. Simplifiez la collaboration et le partage de connaissances.
              </p>
            </div>

            <!-- Service 2 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-purple-600">Gestion des Catégories</h3>
              <p class="mt-4 text-gray-600">
                Organisez vos documents en catégories pour une meilleure gestion et des recherches faciles.
              </p>
            </div>

            <!-- Service 3 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-purple-600">Gestion des Utilisateurs</h3>
              <p class="mt-4 text-gray-600">
                Gérez les utilisateurs et leurs permissions. Attribuez des rôles d'administrateur ou d'utilisateur pour contrôler l'accès aux documents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
#home {
  background: rgb(231, 242, 253);
}

.get {
  background-color: #632b8d;
  color: white;
}

.bg-white {
  background-color: white;
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-600 {
  color: #718096;
}

.text-purple-600 {
  color: #6b46c1;
}
</style>