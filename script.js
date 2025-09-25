// Fungsi untuk menampilkan form pemesanan
function pesanProduk(namaProduk, hargaProduk) {
  document.getElementById("form-pemesanan").classList.remove("hidden");
  document.getElementById("produk").value = namaProduk;
  document.getElementById("harga").value = hargaProduk;
}

// Fungsi untuk kirim pesanan
function kirimPesanan(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const hp = document.getElementById("hp").value;
  const jumlah = document.getElementById("jumlah").value;
  const produk = document.getElementById("produk").value;
  const harga = document.getElementById("harga").value;

  alert(
    "📌 Ringkasan Pesanan:\n" +
    "Nama: " + nama + "\n" +
    "Nomor HP: " + hp + "\n" +
    "Produk: " + produk + "\n" +
    "Harga: " + harga + "\n" +
    "Jumlah: " + jumlah + " Ton\n\n" +
    "✅ Pesanan berhasil dikirim!"
  );

  // reset form
  document.querySelector("#form-pemesanan form").reset();
  document.getElementById("form-pemesanan").classList.add("hidden");
}
