    const myCarousel = document.querySelector('#carouselExampleCaptions');
    new bootstrap.Carousel(myCarousel, { interval: 10000, ride: 'carousel' });

    // Gallery fade-in
    const galleryImages = document.querySelectorAll('.gallery img');
    function revealGallery() {
      galleryImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          img.classList.add('show');
        }
      });
    }
    window.addEventListener('scroll', revealGallery);
    window.addEventListener('load', revealGallery);

    // Form WhatsApp
    document.getElementById("daftarForm").addEventListener("submit", function(e){
      e.preventDefault();
      let nama = document.getElementById("nama").value;
      let hp = document.getElementById("hp").value;
      let pesan = document.getElementById("pesan").value;
      let text = `Halo, saya mau daftar trip.\nNama: ${nama}\nHP: ${hp}\nPesan: ${pesan}`;
      window.open(`https://wa.me/62895334737021?text=${encodeURIComponent(text)}`, "_blank");
    });