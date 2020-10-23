import {Component} from '@angular/core';
@Component({
	selector:'videojuego',
	templateUrl:'./videojuego.Component.html'
})
export class VideojuegoComponent {
	public titulo:string;
	public listado:string;
constructor(){
	this.titulo="Componente de video juegos";
	this.listado="listado de los juegos mas populares";
	console.log("se ha cargado el componente:videojuego: videojuego.Component.ts");
}
}
