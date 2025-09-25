// Ganti URL ini dengan link dari Google Apps Script kamu
const scriptURL = "https://script.google.com/macros/s/AKfycbzP2U6cKHCc89ZOsiHjv0PG4NewKK_tfB8CqZVMu22OaPWEK7EobcZc7GxSQLGe6pI/exec";

// Tampilkan form ketika klik tombol Pesan
function pesanProduk(namaProduk, hargaProduk) {
  document.getElementById("form-pemesanan").classList.remove("hidden");
  document.getElementById("produk").value = namaProduk;
  document.getElementById("harga").value = hargaProduk;
}

// Kirim data pesanan ke Google Sheets
function kirimPesanan(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const hp = document.getElementById("hp").value;
  const jumlah = document.getElementById("jumlah").value;
  const produk = document.getElementById("produk").value;
  const harga = document.getElementById("harga").value;

  // Buat FormData agar bisa diterima Apps Script
  const formData = new FormData();
  formData.append("nama", nama);
  formData.append("hp", hp);
  formData.append("produk", produk);
  formData.append("harga", harga);
  formData.append("jumlah", jumlah);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((text) => {
      alert("✅ Pesanan berhasil dikirim & tersimpan di Google Sheets!");
      document.querySelector("#form-pemesanan form").reset();
      document.getElementById("form-pemesanan").classList.add("hidden");
    })
    .catch((err) => {
      alert("❌ Gagal menyimpan pesanan. Coba lagi!");
      console.error(err);
    });
}
