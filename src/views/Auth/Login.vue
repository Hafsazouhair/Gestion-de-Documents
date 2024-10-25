<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 ">
    <div class="bg-white p-10 rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md mt-20">
      <h2 class="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
      <p class="text-center text-gray-600 mb-8">Please enter your information to access your account.</p>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="relative">
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder=" "
            class="w-full px-4 py-4  border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632b8d] focus:outline-none"
            required
          />
          <label for="email" class="absolute left-3 top-3  text-gray-500 transition-transform transform -translate-y-2.5  scale-75 origin-top-left">Email</label>
        </div>

        <div class="relative">
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder=" "
            class="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632b8d] focus:outline-none"
            required
          />
          <label for="password" class="absolute left-3 top-3 text-gray-500 transition-transform transform -translate-y-2.5 scale-75 origin-top-left">Password</label>
        </div>

        <button
          type="submit"
          class="w-full bg-gradient-to-r from-[#632b8d] to-[#a16eaa] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-gradient-to-l transition-all duration-300">
          Login
        </button>
      </form>

      <p class="mt-4 text-center text-gray-600">
        Don't have an account? <a href="#" class="text-[#632b8d] hover:underline" @click.prevent="goToRegister">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
   async handleLogin() {
  try {
    const response = await fetch(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
    const users = await response.json();

    if (users.length > 0) {
      const user = users[0];
      localStorage.setItem('user', JSON.stringify(user)); // Stocker l'utilisateur entier, y compris le rôle
      alert('Login successful');
      this.$router.push('/dashboard');
    } else {
      alert('Incorrect email or password');
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
},

    goToRegister() {
      this.$router.push('/register');
    }
  },
};
</script>

<style scoped>
/* Additional styles can be added here if necessary */
</style>
