import { FileDB } from "./FileDB";

export class Etudiant {
    idEtudiant : number;
    nomEt : String;
    prenomEt : String;
    cin : number ;
    ecole : String;
    dateNaissance: Date;
    //image: FileDB;
    image: {
        data: Int8Array; // ou Int8Array selon le type que vous préférez
        type: string; 
    };
    }

