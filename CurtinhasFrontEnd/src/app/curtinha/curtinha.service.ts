import { Curtinha } from './curtinha.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class CurtinhaService {

    private curtinhasUrl = environment.apiUrl + 'Curtinhas';

    curtinhas: Curtinha[] = [];

    constructor(private http: HttpClient) {
    }

    getCurtinhas(): Curtinha[] {
        return this.curtinhas;
    }

    setCurtinhas(curtinhas: Curtinha[]) {
        this.curtinhas = curtinhas;
    }

    carregaCurtinhas() {
        return this.http.get<Array<Curtinha>>(`${this.curtinhasUrl}/ListaTodasCurtinhas`).pipe(
            map((data: any[]) => {
                this.curtinhas = data;
                return true;
            })
        );
    }

    // carregaCurtinhas() {
    //     return this.http.get<Array<Curtinha>>(`${this.curtinhasUrl}/ListaTodasCurtinhas`).pipe(
    //         map((data: Curtinha[]) => {
    //             // this.curtinhas = data;
    //             return data;
    //         })
    //     );
    // }

    addCurtinha(titulo: string, resumo: string, link: string) {
        this.curtinhas.push(new Curtinha(titulo, resumo, link));
    }
}
