<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay Updated with Docify</h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">
            Docify is your go-to solution for managing documentation and tracking projects. Get real-time updates, insightful analytics, and improve productivity effortlessly.
          </p>
          <div class="mt-6 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required
              class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email">
            <button type="submit"
              class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
          </div>
        </div>

        <!-- Info Cards -->
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <!-- Enhanced Security Feature -->
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
              </svg>
            </div>
            <dt class="mt-4 font-semibold text-white">Enhanced Security</dt>
            <dd class="mt-2 leading-7 text-gray-400">Your documentation is protected with state-of-the-art encryption and secure protocols.</dd>
          </div>

             <!-- Social Media Icons -->
    <div class="flex justify-center mt-8">
      <a href="https://www.facebook.com" target="_blank" class="text-white hover:text-gray-400 mx-2">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.592 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V10.3h3.129V7.626c0-3.094 1.834-4.79 4.54-4.79 1.311 0 2.441.097 2.767.141v3.21l-1.896.001c-1.484 0-1.771.705-1.771 1.736v2.279h3.564l-.465 3.406h-3.099V24h6.075C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
      </a>
      <a href="https://twitter.com" target="_blank" class="text-white hover:text-gray-400 mx-2">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57c-.885.392-1.83.655-2.825.775 1.017-.609 1.794-1.573 2.163-2.724-.95.564-2.005.975-3.127 1.195-.895-.952-2.17-1.54-3.591-1.54-2.717 0-4.923 2.207-4.923 4.922 0 .387.045.765.127 1.124-4.092-.205-7.72-2.164-10.148-5.144-.423.724-.666 1.564-.666 2.465 0 1.702.867 3.196 2.188 4.07-.805-.025-1.563-.247-2.228-.616v.062c0 2.375 1.688 4.354 3.928 4.802-.41.111-.84.171-1.281.171-.313 0-.619-.031-.916-.086.619 1.934 2.415 3.343 4.54 3.383-1.668 1.308-3.769 2.086-6.047 2.086-.393 0-.779-.023-1.165-.069 2.156 1.379 4.735 2.179 7.486 2.179 8.96 0 13.873-7.427 13.873-13.873 0-.211 0-.422-.015-.631.951-.688 1.778-1.55 2.432-2.537z" />
        </svg>
      </a>
      <a href="https://www.instagram.com" target="_blank" class="text-white hover:text-gray-400 mx-2">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 2.667c2.623 0 3.098.01 4.184.06 1.05.047 1.84.222 2.254.373.583.204 1.013.46 1.46 1.01.447.447.807.877 1.01 1.46.15.414.326 1.204.373 2.254.051 1.086.06 1.561.06 4.184s-.01 3.098-.06 4.184c-.047 1.05-.222 1.84-.373 2.254-.204.583-.46 1.013-1.01 1.46-.447.447-.877.807-1.46 1.01-.414.15-1.204.326-2.254.373-1.086.051-1.561.06-4.184.06s-3.098-.01-4.184-.06c-1.05-.047-1.84-.222-2.254-.373-.583-.204-1.013-.46-1.46-1.01-.447-.447-.807-.877-1.01-1.46-.15-.414-.326-1.204-.373-2.254-.051-1.086-.06-1.561-.06-4.184s.01-3.098.06-4.184c.047-1.05.222-1.84.373-2.254.204-.583.46-1.013 1.01-1.46.447-.447.877-.807 1.46-1.01.414-.15 1.204-.326 2.254-.373 1.086-.051 1.561-.06 4.184-.06zm0 5.333a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334zm0 2.667a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm4.5-3.333a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
        </svg>
      </a>
    </div>
        </dl>
      </div>

    </div>
    
 
    
    <!-- Decorative Gradient Background -->
    <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
};
</script>
