import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoData } from './alumnoData';
import { AlumnoService } from "./alumno.service";


@Component({
  selector: 'app-alumno', //Eso se pone como etiqueta html para mostrarlo en el html
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [AlumnoService]
})
export class AlumnoComponent {

  //Estos dos Input no se que hacen
  @Input() curso: string = "";

  @Input() academico: string = "";

  @Output() cambio: EventEmitter<string> = new EventEmitter<string>();

  public alumno: AlumnoData;
  //public alumnosArray: Array<AlumnoData>;
  //Este es el alumno que se usara en el formulario
  public nuevoAlumno: AlumnoData = new AlumnoData("", "", 0);

  //Aqui declaro el AlumnoService para poder usarlo
  constructor(private _router: Router, private _route: ActivatedRoute, public _alumnoService: AlumnoService) {
    
    this.alumno = new AlumnoData("", "", 0);
    //this.alumnosArray = new Array<AlumnoData>;
    // this.alumnosArray = _alumnoService.alumnosArray;
  }



  //Metodos crud
  //Añadir
  addAlumno(): void {
    // this.alumnosArray.push(this.nuevoAlumno);
    // this.nuevoAlumno = new AlumnoData("", "", 0);
    //nuevoAlumno se genera al darle al boton en el html
    this._alumnoService.addAlumno(this.nuevoAlumno);
    
  }
  //Modificar

  //Eliminar
  deleteAlumno(nombre: string) {
    // this.alumnosArray = this.alumnosArray.filter(item => item.nombre !== nombre);
    this._alumnoService.deleteAlumno(nombre);
  }

  avisar() {
    this.cambio.emit("Cambio de valor");
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params["id"])
    })
    console.log(this.curso);
  }

  cambiarRuta() {
    this._router.navigate(["/curso"]);
  }
}
