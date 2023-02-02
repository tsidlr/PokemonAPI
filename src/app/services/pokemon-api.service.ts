import { Injectable, Input } from '@angular/core';
import { Pokemon } from '../interfaces/pokemonInterface'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {


  PokemonData: Pokemon = {} as Pokemon;

  constructor(private http: HttpClient) {}

  getPokemonData (id: number) {
    let data = this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    data.subscribe((result: any) => this.PokemonData = result)
  }


// Alte Lösung fürs API fetching ohne die Vorteile von Angular vgl: pokemon-card.component.ts
  /*
  PokemonData: Pokemon = {} as Pokemon;
  bild: string = ""

  getPokemonData(id: number) {

    let link = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    fetch(link)
      .then(response => response.json())
      .then(data => { this.setPokemonData(data); })
  }

  setPokemonData(data: Pokemon) {
    this.PokemonData = data;
    //Zur Vereinfacherung
    this.PokemonData.sprites.other['official-artwork'].front_default = (this.PokemonData.sprites.other['official-artwork'].front_default)
    this.bild = (this.PokemonData.sprites.other['official-artwork'].front_default);

    this.PokemonData.id = (this.PokemonData.id);
    this.PokemonData.name = (this.PokemonData.name)
    this.PokemonData.height = (this.PokemonData.height / 10);
    this.PokemonData.weight = (this.PokemonData.weight / 10);
    this.PokemonData.base_experience = (this.PokemonData.base_experience);
    this.PokemonData.types[0].type.name = (this.PokemonData.types[0].type.name );
  }
*/
}
