class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

function mudarFace() {
    var face = document.getElementById('face').getElementsByTagName('img')[0];
    face.src = '../img/face-logo-azul.png';
}
  
  function voltarFace() {
    var face = document.getElementById('face').getElementsByTagName('img')[0];
    face.src = '../img/face-logo.png';
  }


function mudarInsta() {
    var insta = document.getElementById('insta').getElementsByTagName('img')[0];
    insta.src = '../img/insta-logo-azul.png';
}
  
    function voltarInsta() {
    var insta = document.getElementById('insta').getElementsByTagName('img')[0];
    insta.src = '../img/insta-logo.png';
  }


function mudarLinkedin() {
    var linkedin = document.getElementById('linkedin').getElementsByTagName('img')[0];
    linkedin.src = '../img/linkedin-logo-azul.png';
}
  
    function voltarLinkedin() {
    var linkedin = document.getElementById('linkedin').getElementsByTagName('img')[0];
    linkedin.src = '../img/linkedin-logo.png';
  }


function mudarTwitter() {
    var twitter = document.getElementById('twitter').getElementsByTagName('img')[0];
    twitter.src = '../img/twitter-logo-azul.png';
}
  
    function voltarTwitter() {
    var twitter = document.getElementById('twitter').getElementsByTagName('img')[0];
    twitter.src = '../img/twitter-logo.png';
  }
  

function mudarLogo() {
      var logo = document.getElementById('logo-dental').getElementsByTagName('img')[0];
      logo.src = '../img/logo.png';
}
    
    function voltarLogo() {
      var logo = document.getElementById('logo-dental').getElementsByTagName('img')[0];
      logo.src = '../img/logo-branca.png';
  }

function mudarDental() {
        var dental = document.getElementById('mudar-dental').getElementsByTagName('h3')[0];
        dental.style.color = '#1C7BBF';
        dental.style.transition = '0.5s';
}
      
    function voltarDental() {
        var dental = document.getElementById('mudar-dental').getElementsByTagName('h3')[0];
        dental.style.color = 'white';
    }

    function mudarMaps() {
        var maps = document.getElementById('maps').getElementsByTagName('img')[0];
        maps.src = '../img/maps-borda.png';
        maps.style.transition = '2.2s';
}
      
    function voltarMaps() {
        var maps = document.getElementById('maps').getElementsByTagName('img')[0];
        maps.src = '../img/maps.jpeg';
    }
