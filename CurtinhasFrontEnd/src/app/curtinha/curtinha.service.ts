import { Curtinha } from '../models/curtinha';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable()
export class CurtinhaService {

    private curtinhasUrl = environment.apiUrl + 'Curtinhas';

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    curtinhas: Curtinha[] = [];
    carregou: boolean;

    constructor(private http: HttpClient) {
    }

    public getCurtinhas(): Curtinha[] {
        return this.curtinhas;
    }

    setCurtinhas(curtinhas: Curtinha[]) {
        this.curtinhas = curtinhas;
    }

    addCurtinha(curtinha: Curtinha): Observable<Curtinha> {
        this.carregou = false;
        return this.http.post<Curtinha>(`${this.curtinhasUrl}/AdicionarCurtinha`, curtinha, this.httpOptions).pipe();
    }

    carregaCurtinhas(): Observable<Array<Curtinha>> {
        this.curtinhas = [];
        return this.http.get<Array<Curtinha>>(`${this.curtinhasUrl}/ListaTodasCurtinhas`).pipe();
    }

    carregaUmaCurtinha(id: number): Observable<Curtinha> {
        return this.http.get<Curtinha>(`${this.curtinhasUrl}/ListaUmaCurtinha?id=${id}`).pipe();
    }

    editarCurtinha(curtinha: Curtinha): Observable<Curtinha> {
        this.carregou = false;
        return this.http.post<Curtinha>(`${this.curtinhasUrl}/Editar?curtinha=${curtinha}`, curtinha, this.httpOptions);
    }

    deletarCurtinha(curtinha: Curtinha) {
        this.carregou = false;
        return this.http.post<Curtinha>(`${this.curtinhasUrl}/Excluir?id=${curtinha.id}`, curtinha, this.httpOptions).pipe();
    }
}
