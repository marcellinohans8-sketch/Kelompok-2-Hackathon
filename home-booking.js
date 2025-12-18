const bookingButtons = document.querySelectorAll(".booking-open");
const bookingModal = document.getElementById("bookingModal");
const doctorInput = document.getElementById("doctorName");
const closeBooking = document.getElementById("closeBooking");

// untuk tampilin modal dan auto ketik nama dokter di form modal
bookingButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        doctorInput.value = btn.dataset.doctor;

        bookingModal.style.opacity = "1";
        bookingModal.style.pointerEvents = "auto";
        bookingModal.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

// untuk tutup modal Booking Dokter
closeBooking.addEventListener("click", function () {
    bookingModal.style.opacity = "0";
    bookingModal.style.pointerEvents = "none";
    bookingModal.style.transform = "translate(-50%, -40%) scale(0.98)";
    patientNameInput.value = "";
    patientPhoneInput.value = "";

});


// ambil elemen untuk booking doang
const bookingForm = document.getElementById("bookingForm");
const patientNameInput = document.getElementById("patientName");
const patientPhoneInput = document.getElementById("phoneNumber");

const receiptModal = document.getElementById("maindiv");
const receiptDoctor = document.querySelector(".receipt-container .name");
const receiptNumber = document.querySelector(".receipt-container .number");

// untuk submit booking
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault(); // ⛔ supaya gak reload

    const doctorName = doctorInput.value;
    const patientName = patientNameInput.value;
    const patientPhone = patientPhoneInput.value;

    if (patientName === "" || patientPhone === "") {
        alert("Nama dan nomor HP wajib diisi");
        return;
    }

    // isi receipt
    receiptDoctor.textContent = doctorName;
    receiptNumber.textContent = patientPhone;

    // tutup modal booking
    bookingModal.style.opacity = "0";
    bookingModal.style.pointerEvents = "none";
    bookingModal.style.transform = "translate(-50%, -40%) scale(0.98)";

    // tampilkan receipt
    receiptModal.style.display = "flex";
});


// buat tombol close receipt
const closeReceipt = document.querySelector(".close-receipt");

closeReceipt.addEventListener("click", function () {
    receiptModal.style.display = "none";
    patientNameInput.value = "";
    patientPhoneInput.value = "";

});


// buat tombol change receipt
const changeBtn = document.querySelector(".receipt-button.change");

changeBtn.addEventListener("click", function () {
    receiptModal.style.display = "none";
    patientNameInput.value = "";
    patientPhoneInput.value = "";

    bookingModal.style.opacity = "1";
    bookingModal.style.pointerEvents = "auto";
    bookingModal.style.transform = "translate(-50%, -50%) scale(1)";
});


// buat tombol confirm receipt
const confirmBtn = document.querySelector(".receipt-button.confirm");

confirmBtn.addEventListener("click", function () {
    alert(
        `Booking berhasil dikonfirmasi!
Kami akan mengirimkan Anda pesan ke
nomor WhatsApp: ${receiptNumber.textContent}

Terimakasih telah menggunakan layanan kami!
Jika ada pertanyaan, silahkan hubungi: +62 852-6091-4785`
    );
    receiptModal.style.display = "none";

    patientNameInput.value = "";
    patientPhoneInput.value = "";

});