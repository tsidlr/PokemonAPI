import { Component } from '@angular/core';
import { PokemonAPIService } from 'src/app/services/pokemon-api.service';
import { Pokemon } from 'src/app/services/pokemonAPiFormat';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  PokemonData: Pokemon = {} as Pokemon;
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
