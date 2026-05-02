(function () {
  const NAV_ITEMS = [
    { key: "home", href: "https://loannmkw.github.io", label: "Accueil" },
    { key: "tutoriels", href: "https://loannmkw.github.io/tutoriels", label: "Tutoriels" },
    { key: "partenaires", href: "https://loannmkw.github.io/partenaires", label: "Partenaires" },
    { key: "ressources", href: "https://loannmkw.github.io/ressources", label: "Ressources" },
    { key: "profils", href: "https://loannmkw.github.io/profils", label: "Profils" },
    { key: "a-propos", href: "https://loannmkw.github.io/a-propos", label: "À Propos" },
    { key: "formulaires", href: "https://loannmkw.github.io/formulaires", label: "Formulaires" }
  ];

  function renderHeader(opts) {
    const targetId = (opts && opts.targetId) || "site-header";
    const active = (opts && opts.active) || "home";
    const target = document.getElementById(targetId);
    if (!target) return;
    const siteIcon = "https://github.com/LoannMKW/loannmkw.github.io/blob/main/Fichiers/Mii%20&%20Backgrounds/Mii.webp?raw=true";

    const navLinks = NAV_ITEMS.map((item) => {
      const activeClass = item.key === active ? " active" : "";
      return `<a href="${item.href}" class="nav-link${activeClass}">${item.label}</a>`;
    }).join("");

    target.innerHTML = `
  <header class="header">
    <div class="nav-content">
      <a class="nav-home" href="https://loannmkw.github.io" aria-label="Accueil">
        <img src="${siteIcon}" alt="Icone du site">
      </a>
      <nav class="nav-links">
        ${navLinks}
      </nav>
        <button id="playPause" class="toggle">🔈 Jouer</button>
    </div>
  </header>`;
  }

  function renderFooter(opts) {
    const targetId = (opts && opts.targetId) || "site-footer";
    const target = document.getElementById(targetId);
    if (!target) return;

    target.innerHTML = `
  <footer class="container">
    <div class="footer-section">Loannnnnn - Made with &#128293; in France &#8226; Built with AI</div>
  </footer>`;
  }

  window.CreeperPartials = {
    renderHeader,
    renderFooter
  };
})();
