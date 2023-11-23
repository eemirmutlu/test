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

const odeme = document.getElementById("odemeYap")


// alert(`Ödeyeceğiniz tutar: ${secilenPlan.fiyat}`)
// const kartNumarasi = Number(prompt("Kredi kartı numaranızı giriniz."))
function odemeYap() {

    if (kartNumarasi !== null) {
        const kartTarih = Number(prompt("Kartınızın son kullanım tarihini giriniz."))
        if (kartTarih !== null) {
            const cvv = Number(prompt("CVV numaranızı giriniz."));
            if (cvv !== null) {
                alert("Ödeme İşleminiz gerçekleştriliyor. Bizi tercih ettiğiniz için teşekkürler.")
            } else {
                alert("Lütfen CVV numarasını doğru girdiğinden emin olunuz.");
            }
        } else {
            alert("Lütfen kartınızın son kullanma tarihinin doğru girildiğinden emin olun.")
        }
    } else {
        alert("Lütfen kart numaranızı doğru girdiğinizden emin olun.")
    }
};

document.addEventListener("click", function () {
    
    // const secilenPlanJSON = localStorage.getItem("secilenPlan");
    // let secilenPlan;

    // secilenPlan = JSON.parse(secilenPlanJSON);

    // alert(`Ödeyeceğiniz tutar: ${secilenPlan.fiyat}`)
    const kartNumarasi = Number(prompt("Kredi kartı numaranızı giriniz."))

    if (kartNumarasi !== null) {
        const kartTarih = Number(prompt("Kartınızın son kullanım tarihini giriniz."))
        if (kartTarih !== null) {
            const cvv = Number(prompt("CVV numaranızı giriniz."));
            if (cvv !== null) {
                alert("Ödeme İşleminiz gerçekleştriliyor. Bizi tercih ettiğiniz için teşekkürler.")
            } else {
                alert("Lütfen CVV numarasını doğru girdiğinden emin olunuz.");
            }
        } else {
            alert("Lütfen kartınızın son kullanma tarihinin doğru girildiğinden emin olun.")
        }
    } else {
        alert("Lütfen kart numaranızı doğru girdiğinizden emin olun.")
    }
})
