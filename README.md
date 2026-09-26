# 🌑 CSS Box Shadow Generator

Aplikasi pembuat efek bayangan (*box-shadow*) CSS interaktif berbasis web dengan gaya tampilan *Colorful Neobrutalism*. Pengguna dapat menyesuaikan arah bayangan (X & Y offset), keburaman (*blur*), perluasan (*spread*), warna bayangan, serta beralih ke mode bayangan dalam (*inset*) secara instan.

Proyek ini sangat cocok untuk pemula yang ingin belajar membuat **CSS Tooling**, memahami **Input Handling**, dan memanfaatkan **Clipboard API**.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Atribut Properti CSS `box-shadow`:**
   Mempelajari sintaks lengkap bayangan kotak di CSS:
   `box-shadow: [inset] <offset-x> <offset-y> <blur-radius> <spread-radius> <color>;`
2. **Penggunaan Variatif Input HTML:**
   - `<input type="range">` untuk angka rentang.
   - `<input type="color">` untuk pemilih warna (*color picker*).
   - `<input type="checkbox">` untuk kondisi boolean (*inset* / *outset*).
3. **Real-time DOM Manipulation:**
   Menerapkan event listener `input` dan `change` untuk memberikan respons visual seketika saat kontrol digeser/diklik.
4. **Copy to Clipboard:**
   Menggunakan `navigator.clipboard.writeText()` untuk kemudahan menyalin kode CSS langsung ke dalam *project* lain.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur antarmuka tool generator dan slider
├── style.css        # Styling Neobrutalism responsif dan layout Grid
└── script.js        # Logika perhitungan dan pembentukan string CSS box-shadow
