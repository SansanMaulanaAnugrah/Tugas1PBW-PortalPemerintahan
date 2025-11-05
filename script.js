// CTA Scroll Halus ke Bagian Layanan
document.getElementById("cta").addEventListener("click", () => {
  document.getElementById("layanan").scrollIntoView({
    behavior: "smooth"
  });
});


// Form Pengaduan
const form = document.getElementById("complaintForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !pesan) {
    statusMessage.textContent = "⚠️ Harap isi semua kolom dengan benar.";
    statusMessage.style.color = "red";
    statusMessage.style.fontWeight = "600";
  } else {
    statusMessage.textContent = `✅ Terima kasih, ${nama}! Pengaduan Anda telah dikirim.`;
    statusMessage.style.color = "green";
    statusMessage.style.fontWeight = "600";
    form.reset();
  }
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Toggle Menu Hamburger
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
