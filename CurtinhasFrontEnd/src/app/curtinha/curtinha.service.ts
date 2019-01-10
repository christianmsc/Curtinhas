import { Curtinha } from './curtinha.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CurtinhaService {

    curtinhas: Curtinha[] = [];

    getCurtinhas(): Curtinha[] {
        return this.curtinhas;
    }

    addCurtinha(titulo: string, resumo: string, link: string) {
        this.curtinhas.push(new Curtinha(titulo, resumo, link));
    }
}
