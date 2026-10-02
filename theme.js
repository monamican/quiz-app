console.log("Theme.js dosyası çalışıyor!");

// 1. Sayfadaki butonu seçiyoruz (ID yerine Class kullandık çünkü her sayfada var)
const toggleButton = document.querySelector(".dark-mode-toggle");
console.log("Bulunan buton:", toggleButton);

// 2. Sayfa yüklendiğinde hafızayı (localStorage) kontrol et
const currentTheme = localStorage.getItem("theme");

// Eğer hafızada 'dark' kayıtlıysa, sayfaya hemen karanlık mod kıyafetini giydir
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// 3. Butona tıklanma olayını dinle
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    // Body etiketinde 'dark-mode' sınıfı varsa çıkar, yoksa ekle (toggle)
    document.body.classList.toggle("dark-mode");

    // Şimdi yeni durumu hafızaya kaydetmemiz lazım
    // Eğer şu an 'dark-mode' sınıfı eklendiyse:
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark"); // Hafızaya karanlık diye not düş
    } else {
      localStorage.setItem("theme", "light"); // Hafızaya aydınlık diye not düş
    }
  });
}
