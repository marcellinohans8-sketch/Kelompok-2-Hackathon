const bookingButtons = document.querySelectorAll(".booking-btn");
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

// untuk tutup modal
closeBooking.addEventListener("click", function () {
    bookingModal.style.opacity = "0";
    bookingModal.style.pointerEvents = "none";
    bookingModal.style.transform = "translate(-50%, -40%) scale(0.98)";
});


