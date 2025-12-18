// logic filter dropdown

const dropdown = document.getElementById("specialistFilter");
const doctors = document.querySelectorAll(".doctor");

dropdown.addEventListener("change", function () {
  const selected = this.value;

  for (let i = 0; i < doctors.length; i++) {
    const doctor = doctors[i];
    const spesialis = doctor.dataset.spesialis;

    if (selected === "all" || spesialis === selected) {
      doctor.style.display = "flex";
    //   doctor.style.justifyContents = "center";
    } else {
      doctor.style.display = "none";
    }
  }
});
