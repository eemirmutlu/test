// sepet.js

document.addEventListener("DOMContentLoaded", function () {
    const sepetDiv = document.getElementById("sepet");

    // localStorage'dan seçilen planı al
    const secilenPlanHTML = localStorage.getItem("secilenPlan");

    if (secilenPlanHTML) {
        // HTML olarak alınan planı sepetDiv içine ekle
        sepetDiv.innerHTML = secilenPlanHTML;
    } else {
        sepetDiv.innerHTML = "<p>Sepetinizde plan bulunmamaktadır.</p>";
    }
});

function kapatSepet() {
    localStorage.clear();
    location.reload()
}



