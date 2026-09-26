// --- 1. AMBIL ELEMEN DOM ---
// Objek pratinjau
const previewBox = document.getElementById("preview-box");

// Input Sliders & Controls
const sliderX = document.getElementById("slider-x");
const sliderY = document.getElementById("slider-y");
const sliderBlur = document.getElementById("slider-blur");
const sliderSpread = document.getElementById("slider-spread");
const colorShadow = document.getElementById("color-shadow");
const toggleInset = document.getElementById("toggle-inset");

// Label Angka & Teks Output
const valX = document.getElementById("val-x");
const valY = document.getElementById("val-y");
const valBlur = document.getElementById("val-blur");
const valSpread = document.getElementById("val-spread");
const valColor = document.getElementById("val-color");

// Output Code & Button
const cssCode = document.getElementById("css-code");
const btnCopy = document.getElementById("btn-copy");

// --- 2. FUNGSI UPDATE BOX SHADOW ---
function updateBoxShadow() {
    // Ambil nilai dari setiap kontrol
    const x = sliderX.value;
    const y = sliderY.value;
    const blur = sliderBlur.value;
    const spread = sliderSpread.value;
    const color = colorShadow.value;
    const isInset = toggleInset.checked;

    // Update tampilan angka label di UI
    valX.textContent = `${x}px`;
    valY.textContent = `${y}px`;
    valBlur.textContent = `${blur}px`;
    valSpread.textContent = `${spread}px`;
    valColor.textContent = color.toUpperCase();

    // Susun string CSS box-shadow
    // Format: [inset] offset-x offset-y blur-radius spread-radius color
    const insetPrefix = isInset ? "inset " : "";
    const shadowString = `${insetPrefix}${x}px ${y}px ${blur}px ${spread}px ${color}`;

    // Terapkan properti ke box pratinjau
    previewBox.style.boxShadow = shadowString;

    // Tampilkan syntax CSS lengkap di box kode
    cssCode.textContent = `box-shadow: ${shadowString};`;
}

// --- 3. EVENT LISTENERS ---
// Dengarkan perubahan pada seluruh elemen input
sliderX.addEventListener("input", updateBoxShadow);
sliderY.addEventListener("input", updateBoxShadow);
sliderBlur.addEventListener("input", updateBoxShadow);
sliderSpread.addEventListener("input", updateBoxShadow);
colorShadow.addEventListener("input", updateBoxShadow);
toggleInset.addEventListener("change", updateBoxShadow);

// --- 4. FUNGSI COPY KODE KE CLIPBOARD ---
btnCopy.addEventListener("click", () => {
    // Salin teks CSS ke clipboard pengguna
    navigator.clipboard.writeText(cssCode.textContent).then(() => {
        // Beri umpan balik visual pada tombol
        btnCopy.textContent = "✅ TERSALIN!";
        btnCopy.style.backgroundColor = "#facc15"; // Ubah sementara ke kuning

        setTimeout(() => {
            btnCopy.textContent = "📋 COPY CSS";
            btnCopy.style.backgroundColor = "#4ade80"; // Kembali ke warna hijau awal
        }, 2000);
    });
});

// Jalankan fungsi sekali saat aplikasi dimuat pertama kali
updateBoxShadow();
