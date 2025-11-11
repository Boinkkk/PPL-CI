// Data Mahasiswa (bisa kamu ubah sesuka hati)
const mahasiswa = [
  { nim: "23111001", nama: "Rani Pratiwi" },
  { nim: "23111002", nama: "Budi Santoso" },
  { nim: "23111003", nama: "Ivan Roisus Salam" },
  { nim: "23111004", nama: "Dewi Lestari" }
];

// Ambil elemen <tbody>
const tbody = document.getElementById("tabel-mahasiswa")

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

let dataMahasiswa = JSON.parse(localStorage.getItem('dataMahasiswa')) || [];

const modal = document.getElementById("formModal");
const btnTambah = document.getElementById("btnTambah");
const closeBtn = document.querySelector(".close");
const simpanBtn = document.getElementById("simpanBtn");

btnTambah.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target === modal) modal.style.display = "none"; };

simpanBtn.onclick = () => {
    const nim = document.getElementById("nim").value.trim();
    const nama = document.getElementById("nama").value.trim();

    if (!nim || !nama) {
    alert("Harap isi NIM dan Nama!");
    return;
    }

    dataMahasiswa.push({ nim, nama });
    localStorage.setItem('dataMahasiswa', JSON.stringify(dataMahasiswa));
    renderTabel();

    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
    modal.style.display = "none";
};

function renderTabel() {
    const tbody = document.querySelector('#tabel-mahasiswa tbody');
    tbody.innerHTML = "";
    dataMahasiswa.forEach((mhs, index) => {
    tbody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${mhs.nim}</td>
        <td>${mhs.nama}</td>
        </tr>`;
    });
}

renderTabel();
