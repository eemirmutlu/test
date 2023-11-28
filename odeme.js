const secilenPlan = JSON.parse(localStorage.getItem('secilenPlan'));

// HTML'de fiyatı göster
const fiyatGoster = document.getElementById('fiyatGoster');
if (secilenPlan && secilenPlan.fiyat) {
    fiyatGoster.textContent = `Ödenecek tutar: ${secilenPlan.fiyat}`;
} else {
    fiyatGoster.textContent = "Ödenecek tutar bulunamadı.";
}


// Ödeme yap fonksiyonu
function odemeYap1() {
    // let odemeOnaylandi = false;

    while (true) {
        const kartNumarasi = prompt("Kredi kartı numaranızı giriniz.");

        if (kartNumarasi !== null && kartNumarasi.trim() !== "") {
            const kartTarih = prompt("Kartınızın son kullanım tarihini giriniz.");

            if (kartTarih !== null && kartTarih.trim() !== "") {
                const cvv = prompt("CVV numaranızı giriniz.");

                if (cvv !== null && cvv.trim() !== "") {
                    const hassasBilgiler = {
                        kartNumarasi: kartNumarasi,
                        kartTarih: kartTarih,
                        cvv: cvv
                    };

                    // Ödeme yapıldığını simüle etmek için sadece konsola yazdırma
                    console.log("Ödeme İşleminiz gerçekleştiriliyor. Bilgiler:", hassasBilgiler);
                    alert("Ödeme İşleminiz gerçekleştiriliyor. Bizi tercih ettiğiniz için teşekkürler.");
                    break; // Ödeme onaylandı, döngüyü sonlandır
                } else {
                    alert("Lütfen CVV numarasını doğru girdiğinizden emin olunuz.");
                }
            } else {
                alert("Lütfen kartınızın son kullanma tarihinin doğru girildiğinden emin olun.")
            }
        } else {
            alert("Lütfen kart numaranızı doğru girdiğinizden emin olun.")
        }
    }
}


function odeme() {
    while (true) {
        const secim = Number(prompt(`
        1-Ödeme Yap
        2-İptal et
        `))

        if (secim === 1) {
            odemeYap1()
            break;
        } else if (secim === 2) {
            break;
        } else {
            alert("Hatalı bir tuşlama yaptınız.")
        }
    }
}

function checkboxOnChange() {
    const checkbox = document.getElementById('flexCheckIndeterminate');
    const odemeButton = document.querySelector('.btn');

    if (checkbox.checked) {
        odemeButton.removeAttribute('disabled'); // Checkbox işaretlendiğinde butonu aktif et
    } else {
        odemeButton.setAttribute('disabled', true); // Checkbox işaretlenmediğinde butonu devre dışı bırak
    }
}

function odemeYap() {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için

    const checkbox = document.getElementById('flexCheckIndeterminate');

    if (checkbox.checked) {
        odeme() // Ödeme işlemini burada gerçekleştirin
        localStorage.clear();
        location.reload();
    } else {
        alert("Gerekli bilgileri doldurunuz."); // Checkbox işaretlenmediğinde uyarı ver
    }
}

function control() {
    if (!localStorage.getItem('secilenPlan')) {
        alert("Bu işlem gerçekleştirilemiyor. Local Storage boş.");
    } else {
        odemeYap();
    }
}