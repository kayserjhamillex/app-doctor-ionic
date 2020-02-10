import { Title } from '@angular/platform-browser';

export interface Especialista {
    id?: number,
    EspecialidadId?: number,
    DoctorId?: number,
    especialidad:{
        id?:number,
        Name?:string,
        Precio?:number,
        Atencion?:string
    },
    doctor:{
        id?:number,
        Fullname?:string,
        Email?:string
    }
};
