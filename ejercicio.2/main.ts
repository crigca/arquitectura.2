import { IReproductorMusica } from "./IReproductorMusica";
import { Vinilo } from "./Vinilo";
import { AdaptadorVinilo } from "./AdaptadorVinilo";

//Main
const miVinilo = new Vinilo();

const reproductor: IReproductorMusica = new AdaptadorVinilo(miVinilo);

reproductor.reproducir();
reproductor.detener();

