import { Title } from '@angular/platform-browser';

export interface Horario {
    id?: number,
    Dia?: string,
    EspecialistaId?: number,
    HoraId?: number,
    especialista:{
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
    }
    hora:{
        id?: number,
        Horainicio?: string,
        Horafin?: string
    }
};
