<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-10  rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md mt-32 mb-20">
      <h2 class="text-3xl font-extrabold text-center text-gray-800 mb-6">Sign Up</h2>
      <p class="text-center text-gray-600 mb-8">Please enter your information to create an account.</p>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <div class="relative">
          <input
            v-model="username"
            type="text"
            id="username"
            placeholder=" "
            class="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632b8d] focus:outline-none"
            required
          />
          <label for="username" class="absolute left-3 top-3 text-gray-500 transition-transform transform -translate-y-2.5 scale-75 origin-top-left">Username</label>
        </div>

        <div class="relative">
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder=" "
            class="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632b8d] focus:outline-none"
            required
          />
          <label for="email" class="absolute left-3 top-3 text-gray-500 transition-transform transform -translate-y-2.5 scale-75 origin-top-left">Email</label>
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

        <div class="relative">
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            placeholder=" "
            class="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632b8d] focus:outline-none"
            required
          />
          <label for="confirmPassword" class="absolute left-3 top-3 text-gray-500 transition-transform transform -translate-y-2.5 scale-75 origin-top-left">Confirm Password</label>
        </div>

        <button
          type="submit"
          class="w-full bg-gradient-to-r from-[#632b8d] to-[#a16eaa] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-gradient-to-l transition-all duration-300">
          Sign Up
        </button>
      </form>

      <p class="mt-4 text-center text-gray-600">
        Already have an account? <a href="#" class="text-[#632b8d] hover:underline" @click.prevent="goToLogin">Log In</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'user', // Default role
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role,
          }),
        });

        if (response.ok) {
          alert('Registration successful');
          this.$router.push('/login');
        } else {
          throw new Error('Error during registration');
        }
      } catch (error) {
        alert('Error: ' + error.message);
      }
    },
    goToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Additional styles can be added here if necessary */
</style>
