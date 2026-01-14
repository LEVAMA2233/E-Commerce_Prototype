import navbar from "./components/navbar.js";

const initApp = () => {
  console.log("App initialized");

  // obtener la referencia al contenedor del navbar por su id
  const navbarContainer = document.getElementById("main-header");
  navbarContainer.innerHTML = navbar();

};

export default initApp;