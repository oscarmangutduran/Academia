import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { CursoData } from "./curso"; 

@Injectable()
export class CursoService{
    //url: string = "http://localhost:3000/curso";
    // url: string = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m%27";
    url: string = "https://www.el-tiempo.net/api/json/v1/provincias";

    constructor(private http: HttpClient){
        
    }

    getWeather(){
        return this.http.get(this.url);
    }
}