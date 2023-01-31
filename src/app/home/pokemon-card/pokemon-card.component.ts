import { Component } from '@angular/core';
import { PokemonAPIService } from './pokemon-api.service';
import { Pokemon } from './pokemonAPiFormat'

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {


  selectedItem = {
    name: "",
    description: "",
  }

  showDetails () {
    console.log(this.selectedItem.name, this.selectedItem.description)
  }

  //______//

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
