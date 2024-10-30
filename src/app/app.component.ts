import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContatosComponent } from "./contatos/contatos.component";
import { PrincipalComponent } from "./principal/principal.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrincipalComponent, ContatosComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-front';
}
