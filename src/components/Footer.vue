<script setup>
const currerYear = new Date().getFullYear;
</script>

<template>
  <footer>
    <div>
      <div>
        <!--tentang saya-->
        <div>
          <h3>Rommi Kaestria</h3>
          <p>Web Developer</p>
          <p>© tahun Rommi Kaestria</p>
          <p>All rights reserved.</p>
        </div>
        <!--Link saya-->
        <div>
          <h3>link Cepat</h3>
          <ul>
            <li>beranda</li>
            <li>tentang saya</li>
            <li>layanan</li>
            <li>Kontak</li>
          </ul>
        </div>
        <!--Layanan saya-->
        <div>
          <h3>Layanan Saya</h3>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>Content Creation</li>
          </ul>
        </div>
        <!--NewsLetter-->
        <div>
          <h3>Berlangganan Newsletter</h3>
          <p>Dapatkan pembaruan terbaru dan penawaran khusus.</p>
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
