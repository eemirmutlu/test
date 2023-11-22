document.addEventListener("DOMContentLoaded", function () {
    const sepetDiv = document.getElementById("sepet");
    const sonucDiv = document.getElementById("sonuc")

    // localStorage'dan seçilen planı al
    const secilenPlanJSON = localStorage.getItem("secilenPlan");
    let secilenPlan;

    if (secilenPlanJSON) {
        // JSON formatındaki veriyi nesneye çevir
        secilenPlan = JSON.parse(secilenPlanJSON);

        // Verileri kullanarak bir HTML yapısı oluştur
        const planHTML = `
            <div class="card container">
                <div class="card-body container">
                    <h5 class="card-title fw-bold">${secilenPlan.ad}</h5>
                    <p class="card-text fw-bold">Fiyat: ${secilenPlan.fiyat}</p>
                    <ul class="list-group fw-bold">
                        <li class="list-group-item bg-danger text-white">${secilenPlan.ozellikler[0]}</li>
                        <li class="list-group-item bg-danger text-white">${secilenPlan.ozellikler[1]}</li>
                        <li class="list-group-item bg-danger text-white">${secilenPlan.ozellikler[2]}</li>
                    </ul>
                </div>
            </div>
        `;

        const sonucHTML = `
            <div class="container bg-danger text-white rounded mt-2" id="sonuc">
                <h1 class="">Toplam Ödenecek Tutar: ${secilenPlan.fiyat}</h1>
            </div>
        `

        // Oluşturulan HTML'i sepetDiv içine ekle
        sepetDiv.innerHTML = planHTML;
        sonucDiv.innerHTML = sonucHTML;
    } else {
        sepetDiv.innerHTML = `
            <div class="container fw-bold">
                <h1>Sepetinizde Ürün Bulunmamaktadır.</h1>
            </div>
        `;
    }
});

function kapatSepet() {
    localStorage.removeItem("secilenPlan");
    location.reload();
}
