# Kelompok-2-Hackathon

Website statis bertema layanan rumah sakit lokal. Project ini dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework atau proses instalasi dependency.

## Deskripsi Project

Project ini menampilkan website informasi rumah sakit dengan fitur utama daftar dokter, filter spesialis, profil dokter, form booking, halaman tentang rumah sakit, dan halaman lokasi/kontak. Website dapat langsung dijalankan dari browser karena seluruh file berada di sisi frontend.

## Fitur Utama

- Halaman utama berisi informasi rumah sakit dan daftar dokter.
- Filter dokter berdasarkan spesialis:
  - Spesialis Paru
  - Spesialis Jantung
  - Spesialis Saraf
- Modal profil dokter menggunakan HTML dan CSS.
- Modal booking dokter menggunakan JavaScript.
- Receipt/ringkasan booking setelah pasien mengisi data.
- Konfirmasi booking melalui alert.
- Halaman About berisi profil singkat, visi, misi, dan tim developer.
- Halaman Location berisi embed Google Maps dan kontak media sosial.
- Header, navbar, dan footer yang digunakan di beberapa halaman.

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript DOM
- Google Maps Embed
- Gambar eksternal dari URL publik

## Struktur File

```text
.
|-- README.md
|-- home.html
|-- home-styles.css
|-- home.js
|-- home-booking.js
|-- about.html
|-- about-styles.css
|-- location.html
|-- location-styles.css
|-- edge.html
`-- edge-styles.css
```

## Penjelasan File

| File | Fungsi |
| --- | --- |
| `home.html` | Halaman utama website, berisi hero section, daftar dokter, modal profil dokter, form booking, receipt booking, header, navbar, dan footer. |
| `home-styles.css` | Styling khusus halaman utama, termasuk card dokter, modal profil, modal booking, dan receipt booking. |
| `home.js` | Logic filter dokter berdasarkan pilihan spesialis dari dropdown. |
| `home-booking.js` | Logic membuka modal booking, mengisi nama dokter otomatis, menyimpan data pasien sementara, menampilkan receipt, mengubah data, dan konfirmasi booking. |
| `about.html` | Halaman informasi rumah sakit, visi misi, dan daftar tim developer. |
| `about-styles.css` | Styling khusus halaman About. |
| `location.html` | Halaman lokasi rumah sakit, embed Google Maps, dan daftar kontak/media sosial. |
| `location-styles.css` | Styling khusus halaman Location. |
| `edge.html` | Contoh/komponen struktur header, navbar, dan footer. |
| `edge-styles.css` | Styling umum untuk top bar, header, navbar, dan footer yang dipakai lintas halaman. |

## Cara Menjalankan

Project ini tidak membutuhkan instalasi package.

1. Clone atau download repository ini.
2. Buka folder project.
3. Jalankan file `home.html` di browser.

Alternatif menggunakan extension Live Server di VS Code:

1. Buka folder project di VS Code.
2. Klik kanan pada `home.html`.
3. Pilih `Open with Live Server`.

## Alur Penggunaan Website

1. User membuka `home.html`.
2. User dapat melihat daftar dokter yang tersedia.
3. User memilih spesialis melalui dropdown filter.
4. User dapat klik `Lihat Profil` untuk membuka detail dokter.
5. User dapat klik `Booking` untuk membuka form booking dokter.
6. User mengisi nama pasien dan nomor HP.
7. Setelah submit, website menampilkan ringkasan booking.
8. User dapat memilih:
   - `Change` untuk mengubah data booking.
   - `Confirm` untuk mengonfirmasi booking.

## Daftar Halaman

### Home

File: `home.html`

Berisi halaman utama layanan rumah sakit. Bagian penting pada halaman ini:

- Header dan informasi kontak rumah sakit.
- Navbar ke halaman Home, About, dan Location.
- Hero image rumah sakit.
- Dropdown filter spesialis.
- Daftar dokter dengan rating dan harga konsultasi.
- Modal profil dokter.
- Form booking dokter.
- Receipt booking.
- Footer.

### About

File: `about.html`

Berisi informasi tentang rumah sakit, visi, misi, call to action menuju daftar dokter, dan daftar anggota tim.

### Location

File: `location.html`

Berisi lokasi rumah sakit menggunakan Google Maps Embed dan daftar kontak seperti Instagram, WhatsApp, TikTok, Facebook, Discord, dan Line.

## Daftar Dokter

### Spesialis Paru

- Dr. Strange
- Dr. Greget
- Dr. Bruce Wayne
- Dr. Peter Parker

### Spesialis Jantung

- Dr. Bruce Banner
- Dr. Tony Stark
- Dr. Clark Kent
- Dr. Diana Prince

### Spesialis Saraf

- Dr. Doom
- Dr. Charles Xavier
- Dr. Barry Allen
- Dr. Tchalla

## Tim Developer

- Jan William
- Brandon Lawanto
- Hans Marcellino
- Tri Putra Adimas Nugraha

## Catatan Pengembangan

- Project ini masih berbasis frontend statis, sehingga data booking belum tersimpan ke database.
- Data booking hanya ditampilkan sementara di halaman melalui DOM.
- Beberapa gambar menggunakan URL eksternal, jadi tampilan gambar membutuhkan koneksi internet.
- Link media sosial pada halaman Location masih berupa link placeholder.
- Jika ingin membuat booking benar-benar tersimpan, project dapat dikembangkan dengan backend dan database.

## Rencana Pengembangan Lanjutan

- Menambahkan validasi nomor HP yang lebih lengkap.
- Menyimpan data booking ke localStorage, backend, atau database.
- Menambahkan halaman detail dokter yang dinamis.
- Memperbaiki konsistensi data rumah sakit pada semua halaman.
- Mengganti link placeholder dengan link kontak resmi.
- Menambahkan responsive layout yang lebih rapi untuk mobile.
- Menambahkan accessibility label pada tombol dan modal.

## Kontributor

Project ini dibuat oleh Kelompok 2 untuk kebutuhan hackathon/pembelajaran.
