import { Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { StatusComponent } from './status/status.component';

export const routes: Routes = [

    { path: 'contatos',component:ContatosComponent},
    { path: 'status',component:StatusComponent}



];
