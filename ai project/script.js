// const recognition = new (
//   window.SpeechRecognition || window.webkitSpeechRecognition
// )();
// recognition.Lang = "en-US";
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   //recognition.start()
//   //conver text to voice
//   function speak(text) {
//     const abc = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(abc);
//   }
//   function handleCommands(command) {
//     if (command.includes("open youtube")) {
//       speak("Opening Youtube..");
//       window.open("https://www.youtube.com", "blank");
//     } else if (command.includes("open facebook")) {
//       speak("Opening facebook..");
//       window.open("https://www.facebook.com", "blank");
//     } else if (command.includes("open instagram")) {
//       speak("Opening instagram..");
//       window.open("https://www.instagram.com", "blank");
//     } else if (command.includes("open whatsapp")) {
//       speak("Opening whatsapp..");
//       window.open("https://www.whatsapp.com", "blank");
//     }
//     else if (command.includes("open google")) {
//       speak("Opening google..");
//       window.open("https://www.google.com", "blank");
//     } 
//      else {
//       speak("search on google");
//       window.open(`https://www.google.com/search?q=${command}`,"_blank")
//     }
//   }
//   speak("Hello,how can I help you");
//   setTimeout(() => {
//     btn.innerHTML = "Listening..."
//     btn.style.backgroundColor = "red"
//     recognition.start();
//   }, 2000);
//   recognition.onresult = (event) => {
//     const command = event.results[0][0].transcript.toLowerCase();
//     handleCommands(command);
//   };
//   recognition.onend = ()=>{
//     btn.innerHTML ="Start Listening"
//     btn.style.backgroundColor = "#4caf50"
//   }
// });
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.lang = "en-US"; // ✅ correct

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

  function speak(text) {
    const abc = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(abc);
  }

  function handleCommands(command) {
    if (command.includes("open youtube")) {
      speak("Opening Youtube..");
      window.open("https://www.youtube.com", "_blank");
    } 
    else if (command.includes("open google")) {
      speak("Opening Google..");
      window.open("https://www.google.com", "_blank");
    } 
    else {
      speak("Searching on Google");
      window.open(`https://www.google.com/search?q=${command}`, "_blank");
    }
  }

  speak("Hello, how can I help you");

  setTimeout(() => {
    btn.innerHTML = "Listening...";
    btn.style.backgroundColor = "red";
    recognition.start(); // ✅ important
  }, 2000);

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log(command); // 👉 check console
    handleCommands(command);
  };

  recognition.onend = () => {
    btn.innerHTML = "Start Listening";
    btn.style.backgroundColor = "#4caf50";
  };
});
