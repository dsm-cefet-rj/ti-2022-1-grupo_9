import { Quarto } from "../../domain/entities/quarto";
import { QuartoNormal } from "../../domain/entities/quarto-normal";
import { QuartoSuite } from "../../domain/entities/quarto-suite";
import { ETipoQuarto } from "../../domain/enums/tipo-quarto.enum";

export abstract class QuartoFactoryMethod{

    public static Factory(quarto: Quarto){
        if(quarto.tipo == ETipoQuarto.NORMAL){
            return new QuartoNormal();
        }
        if(quarto.tipo == ETipoQuarto.SUITE){
            return new QuartoSuite();
        }
    }
}