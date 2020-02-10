import { Title } from '@angular/platform-browser';

export interface Cita {
  id?: number,
  Fechacita?: Date,
  Pago?: boolean,
  AdminId?: number,
  PacienteId?: number,
  HorarioId?: number,
  Estado?:string,
  admin:{
    id?: number,
    Fullname?: string,
    Correo?: string
  },
  paciente:{
    id?: number,
    Fullname?: string,
    Email?: string,
  },
  horario:{
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
    },
    hora:{
        id?: number,
        Horainicio?: string,
        Horafin?: string
    }
  }
}
