

export default function Navbar () {
  return (
    <div class="nav-container">
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
      <a class="navbar-brand brand" href="#">
        Heidi Bailey
      </a>
      <span class="navbar-text">
          MA Film Student at Sheffield Hallam University
        </span>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#personal-profile">Personal Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}