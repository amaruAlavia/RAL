const navbarHTML = `
<nav class="awasi-nav" id="awasiNav">
    <!-- Left: Burger Menu -->
    <div class="nav-left">
        <div class="nav-toggle" id="navToggle">
            <span></span><span></span><span></span>
        </div>
    </div>

    <!-- Center: Logo -->
    <div class="nav-logo">
        <a href="index.html" class="logo-link">
            <span class="logo-refugio">REFUGIO</span>
            <span class="logo-alma">ALMA</span>
            <span class="logo-lodge">| LODGE</span>
        </a>
    </div>

    <!-- Right: Placeholder/Empty for balance -->
    <div class="nav-right">
        <a href="https://new-booking.frontdeskmaster.com/?hostelId=y0ApHH4CwayUsndZazKIyVLbPVVKzzdO"
            class="btn-reservar">Reservar</a>
    </div>
</nav>

<!-- Menu móvil overlay -->
<div class="mobile-menu" id="mobileMenu">
    <a href="index.html#experiencias">Tours</a>
    <a href="index.html#nosotros">Nosotros</a>
    <a href="index.html#refugios">Refugios</a>
    <a href="index.html#galeria">Galería</a>
    <a href="index.html#ubicacion">Ubicación</a>
    <a href="index.html#contacto">Contacto</a>
</div>
`;

const footerHTML = `
<footer>
    <div class="footer-container">
        <!-- Brand / Copyright -->
        <div class="footer-section footer-brand">
            <img src="assets/logo.png" alt="Refugio Alma Lodge" class="footer-logo">
            <span>© 2026 Refugio Alma Lodge</span>
            <span class="footer-rights">Todos los derechos reservados.</span>
        </div>

        <!-- Social / Connect -->
        <div class="footer-section footer-social">
            <!-- Instagram -->
            <a href="https://www.instagram.com/refugioalmalodge" target="_blank" class="social-link"
                aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 256 256">
                    <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z">
                    </path>
                </svg>
            </a>
            <!-- Google Maps -->
            <a href="https://www.google.com/maps/place/Refugio+Alma+Lodge/@-41.7109775,-72.4330182,12.5z/data=!4m15!1m8!3m7!1s0x9619984ccd5bb437:0xa53046c69435d744!2sPuelo,+Cochamo,+Los+Lagos!3b1!8m2!3d-41.6654082!4d-72.2968285!16s%2Fg%2F11bwdq9r1_!3m5!1s0x9619954e258a1fd1:0x3e62e3370b669ac7!8m2!3d-41.7063545!4d-72.4163991!16s%2Fg%2F11j4krz49g?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" class="social-link" aria-label="Ubicación en Google Maps">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 256 256">
                    <path
                        d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z">
                    </path>
                </svg>
            </a>
        </div>

        <!-- Links of Interest -->
        <div class="footer-section footer-links">
            <h4>Descubre Puelo</h4>
            <ul>
                <li><a href="#">Estuario Reloncavi</a></li>
                <li><a href="#">Cochamó</a></li>
                <li><a href="#">Termas del Sol</a></li>
            </ul>
        </div>
    </div>
</footer>
`;

function loadNavbar() {
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = navbarHTML;
    }
}

function loadFooter() {
    const container = document.getElementById('footer-container');
    if (container) {
        container.innerHTML = footerHTML;
    }
}

// Execute immediately
loadNavbar();
loadFooter();
