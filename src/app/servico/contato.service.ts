import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../modelo/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  selecionar(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url);
  }

  cadastrar(obj: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, obj);
  }

  editar(obj: Contato): Observable<Contato> {
    return this.http.put<Contato>(this.url, obj);
  }

  remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url+'/'+codigo);
  }

}