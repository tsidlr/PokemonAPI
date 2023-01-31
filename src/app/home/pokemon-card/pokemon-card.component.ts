import { Component } from '@angular/core';
import { PokemonAPIService } from './pokemon-api.service';
import { Pokemons } from './pokemonAPiFormat'

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  PokemonData: Pokemons = {} as Pokemons;
  bild: string = ""
  getPokemonData: any;
  setPokemonData: any;
  Number: any;
  checkNumber: any;


  ngOnInit() {
    this.getPokemonData(25);
  }

  constructor(private PokemonService: PokemonAPIService) {

      this.PokemonData = PokemonService.PokemonData;
      this.bild = PokemonService.bild;
      this.getPokemonData = PokemonService.getPokemonData;
      this.setPokemonData = PokemonService.setPokemonData;
      this.Number = PokemonService.Number;
      this.checkNumber = PokemonService.checkNumber;
  }

}
