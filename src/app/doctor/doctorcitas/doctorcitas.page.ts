import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';
import { Cita } from 'src/app/models/Cita';
import { Citaa } from 'src/app/models/Citaa';
import { Especialista } from 'src/app/models/Especialista';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-doctorcitas',
  templateUrl: './doctorcitas.page.html',
  styleUrls: ['./doctorcitas.page.scss'],
})
export class DoctorcitasPage implements OnInit {
  fechahoy: Date = new Date();
  especialista: Especialista = {
    id: 0,
    EspecialidadId: 0,
    DoctorId: 0,
    especialidad:{
        id:0,
        Name:'',
        Precio:0,
        Atencion:''
    },
    doctor:{
        id:0,
        Fullname:'',
        Email:''
    }
  }
  doctor: Doctor = {
    id: 0,
    Fullname: '',
    Fechana: new Date(),
    Genero: '',
    Celular: '',
    Email: '',
    Imagendoctor: '',
    Password: '',
    Facebook: '',
    Instagram: '',
    Twitter: ''
  };
  citaa: Citaa = {
    id: 0,
    Fechacita: new Date(),
    Pago: false,
    AdminId: 0,
    PacienteId: 0,
    HorarioId: 0,
    Estado:'reservado',
  };
  asistio = 'concluido';
  noasistio = 'no vino';
  cita1: Cita = {
    id: 0,
    Fechacita: new Date(),
    Pago: false,
    AdminId: 0,
    PacienteId: 0,
    HorarioId: 0,
    Estado:'reservado',
    admin:{
      id: 0,
      Fullname: '',
      Correo: ''
    },
    paciente:{
        id: 0,
        Fullname: '',
        Email: '',
    },
    horario:{
      id: 0,
      Dia: '',
      EspecialistaId: 0,
      HoraId: 0,
      especialista:{
          id: 0,
          EspecialidadId: 0,
          DoctorId: 0,
          especialidad:{
              id:0,
              Name:'',
              Precio:0,
              Atencion:''
          },
          doctor:{
              id:0,
              Fullname:'',
              Email:''
          }
      },
      hora:{
          id: 0,
          Horainicio: '',
          Horafin: ''
      }
    }
  }
  cita: any = this.cita1;
  citaaa: any = this.cita1;
  codigodoctor;
  constructor(
    private doctorService: DoctorService,
    private citaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private toastcontroller: ToastController,
    private router: Router) { }
  async atendido() {
    const toast = await this.toastcontroller.create({
      message: 'paciente atendido',
      duration: 1500,
      animated: true,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }
    
  async nollego() {
    const toast = await this.toastcontroller.create({
      message: 'el paciente no llego',
      duration: 1500,
      animated: true,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }
  ngOnInit() {
    const dd = this.fechahoy.getDate();
    const mm = this.fechahoy.getMonth() + 1;
    const yyyy = this.fechahoy.getFullYear();
    console.log(dd);
    console.log(mm);
    console.log(yyyy);
    const lafecha = new Date(yyyy,mm,dd);
    console.log(lafecha);
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctorService.getDoctor(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.doctor = res;
            this.codigodoctor = this.doctor.id;
            if (this.codigodoctor) {
              this.citaService.getCitaporfecha(lafecha).subscribe(
                res => {
                  console.log(res);
                  this.cita=res;

                }
              )
            }
          },
          err => console.log(err)
        );
    }
  }
  async saliendo() {
    const toast = await this.toastcontroller.create({
      message: 'saliendo de mi lista de citas de hoy',
      duration: 1500,
      animated: true,
      color: 'warning',
      position: 'top'
    });
    toast.present();
  };
  exit() {
    const params = this.activatedRoute.snapshot.params;
    this.codigodoctor = params.id;
    console.log(this.codigodoctor);
    this.router.navigate(
      [
        '/doctor',
        'home',
        this.codigodoctor
      ]
      );
    this.saliendo();
  }

  concluido(wasa) {
    if (wasa) {
      this.citaService.getCita(wasa).subscribe(
        res => {
          console.log(res);
          this.citaa = res;
          this.asistio=this.citaa.Estado;
          this.citaService.updateCita(wasa, this.citaa).subscribe(
            res => {
              console.log(res);
              this.citaaa=res;
            },
            err => console.error(err)
          );
        }
      );
    }
  }
  falto(wasa) {
    if (wasa) {
      this.citaService.getCita(wasa).subscribe(
        res => {
          console.log(res);
          this.citaa = res;
          this.noasistio=this.citaa.Estado;
          this.citaService.updateCita(wasa, this.citaa).subscribe(
            res => {
              console.log(res);
              this.citaaa=res;
            },
            err => console.error(err)
          );
        }
      );
    }
  }
}
