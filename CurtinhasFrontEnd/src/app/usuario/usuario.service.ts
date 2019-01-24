import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private curtinhasUrl = environment.apiUrl + 'Usuario';
  cadastrou: boolean;
  naoCadastrou: boolean;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  logarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.curtinhasUrl}/LogarUsuario?usuario=${usuario}`, usuario, this.httpOptions).pipe();
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.curtinhasUrl}/AdicionarUsuario`, usuario, this.httpOptions).pipe();
  }

  carregaUsuarios(): Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>(`${this.curtinhasUrl}/BuscarUsuarios`).pipe();
  }

  carregaUsuario(id: number): Observable<Usuario> {
      return this.http.get<Usuario>(`${this.curtinhasUrl}/BuscarUsuario?id=${id}`).pipe();
  }

  editarUsuario(usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(`${this.curtinhasUrl}/EditarUsuario?usuario=${usuario}`, usuario, this.httpOptions);
  }

  deletarUsuario(usuario: Usuario) {
      return this.http.post<Usuario>(`${this.curtinhasUrl}/ExcluirUsuario?id=${usuario.id}`, usuario, this.httpOptions).pipe();
  }

}
