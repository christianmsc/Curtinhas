import { Curtinha } from '../models/curtinha';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CurtinhaService {

    private curtinhasUrl = environment.apiUrl + 'Curtinhas';

    curtinhas: Curtinha[] = [];

    constructor(private http: HttpClient) {
    }

    public getCurtinhas(): Curtinha[] {
        return this.curtinhas;
    }

    setCurtinhas(curtinhas: Curtinha[]) {
        this.curtinhas = curtinhas;
    }

    carregaCurtinhas(): Observable<Array<Curtinha>> {
        return this.http.get<Array<Curtinha>>(`${this.curtinhasUrl}/ListaTodasCurtinhas`).pipe();
    }

    addCurtinha(titulo: string, resumo: string, link: string) {
        if (typeof this.curtinhas === 'undefined') {
            this.curtinhas = [];
        }
        this.curtinhas.push(new Curtinha(titulo, resumo, link));
        console.log(this.curtinhas);
    }
}
