// let sifre = Number(prompt("Şifre belirleyiniz:"))
// alert(sifre)
let bakiye = Number(500)

// let sifreGiris = Number(prompt("Şifrenizi giriniz:"))

function emir() {
    while (true) {
        let soru = Number(prompt(`
        *****************************************
        1. Bakiye Sorgulama
        2. Para Çekme
        3. Para Yatırma
        4. Çıkış Yap
    
        1'den 4'e kadar bir seçenek yazınız.
        *****************************************
        `))
        if (soru === 1) {
            alert("Güncel bakiyeniz: " + bakiye)
        } else if (soru === 2) {
            let paracek = Number(prompt("Çekmek istediğiniz tutarı girin:"))
            if (paracek > bakiye) {
                alert("Bu işlemi gerçekleştiremezsiniz.")
            } else if (bakiye > paracek) {
                bakiye -= paracek
                alert("Güncel bakiyeniz: " + bakiye)

            }
        } else if (soru === 3) {
            let yatir = Number(prompt("Yatırmak istediğiniz tutarı giriniz."))
            if (0 < yatir) {
                bakiye += yatir
                alert("Güncel bakiyeniz: " + bakiye)
            } else (
                alert("Böyle bir işlem gerçelşetiremezzsiniz.")
            )
        } else if (soru === 4) {
            alert("Çıkış yapılıyor.")
            break;
        } else {
            alert("Lütfen geçerli bir seçim yapınız")
        }
    }
}

// while (true) {
//     if (sifreGiris != sifre) {
//         alert("tekrar giriniz")
//         continue;
//     } else if (sifreGiris === sifre) {
//         emir();
//         break
//     } else {
//         alert("Hatalı giriş yaptınız, tekrar deneyiniz.");
//     }
// }

function girisKontrol() {
    alert("Sakin olun dolandırıcı değiliz!")
    let asilSifre = Number(prompt("4 haneli bir şifrenizi belirleyiniz:"))
    let denemeSayisi = 0;

    while (denemeSayisi < 3) {
        let girilenSifre = Number(prompt("Lütfen 4 haneli şifrenizi giriniz:"));

        if (girilenSifre === asilSifre) {
            alert("Giriş başarılı!");
            alert("ATM Uygulaması çalıştırılıyor...");
            emir()
            return;
        } else if (girilenSifre === null) {
            alert("Lütfen geçerli bir şifre oluşturunuz.")
        } else if (girilenSifre === "") {
            alert("Boş alanlar doldurulmamalıdır.")
        } else {
            alert("Yanlış şifre. Tekrar deneyin.");
            denemeSayisi++;
        }
    }

    alert("3 başarısız deneme sonucu hesap bloke edildi.");
}

// girisKontrol();

function saatiGuncelle() {
    const suan = new Date();
    const saat = suan.getHours();
    const dakika = suan.getMinutes();
    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gun = gunler[suan.getDay()];
    const tarih = suan.getDate();
    const ay = suan.getMonth() + 1;
    const yil = suan.getFullYear();

    const saatHTML = document.getElementById("saat");
    const tarihHTML = document.getElementById("tarih");

    saatHTML.textContent = `${saat.toString().padStart(2, "0")}:${dakika.toString().padStart(2, "0")}`;
    tarihHTML.textContent = `${gun}, ${tarih}.${ay}.${yil}`;
}

// Her saniyede bir saat ve tarihi güncelleyecek şekilde setInterval kullanımı
setInterval(saatiGuncelle, 1000); // 1000 milisaniye = 1 saniye


// Tarihi al
const tarihElementi = document.querySelector('.card-header span:last-child');

function tarihGuncelle() {
    const simdi = new Date();
    const gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const ayAdlari = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

    const gun = simdi.getDate();
    const haftaninGunu = gunler[simdi.getDay()];
    const ay = ayAdlari[simdi.getMonth()];
    const yil = simdi.getFullYear();

    const tarih = `${gun} ${ay} ${yil}, ${haftaninGunu}`;

    // HTML içeriğini güncelle
    tarihElementi.textContent = tarih;
}

// Sayfa yüklendiğinde ve belirli aralıklarla tarihi güncelle
tarihGuncelle();
setInterval(tarihGuncelle, 1000); // Her saniyede bir tarihi güncelle



// Planı seç butonunu seçme
const planSecButton1 = document.getElementById('planSecButton1');

// Planı seç butonuna tıklama olayı ekleme
planSecButton1.addEventListener('click', function () {
    // İlgili bilgileri alabilir veya sabit bir bilgi ekleyebilirsiniz
    const secilenPlan = {
        ad: 'Professional',
        fiyat: '$10',
        ozellikler: [
            'Günlük sınırsız para çekme',
            'Günlük sınırsız para gönderme',
            'Günlük sınırsız ATM\'den para çekme'
        ]
    };

    // Bilgileri localStorage'a eklemek
    localStorage.setItem('secilenPlan', JSON.stringify(secilenPlan));
});

// localStorage.clear()

const planSecButton2 = document.getElementById('planSecButton2');

planSecButton2.addEventListener('click', function () {
    // İlgili bilgileri alabilir veya sabit bir bilgi ekleyebilirsiniz
    const secilenPlan = {
        ad: 'Professional',
        fiyat: '$50',
        ozellikler: [
            'Günlük sınırsız para çekme',
            'Günlük sınırsız para gönderme',
            'Günlük sınırsız ATM\'den para çekme'
        ]
    };

    // Bilgileri localStorage'a eklemek
    localStorage.setItem('secilenPlan', JSON.stringify(secilenPlan));
});

const planSecButton3 = document.getElementById('planSecButton3');

planSecButton3.addEventListener('click', function () {
    // İlgili bilgileri alabilir veya sabit bir bilgi ekleyebilirsiniz
    const secilenPlan = {
        ad: 'Professional',
        fiyat: '$100',
        ozellikler: [
            'Günlük sınırsız para çekme',
            'Günlük sınırsız para gönderme',
            'Günlük sınırsız ATM\'den para çekme'
        ]
    };

    // Bilgileri localStorage'a eklemek
    localStorage.setItem('secilenPlan', JSON.stringify(secilenPlan));
});