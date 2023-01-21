import { Injectable, Input } from '@angular/core';
import { Pokemons } from './pokemonAPiFormat'

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  PokemonData: Pokemons = {} as Pokemons;
  bild: string = ""

  getPokemonData(id: number) {

    let link = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    fetch(link)
      .then(response => response.json())
      .then(data => { this.setPokemonData(data); })

  }

  setPokemonData(data: any) {
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


  Number(convert: string) {
    return Number(convert)
  }

  checkNumber(check: any) {

    if(!isNaN(check)) {
      return false;
    } else {
      return true;
    }
  }


}
