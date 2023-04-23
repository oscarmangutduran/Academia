import { Component } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  curso: string = "Angular";


  constructor(private _cursoService: CursoService){

  }


  avisado(mensaje: string){
    window.alert("Se ha emitido el evento: " + mensaje)
  }

  ngOnInit(){
    //Hace la llamada pero devuelve object Object
    // this._cursoService.getWeather().subscribe(
    //   data=> window.alert(data)
    // )

  }
}
