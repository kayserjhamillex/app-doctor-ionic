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
  hoy: Date = new Date();
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
  };
  citas:any;
  citasdoctor:any;
  citasfiltradas:any;
  cita: any = this.cita1;
  citaaa: any = this.cita1;
  codigodoctor;
  citafiltrada1:any;
  lafechasa;
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
  async suspacienes() {
    const toast = await this.toastcontroller.create({
      message: 'sus pacientes son',
      duration: 1500,
      animated: true,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  async nohaycitas() {
    const toast = await this.toastcontroller.create({
      message: 'no hay citas para hoy',
      duration: 1500,
      animated: true,
      color: 'warning',
      position: 'top'
    });
    toast.present();
  }
  ngOnInit() {
    const dd = this.hoy.getDate();
    const mm = this.hoy.getMonth();
    const yyyy = this.hoy.getFullYear();
    // console.log(dd);
    // console.log(mm);
    // console.log(yyyy);
    const fechahoy = new Date(yyyy,mm,dd);
    // let datehoy = fechahoy.getTimezoneOffset();
    // console.log(fechahoy);
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctorService.getDoctor(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.doctor = res;
            this.codigodoctor = this.doctor.id;
            if (this.codigodoctor) {
              this.citaService.getCitaestado().subscribe(
                res => {
                  console.log(res);
                  this.citas=res;
                  const filtro1 = this.citas;
                  const fitradofecha = [];
                  //filtrar por el doctor
                  for (const parametro of filtro1) {
                    const wasa = parametro.horario.especialista.DoctorId;
                    if (wasa===this.codigodoctor) {
                      console.log("reservas pal doctor");
                      fitradofecha.push(parametro);
                      this.citasdoctor=fitradofecha;
                    }
                  }
                  console.log(this.citasdoctor);
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
