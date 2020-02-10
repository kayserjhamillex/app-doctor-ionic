import { Title } from '@angular/platform-browser';

export interface Paciente {
    id?: number,
    Fullname?: string,
    Fechana?: Date,
    Genero?: string,
    Tipodocumento?: string,
    Numerodocumento?: string,
    Email?: string,
    Password?: string,
    Imagenpaciente?: string,
    Google?:string
};