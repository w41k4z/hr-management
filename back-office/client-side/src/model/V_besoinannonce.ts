export interface V_besoinannonce{
    idannonce         : number,
    id                : number,
    datebesoinservice : Date | null,
    idservice         : number,
    idregion          : number,
    idposte           : number,
    qualite           : string,
    description       : string,
    typecontrat       : string,
    volumetache       : number,
    volumehoraire     : number, 
}