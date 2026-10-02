// 1. Formu ve kartların ekleneceği boş alanı seçiyoruz
const form = document.getElementById("add-question-form");
const cardContainer = document.getElementById("new-cards-container");

// 2. Formun 'submit' (gönderme) olayını dinliyoruz
form.addEventListener("submit", (event) => {
  // 3. Sayfanın yenilenmesini (default submit behavior) engelliyoruz
  event.preventDefault();

  // 4. Input alanlarındaki verileri okuyoruz
  const questionText = document.getElementById("new-question").value;
  const answerText = document.getElementById("new-answer").value;
  const tagsText = document.getElementById("new-tags").value;

  // 4. Input alanlarındaki verileri okuyoruz
  const questionText = document.getElementById("new-question").value;
  const answerText = document.getElementById("new-answer").value;
  const tagsText = document.getElementById("new-tags").value;

  // ARKA PLANDA GÖRMEK İÇİN EKLENEN KISIM:
  console.log("--- YENİ SORU GELDİ ---");
  console.log("Question:", questionText);
  console.log("Answer:", answerText);
  console.log("Tags:", tagsText);

  // 5. createElement() ile yeni DOM elementlerini oluşturuyoruz

  // Ana kart kapsayıcısı
  const card = document.createElement("article");
  card.classList.add("card"); // Mevcut CSS sınıfını ekliyoruz

  // Soru başlığı
  const questionElement = document.createElement("h2");
  questionElement.classList.add("question");
  questionElement.textContent = questionText;

  // Cevabı göster/gizle butonu
  const answerButton = document.createElement("button");
  answerButton.classList.add("btn-show-answer");
  answerButton.textContent = "Show Answer";

  // Cevap metni
  const answerElement = document.createElement("p");
  answerElement.classList.add("answer-text");
  answerElement.style.display = "none"; // Başlangıçta gizli
  answerElement.style.marginTop = "15px";
  answerElement.style.fontStyle = "italic";
  answerElement.textContent = answerText;

  // Etiket (Hashtag) alanı
  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("tags");

  const tagElement = document.createElement("span");
  tagElement.classList.add("tag"); // Eğer CSS'inde özel bir tag sınıfı varsa
  tagElement.textContent = `#${tagsText}`;

  tagsContainer.append(tagElement);

  // Bu butonun çalışması için daha önce yazdığımız toggle fonksiyonunu buraya da ekliyoruz
  answerButton.addEventListener("click", () => {
    if (answerElement.style.display === "none") {
      answerElement.style.display = "block";
      answerButton.textContent = "Hide Answer";
    } else {
      answerElement.style.display = "none";
      answerButton.textContent = "Show Answer";
    }
  });

  // 6. Oluşturduğumuz tüm elementleri ana kartın içine yerleştiriyoruz
  card.append(questionElement, answerButton, answerElement, tagsContainer);

  // 7. Kartı formun hemen altındaki alana ekliyoruz
  cardContainer.append(card);

  // (Opsiyonel ama önerilen) İşlem bittikten sonra formu temizle
  form.reset();
});
