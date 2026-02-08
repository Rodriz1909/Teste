const wheel = document.querySelector(".container");
const spinBtn = document.getElementById("spin");
const finalText = document.getElementById("finalText");
const messageSection = document.querySelector(".message-section");

let rotation = 0;
let spinning = false;

spinBtn.addEventListener("click", () => {
  if (spinning) return;
  
  spinning = true;
  
  // Reseta a visibilidade para permitir novos giros
  finalText.classList.remove("show");
  if (messageSection) messageSection.classList.remove("show");

  const extraDegrees = Math.floor(Math.random() * 360);
  rotation += 1800 + extraDegrees; 

  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    spinning = false;
    finalText.classList.add("show");
    
    // Verifica se a seção existe antes de mostrar
    if (messageSection) {
      messageSection.classList.add("show");
    } else {
      console.error("Erro: A classe .message-section não foi encontrada no HTML.");
    }
  }, 2500);
});