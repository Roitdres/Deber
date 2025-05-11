import { Component } from '@angular/core';
import {  UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { ServVideojuegojsonService } from '../../services/serv-videojuegojson.service';
import { Videojuego } from '../../models/Videojuego';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-listavideojuego',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, MatCardModule, MatIconModule],
  templateUrl: './listavideojuego.component.html',
  styleUrl: './listavideojuego.component.css'
})
export class ListavideojuegoComponent {
  title: string = 'Lista de Videojuegos';
  games: Videojuego[] = [];
   constructor(private servicio:ServVideojuegojsonService) {}

    ngOnInit():void {
      this.getJuegos();
    }

    getJuegos():void {
        this.servicio.getgames().subscribe((data: Videojuego[]) => {
          this.games = data;
        });
      }
   jugar(game: Videojuego) {
    alert("Descargando..." +game.title+"Genero: "+game.genre+" Precio: "+game.price+" Fecha de lanzamiento: "+game.releaseDate);
   }
  /*9) activar(img:HTMLImageElement){
    img.classList.add("img-active");
  }
  desactivar(img:HTMLImageElement){
 img.classList.remove("img-active");
  }*/
 hoverIn(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  card.style.transform = 'translateY(-5px)';
  card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
}

hoverOut(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  card.style.transform = '';
  card.style.boxShadow = '';
}

}
