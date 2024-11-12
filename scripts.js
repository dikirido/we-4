// Tambahkan JavaScript jika dibutuhkan untuk interaksi atau animasi tambahan.
// Contoh fungsi untuk navbar sticky:

window.onscroll = function() { stickyNavbar() };

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
