import { Cita } from 'src/app/models/Cita';
import { Citaa } from 'src/app/models/Citaa';
import { Doctor } from 'src/app/models/Doctor';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialista } from 'src/app/models/Especialista';
import { CitaService } from 'src/app/services/cita.service';
import { DoctorService } from 'src/app/services/doctor.service';

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
    especialidad: {
        id: 0,
        Name: '',
        Precio: 0,
        Atencion: ''
    },
    doctor: {
        id: 0,
        Fullname: '',
        Email: ''
    }
  };
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
    Estado: 'reservado',
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
    Estado: 'reservado',
    admin: {
      id: 0,
      Fullname: '',
      Correo: ''
    },
    paciente: {
        id: 0,
        Fullname: '',
        Email: '',
    },
    horario: {
      id: 0,
      Dia: '',
      EspecialistaId: 0,
      HoraId: 0,
      especialista: {
          id: 0,
          EspecialidadId: 0,
          DoctorId: 0,
          especialidad: {
              id: 0,
              Name: '',
              Precio: 0,
              Atencion: ''
          },
          doctor: {
              id: 0,
              Fullname: '',
              Email: ''
          }
      },
      hora: {
          id: 0,
          Horainicio: '',
          Horafin: ''
      }
    }
  };
  citas: any;
  citasdoctor: any;
  citasfiltradas: any;
  cita: any = this.cita1;
  citaaa: any = this.cita1;
  codigodoctor;
  citafiltrada1: any;
  lafechasa;
  lafechasa1;
  constructor(
    private doctorService: DoctorService,
    private citaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private toastcontroller: ToastController,
    private router: Router) { }

  fechadeldia() {
  const d = this.hoy.getDate();
  const m = this.hoy.getMonth() + 1;
  const yyyy = this.hoy.getFullYear();
  let dd: any;
  let mm: any;
  let pinshifecha: string;
  if (d < 10) {
    dd = '0' + d;
  } else {
    dd = d;
  }
  if (m < 10) {
    mm = '0' + m;
  } else {
    mm = m;
  }
  const cadena = yyyy + '-' + mm + '-' + dd;
  const cadena1 = yyyy + '-' + mm + '-' + 14;
  pinshifecha = cadena.toString();
  // console.log(cadena);
  console.log(cadena1);
  console.log(pinshifecha);

  // const a1 = new Date(cadena).getTime();
  const a3 = new Date(cadena1).getTime();
  const a2 = new Date(pinshifecha).getTime();

  // console.log(a1);
  console.log(a2);
  console.log(a3);
  const divisor = 1000;
  // const numero = (a1 / divisor);
  const numero1 = (a2 / divisor);
  const numero2 = (a3 / divisor);
  // console.log(numero);
  console.log(numero1);
  console.log(numero2);
  this.lafechasa = numero1;
  this.lafechasa1 = numero2;

  }
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
  async tienepacientes() {
    const toast = await this.toastcontroller.create({
      message: 'tiene pacientes para hoy',
      duration: 1500,
      animated: true,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  ngOnInit() {
    this.fechadeldia();
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
                // tslint:disable-next-line: no-shadowed-variable
                (res) => {
                  console.log(res);
                  this.citas = res;
                  const filtro1 = this.citas;
                  const fitradofecha = [];
                  // filtrar por el doctor
                  for (const parametro of filtro1) {
                    // tslint:disable-next-line: no-shadowed-variable
                    const wasa = parametro.horario.especialista.DoctorId;
                    if (wasa === this.codigodoctor) {
                      console.log('reservas pal doctor');
                      fitradofecha.push(parametro);
                      this.citasdoctor = fitradofecha;
                      }
                    }
                  console.log(this.citasdoctor);
                  const divisor = 1000;
                  const array1 = this.citasdoctor;
                  const numero = this.lafechasa;
                  const numero1 = this.lafechasa1;
                  const array2 = [];
                  for (const obj of array1) {
                    const numfecha = new Date(obj.Fechacita).getTime();
                    console.log(numfecha);
                    const numeroselect = (numfecha / divisor);
                    console.log(numeroselect);
                    console.log(numero);
                    if (numeroselect === numero) {
                      console.log('encontrando fechas iguales');
                      array2.push(obj);
                      this.citasfiltradas = array2;
                    } else {
                      console.log('no hay coincidencia joder');
                    }
                  }
                  // tslint:disable-next-line: no-conditional-assignment
                  if (array2 === []) {
                    this.nohaycitas();
                  } else {
                    this.tienepacientes();
                  }
                }
              );
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
  }
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
          this.citaa.Estado = this.asistio;
          this.citaService.updateCita(wasa, this.citaa).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              console.log(res);
              this.citaaa = res;
              this.atendido();
              this.ngOnInit();
            },
            err => console.error(err)
          );
        }
      );
    }
  }
  falto(wasaa) {
    if (wasaa) {
      this.citaService.getCita(wasaa).subscribe(
        res => {
          console.log(res);
          this.citaa = res;
          this.citaa.Estado = this.noasistio;
          this.citaService.updateCita(wasaa, this.citaa).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              console.log(res);
              this.citaaa = res;
              this.nollego();
              this.ngOnInit();
            },
            err => console.error(err)
          );
        }
      );
    }
  }
}
