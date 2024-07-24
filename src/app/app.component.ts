import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponentComponent } from './nav/nav-component/nav-component.component';
import { FooterComponentComponent } from './footer/footer-component/footer-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponentComponent,FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ladingpage-the-sport';
}
