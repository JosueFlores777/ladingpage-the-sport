import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SlickCarouselModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thesport';

  comercios = [
    { nombre: 'Papa Johns', img: './assets/img/content/picture.jpg', descripcion: 'Mejores ingredientes, mejor pizza.', link: 'https://www.instagram.com/papajohns_sv/' },
    { nombre: 'Mak Meats', img: './assets/img/content/picture-01.jpg', descripcion: '🔥Tenemos las carnes, mariscos, papas y más que necesitas en tu negocio.', link: 'https://www.instagram.com/makmeats.sv/?hl=es' },
    { nombre: 'Banco Atlantida', img: './assets/img/content/picture-02.jpg', descripcion: 'Una institución centenaria con trayectoria regional.', link: 'https://www.instagram.com/bancatlan/?hl=es' },
    { nombre: 'El Sin Rival', img: './assets/img/content/picture-03.jpg', descripcion: '¡Sorbetes NATURALES! 🍨👌😉', link: 'https://www.instagram.com/elsinrivaloficial/?hl=es' },
    { nombre: 'Farmacias Camila', img: './assets/img/content/picture 05.jpg', descripcion: 'Nuestro compromiso es TU SALUD💚', link: 'https://www.instagram.com/farmaciascamilasv/?hl=es' },
    { nombre: 'Bodeganga Hilasal', img: './assets/img/content/picture 06.jpg', descripcion: 'Toallas Hilasal con precios especiales al mayoreo y al detalle.', link: 'https://www.instagram.com/bodegangashilasal/?hl=es' },
    { nombre: 'Soya Nutribar', img: './assets/img/content/picture 07.jpg', descripcion: 'Comida saludable, naturalmente deliciosa.', link: 'https://www.instagram.com/soyanutribar/?hl=es' },
    { nombre: 'Cabal Internet', img: './assets/img/content/picture 08.jpg', descripcion: 'Proveedor de servicios de internet', link: 'https://www.facebook.com/cabalinternet/' },
    { nombre: 'MyCeviche', img: './assets/img/content/picture 09.jpg', descripcion: 'En My Ceviche te preparamos nuestro Ceviche Original perfecto hecho con la salsa especial del chef🤤', link: 'https://www.instagram.com/myceviche/?hl=es' },
    { nombre: 'TenGo Market', img: './assets/img/content/picture 10.jpg', descripcion: 'Hacemos que cada día sea más fácil y mejor!', link: 'https://www.instagram.com/tengo.todomarket/?hl=es' },
    { nombre: 'Cheers', img: './assets/img/content/picture 11.jpg', descripcion: 'Boutique de Licores, Vinos & Deli', link: 'https://www.instagram.com/cheers.sv/?hl=es' },
    { nombre: 'Porta Real Estate', img: './assets/img/content/picture 12.jpg', descripcion: 'Lo mejor del Real Estate en El Salvador ya esta en Surf City 🏄‍♂️.', link: 'https://www.instagram.com/portarealestate/?hl=es' },
    { nombre: 'La Neveria', img: './assets/img/content/picture 13.jpg', descripcion: '"Siempre Algo Nuevo" Helados, paletas, pasteles de helado.', link: 'https://www.instagram.com/laneveria_oficial/?hl=es' },
    { nombre: 'Movistar', img: './assets/img/content/picture 14.jpg', descripcion: 'Telefonía móvil y fija, Internet, celulares, promociones y más.', link: 'https://www.instagram.com/movistar_sv/?hl=es' },
    { nombre: 'Don Chicharron', img: './assets/img/content/picture 15.jpg', descripcion: 'Siempre en ruta! 🐷🚗 ES 📍 Los mejores chicharrones de C.A.', link: 'https://www.instagram.com/donchicharron.sv/?hl=es' },
    { nombre: 'Seaside Sourdough', img: './assets/img/content/picture 16.jpg', descripcion: 'Imperdiet purus pellentesque sit mi nibh sit integer faucibus.', link: 'https://www.instagram.com/seaside.sourdough/' }
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1021,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  logos = [
    './assets/img/logo/agua-inmaculada-logo.png',
    './assets/img/logo/banco-atlantida.png',
    './assets/img/logo/Logo Cabal.png',
    './assets/img/logo/Logo La Neveria.png',
    './assets/img/logo/hilasal-logo.png',
    './assets/img/logo/Movistar_logo.png',
    './assets/img/logo/MyCevi logox2.png',
    './assets/img/logo/Papa Johns Wordmark.png',
    './assets/img/logo/PORTA_logo.png',
    './assets/img/logo/soya-nutribar-logo.png',
    './assets/img/logo/tengo-todo-market-logo.png'
    , './assets/img/logo/agua-inmaculada-logo.png',
    './assets/img/logo/banco-atlantida.png',
    './assets/img/logo/Logo Cabal.png',
    './assets/img/logo/Logo La Neveria.png',
    './assets/img/logo/hilasal-logo.png',
    './assets/img/logo/Movistar_logo.png',
    './assets/img/logo/MyCevi logox2.png',
    './assets/img/logo/Papa Johns Wordmark.png',
    './assets/img/logo/PORTA_logo.png',
    './assets/img/logo/soya-nutribar-logo.png',
    './assets/img/logo/tengo-todo-market-logo.png'
  ];

  slideConfig2 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 5000,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1
        }
      }
    ]
  };


  trackByFn(index: number, item: any): number {
    return index;
  }
}
