import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { alumnoData } from './alumnoData';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class alumnosComponent {

  @Input() curso: string= '';

  @Input() academico: string= '';

  @Output() cambio: EventEmitter<string> = new EventEmitter<string>();

  parametros: string = '';

  public alumnos: Array<alumnoData>; //Puede ser que sea en plural
  public alumno: alumnoData;
  public nuevoalumno: alumnoData = new alumnoData("", "", 0);



  constructor(private _router: Router, private _route: ActivatedRoute) { 
    this.alumnos.push(this.nuevoAlumnos);
    this.nuevoAlumno = new alumnoData("", "", 0);
    
  }

  
  borrarAlumno(nombre.string) {
    this.alumnos = this.alumnos.filter(item => item.nombre !== nombre);
  }


  ngOnInit(): void {
   this._route.params.subscribe(params =>{
    console.log(params['id']);
    this.parametros = params['id'];
   })
    console.log(this.curso)
  }


cambiarRuta() {
  this._router.navigate(['/cursos'])
}


avisar() {
  this.cambio.emit('Cambio de valor');
}

}