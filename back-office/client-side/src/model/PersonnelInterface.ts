import Poste from "./PosteInterface";

export interface Personnel{
    id      : number;                
    idposte : number;
    poste   : Poste;
    idservice : number;
    nom     : string;  
    prenom  : string;  
    dtn : Date;
    dtembauche : Date;
    idfonction : number;
}