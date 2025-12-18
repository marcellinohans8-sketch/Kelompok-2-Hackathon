// Ambil Data
const overlay = document.querySelector(".modal-overlay");
const bookingModal = document.getElementById("bookingModal");

// Untuk Buka Modal
const bookingButtons = document.querySelectorAll(".booking-btn");
const doctorInput = document.getElementById("doctorName");
const closeBooking = document.getElementById("closeBooking");

bookingButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        doctorInput.value = btn.dataset.doctor;

        // tampilkan overlay
        overlay.style.display = "block";
        overlay.style.opacity = "1";

        // tampilkan modal booking
        bookingModal.style.opacity = "1";
        bookingModal.style.pointerEvents = "auto";
        bookingModal.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

// Tutup Modal Booking
closeBooking.addEventListener("click", closeBookingModal);
overlay.addEventListener("click", closeBookingModal);

function closeBookingModal() {
    bookingModal.style.opacity = "0";
    bookingModal.style.pointerEvents = "none";
    bookingModal.style.transform = "translate(-50%, -40%) scale(0.98)";

    overlay.style.opacity = "0";

    setTimeout(function () {
        overlay.style.display = "none";
    }, 200);
}


