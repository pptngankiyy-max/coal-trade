// Ganti URL ini dengan link dari Google Apps Script kamu
const scriptURL = "https://script.google.com/macros/s/AKfycbzP2U6cKHCc89ZOsiHjv0PG4NewKK_tfB8CqZVMu22OaPWEK7EobcZc7GxSQLGe6pI/exe";

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

  const data = { nama, hp, produk, harga, jumlah };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      alert("✅ Pesanan berhasil dikirim & tersimpan di Google Sheets!");
      document.querySelector("#form-pemesanan form").reset();
      document.getElementById("form-pemesanan").classList.add("hidden");
    })
    .catch((err) => {
      alert("❌ Gagal menyimpan pesanan. Coba lagi!");
      console.error(err);
    });
}
