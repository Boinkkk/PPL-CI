// Data Mahasiswa (bisa kamu ubah sesuka hati)
const mahasiswa = [
  { nim: "23111001", nama: "Rani Pratiwi" },
  { nim: "23111002", nama: "Budi Santoso" },
  { nim: "23111003", nama: "Ivan Roisus Salam" },
  { nim: "23111004", nama: "Dewi Lestari" }
];

// Ambil elemen <tbody>
const tbody = document.getElementById("data-body");

// Tambahkan data ke tabel
mahasiswa.forEach((mhs, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${mhs.nim}</td>
    <td>${mhs.nama}</td>
  `;
  tbody.appendChild(row);
});
