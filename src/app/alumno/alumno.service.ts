import { Injectable } from '@angular/core';
import { AlumnoData } from './alumnoData';

@Injectable()
export class AlumnoService {
    public alumnosArray: Array<AlumnoData> = new Array<AlumnoData>;

    //Añadir
    addAlumno(nuevoAlumno: AlumnoData): void {
        this.alumnosArray.push(nuevoAlumno);
    }

    //Borrar
    deleteAlumno(nombre: string) {
        this.alumnosArray = this.alumnosArray.filter(item => item.nombre !== nombre);
    }


}