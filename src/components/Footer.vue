<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div>
      <div>
        <!--tentang saya-->
        <div>
          <h3 class="text-xl font-bold mb-4 text-blue-500">Rommi Kaestria</h3>
          <p class="mb-2">Web Developer</p>
          <p class="mb-2">{{ currentYear }} © Rommi Kaestria</p>
          <p class="mb-2">All rights reserved.</p>
        </div>
        <!--Link saya-->
        <div>
          <h3 class="text-xl font-bold mb-4 text-blue-500">link Cepat</h3>
          <ul>
            <li class="mb-2">beranda</li>
            <li class="mb-2">tentang saya</li>
            <li class="mb-2">layanan</li>
            <li class="mb-2">Kontak</li>
          </ul>
        </div>
        <!--Layanan saya-->
        <div>
          <h3 class="text-xl font-bold mb-4 text-blue-500">Layanan Saya</h3>
          <ul>
            <li class="mb-2">Web Development</li>
            <li class="mb-2">UI/UX Design</li>
            <li class="mb-2">SEO Optimization</li>
            <li class="mb-2">Content Creation</li>
          </ul>
        </div>
        <!--NewsLetter-->
        <div>
          <h3 class="text-xl font-bold mb-4 text-blue-500">
            Berlangganan Newsletter
          </h3>
          <p class="mb-4">Dapatkan pembaruan terbaru dan penawaran khusus.</p>
          <form>
            <input type="email" placeholder="Masukkan email Anda" required />
            <button type="submit">Berlangganan</button>
          </form>
        </div>
        <!--Social Media-->
        <div>
          <div>
            <div>
              <p></p>
            </div>
            <div>
              <a href="http://">link1</a>
              <a href="http://">link1</a>
              <a href="http://">link1</a>
              <a href="http://">link1</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
