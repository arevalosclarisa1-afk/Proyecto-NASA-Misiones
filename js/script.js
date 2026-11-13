
const langButton = document.querySelector("#langButton");
let currentLang = localStorage.getItem("nasaLang") || "es";

function setLanguage(lang){
  currentLang = lang;
  localStorage.setItem("nasaLang", lang);
  document.querySelectorAll("[data-es][data-en]").forEach(el=>{
    el.textContent = lang === "es" ? el.dataset.es : el.dataset.en;
  });
  if(langButton) langButton.textContent = lang === "es" ? "🇺🇸 English" : "🇪🇸 Español";
}
if(langButton){
  langButton.addEventListener("click",()=>setLanguage(currentLang==="es"?"en":"es"));
}
setLanguage(currentLang);

document.querySelectorAll(".quiz").forEach(quiz=>{
  const correct = Number(quiz.dataset.correct);
  const buttons = quiz.querySelectorAll("button[data-answer]");
  const result = quiz.querySelector(".result");
  buttons.forEach(button=>{
    button.addEventListener("click",()=>{
      buttons.forEach(b=>b.disabled=true);
      const ok = Number(button.dataset.answer)===correct;
      result.textContent = ok
        ? (currentLang==="es" ? "🚀 ¡Correcto! Misión cumplida." : "🚀 Correct! Mission accomplished.")
        : (currentLang==="es" ? "🛰️ Casi. Revisá la información y volvé a intentarlo." : "🛰️ Almost. Review the information and try again.");
      result.style.color = ok ? "#70ff9a" : "#ff9f43";
    });
  });
});
