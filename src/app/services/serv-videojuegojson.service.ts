import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videojuego } from '../models/Videojuego';

@Injectable({
  providedIn: 'root'
})
export class ServVideojuegojsonService {
  // URL del archivo JSON
  private jsonUrl = "../json/videogame.json";
  constructor(private http:HttpClient) {

   }

   getgames():Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.jsonUrl);
   }
}
