import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,SlickCarouselModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thesport';

  comercios = [
    { nombre: 'Papa Johns', img: './assets/img/content/picture.jpg', descripcion: 'Mejores ingredientes, mejor pizza.', link: 'https://www.instagram.com/papajohns_sv/' },
    { nombre: 'Mak Meats', img: './assets/img/content/picture-01.jpg', descripcion: '🔥Tenemos las carnes, mariscos, papas y más que necesitas en tu negocio.', link: '#' },
    { nombre: 'Banco Atlantida', img: './assets/img/content/picture-02.jpg', descripcion: 'Una institución centenaria con trayectoria regional.', link: '#' },
    { nombre: 'El Sin Rival', img: './assets/img/content/picture-03.jpg', descripcion: '¡Sorbetes NATURALES! 🍨👌😉', link: '#' },
    { nombre: 'Farmacias Camila', img: './assets/img/content/picture 05.jpg', descripcion: 'Nuestro compromiso es TU SALUD💚', link: '#' },
    { nombre: 'Bodeganga Hilasal', img: './assets/img/content/picture 06.jpg', descripcion: 'Toallas Hilasal con precios especiales al mayoreo y al detalle.', link: '#' },
    { nombre: 'Soya Nutribar', img: './assets/img/content/picture 07.jpg', descripcion: 'Comida saludable, naturalmente deliciosa.', link: '#' },
    { nombre: 'Cabal Internet', img: './assets/img/content/picture 08.jpg', descripcion: 'Proveedor de servicios de internet', link: '#' },
    { nombre: 'MyCeviche', img: './assets/img/content/picture 09.jpg', descripcion: 'En My Ceviche te preparamos nuestro Ceviche Original perfecto hecho con la salsa especial del chef🤤', link: '#' },
    { nombre: 'TenGo Market', img: './assets/img/content/picture 10.jpg', descripcion: 'Hacemos que cada día sea más fácil y mejor!', link: '#' },
    { nombre: 'Cheers', img: './assets/img/content/picture 11.jpg', descripcion: 'Boutique de Licores, Vinos & Deli', link: '#' },
    { nombre: 'Porta Real Estate', img: './assets/img/content/picture 12.jpg', descripcion: 'Lo mejor del Real Estate en El Salvador ya esta en Surf City 🏄‍♂️.', link: '#' },
    { nombre: 'La Neveria', img: './assets/img/content/picture 13.jpg', descripcion: '"Siempre Algo Nuevo" Helados, paletas, pasteles de helado.', link: '#' },
    { nombre: 'Movistar', img: './assets/img/content/picture 14.jpg', descripcion: 'Telefonía móvil y fija, Internet, celulares, promociones y más.', link: '#' },
    { nombre: 'Castella Sagarra', img: './assets/img/content/picture 15.jpg', descripcion: 'Siempre en ruta! 🐷🚗 ES 📍 Los mejores chicharrones de C.A.', link: '#' },
    { nombre: 'Seaside Sourdough', img: './assets/img/content/picture 16.jpg', descripcion: 'Imperdiet purus pellentesque sit mi nibh sit integer faucibus.', link: '#' }
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
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
    /*'./assets/img/logo/',*/
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k=',
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k=',
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k=',
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k=',
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k=',
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k=',
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k=',
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k=',
    'https://media.istockphoto.com/id/1337232523/es/foto/vista-de-ángulo-alto-de-un-lago-y-un-bosque.jpg?s=2048x2048&w=is&k=20&c=ohPNTFlDn-ARAawgnbCzIOzWMadL82fUe6qc92Los_k='
    
  ];

  slideConfig2 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 4000,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, 
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  trackByFn(index: number, item: any): number {
    return index;
  }
}
