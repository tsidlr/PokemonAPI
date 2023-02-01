import { Injectable, Input } from '@angular/core';
import { Pokemon } from './pokemonAPiFormat'

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

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
/* Hier die Angular Art für einen Reqeust mit HTTPClient
  //HTTPClient muss impotiert werden in der Datei + HttpClientModule in die app.modules.ts (import { HttpClientModule } from '@angular/common/http';)
  import { HttpClient } from '@angular/common/http';

  PokemonData: Pokemon = {} as Pokemon

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData(25);
  }
  
  // URL der API wird returned
  getURL (id: number) {
    return `${BASE_URL}/${id}`
  }

  // HTTP get request auf die URL + subscribe 
  getData (id: number) {
     const data = this.http.get(this.getURL(id));
     data.subscribe((result: any) => this.PokemonData = result)
  
  */


}
