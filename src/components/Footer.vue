<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="bg-gradient-to-br from-fuchsia-600 via-purple-500 to-indigo-600 text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!--tentang saya-->
        <div>
          <h3 class="text-xl font-bold mb-2 text-blue-400">Rommi Kaestria</h3>
          <p class="mb-2">Web Developer</p>
          <p class="mb-2">{{ currentYear }} © Rommi Kaestria</p>
          <p class="mb-2">Jl. Contoh No. 123, Palangka Raya</p>
          <p class="mb-2">Email: info@ketikode.my.id</p>
          <p class="mb-2">Telepon: (021) xxx-xxx</p>
        </div>
        <!--Link saya-->
        <div>
          <h3 class="text-xl font-bold mb-2 text-blue-400 text-shadow-gray-950">
            link Cepat
          </h3>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:text-blue-300 transition duration-300">
                Beranda
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-blue-300 transition duration-300">
                Tentang saya
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-blue-300 transition duration-300">
                Layanan
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-blue-300 transition duration-300">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <!--Layanan saya-->
        <div>
          <h3 class="text-xl font-bold mb-2 text-blue-400 text-shadow-gray-950">
            Layanan Saya
          </h3>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:text-blue-300 transition duration-300">
                Web Developer
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-blue-300 transition duration-300">
                UI/UX Design
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-blue-300 transition duration-300">
                SEO Optimization
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-blue-300 transition duration-300">
                Content Creation
              </a>
            </li>
          </ul>
        </div>
        <!--NewsLetter-->
        <div>
          <h3 class="text-xl font-bold mb-2 text-blue-400 text-shadow-gray-950">
            Berlangganan Newsletter
          </h3>
          <p class="mb-4">Dapatkan pembaruan terbaru dan penawaran khusus.</p>
          <form
            class="flex flex-col sm:flex-row rounded-md overflow-hidden shadow-lg border border-white/20">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              class="px-4 py-3 w-full bg-white/10 text-white placeholder-blue-200 focus:outline-none flex-grow text-sm"
              required />
            <button
              type="submit"
              class="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 px-6 py-3 text-white font-medium transition duration-300 relative overflow-hidden shadow-inner whitespace-nowrap min-w-[140px]">
              <span class="relative z-10 hidden sm:inline text-sm">
                Berlangganan
              </span>
              <span class="relative z-10 sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </span>
              <span
                class="absolute top-0 left-0 right-0 h-1/3 bg-white/20 rounded-full blur-sm"></span>
            </button>
          </form>
        </div>
      </div>
      <!--Social Media-->
      <div class="mt-8 pt-8 border-t border-white">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p>
              &copy; {{ currentYear }} CV Rommi Kaestria. All Rights Reserved.
            </p>
          </div>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-white hover:text-blue-300 transition duration-300">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
            <a
              href="#"
              class="text-white hover:text-blue-300 transition duration-300">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
              </svg>
            </a>
            <a
              href="#"
              class="text-white hover:text-blue-300 transition duration-300">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="#"
              class="text-white hover:text-blue-300 transition duration-300">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Efek glossy tambahan untuk tombol */
button[type='submit']::after {
  content: '';
  position: absolute;
  bottom: -50%;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  transform: rotate(35deg);
  transition: all 0.3s;
}

button[type='submit']:hover::after {
  transform: rotate(25deg) translateY(-15px);
}

/* Pastikan teks tidak terpotong */
button[type='submit'] {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
