import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ContatosComponent } from "./contatos/contatos.component";
import { PrincipalComponent } from "./principal/principal.component";
import { MenuComponent } from "./menu/menu.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterModule, PrincipalComponent, ContatosComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-front';
}
