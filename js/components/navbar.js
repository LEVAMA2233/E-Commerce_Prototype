const navbar = () => {
  return`
  <!--Inicia la navbar-->
  <nav class="navbar navbar-expand-lg custom-navbar sticky-top " data-bs-theme="dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="./img-acercade/logo-muso.png" id="logo-muso" alt="Logo de Musou" class="img-fluid">
              </a>
              <button class="navbar-toggler" style="color:#e6e6ff; margin-right: 20px;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon  mr-4"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto align-items-center">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" >Cursos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Recursos educativos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" >Cultura</a>
                  </li>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" >Acerca de nosotros</a>
                  </li>
                  <!-- Solo se muestran cuando la navbar colapsa -->
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="#">Carrito</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="#">Log in</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1">
                    <a class="nav-link" href="#">Regístrate</a>
                  </li>
                  <!-- Solo se muestran como botones en  caso de pantallas grandes-->
                  <li class="nav-item d-none d-lg-block">
                    <a class="navbar-brand" href="#">
                        <img src="./img-acercade/carrito-logo.png" id="logo-carrito" alt="Logo de carrito" class="img-fluid">
                    </a>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                    <button class="btn " id="btn-Log-in" type="submit">Log in</button>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                    <button class="btn " type="submit">Regístrate</button>
                  </li>
                </ul>
                
                  
                  
                
              </div>
            </div>
  </nav><!--Termina la navbar-->
  `;
}

export default navbar;