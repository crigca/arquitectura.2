import { IReproductorMusica } from './IReproductorMusica';
import { Vinilo } from './Vinilo';

//Clase adaptador Vinilo
export class AdaptadorVinilo implements IReproductorMusica {
    private vinilo: Vinilo;

    constructor(vinilo:Vinilo) {
        this.vinilo = vinilo;
    }

    reproducir(): void {
        this.vinilo.colocarAguja();
    }

    detener(): void {
        this.vinilo.levantarAguja();
    }
}