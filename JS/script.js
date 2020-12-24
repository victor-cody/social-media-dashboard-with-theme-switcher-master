// a dark Mode API
{
  // our elements
  const toggleModeBtn = document.getElementById("toggle-mode");
  const icon = toggleModeBtn.querySelector("i");

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  //onload function to load the correct theme
  window.onload = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
      document.body.classList.toggle("dark-theme");
      changeIcon();
    } else if (currentTheme == "light") {
      document.body.classList.toggle("light-theme");
    }
  };

  // EventListener on our toggleModeBtn Button
  toggleModeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    changeIcon();

    let theme;
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");
      theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    }
    //seting the theme and storing it in the local storage
    localStorage.setItem("theme", theme);
  });

  //toggling our day and night icons
  function changeIcon() {
    icon.classList.toggle("ion-ios-moon");
  };

}
