const themes = [

  {name: "light", message: "Light theme activated" },
  {name: "dark", message: "Dark theme activated"}
];

const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const message = document.getElementById("theme-message");
const themeList = document.querySelectorAll("li");


button.addEventListener("click", () => {

  if (dropdown.hidden) {
    dropdown.hidden = false;
    button.setAttribute("aria-expanded", "true");
  } else {
    dropdown.hidden = true;
    button.setAttribute("aria-expanded", "false")
  }
});

themeList.forEach((theme) => { 
  
   theme.addEventListener("click", () => {
   
  themes.forEach((t) => {
   
   const classToRemove = "theme-" + t.name.toLowerCase();
   document.body.classList.remove(classToRemove);
   
   });

   document.body.classList.add(theme.id);

   const themeObj = themes.find(t => t.name === theme.textContent.toLowerCase());
   message.textContent = themeObj.message;

   dropdown.hidden = true;
   button.setAttribute("aria-expanded", "false");
  

  });
});
