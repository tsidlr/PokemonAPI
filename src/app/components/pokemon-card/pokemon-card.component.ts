import { Component } from '@angular/core';
import { PokemonAPIService } from 'src/app/services/pokemon-api.service';
import { Pokemon } from 'src/app/interfaces/pokemonInterface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  PokemonData: Pokemon = {} as Pokemon;
  getPokemonData: any;

  constructor(private http: HttpClient, PokemonData: PokemonAPIService) {
    this.PokemonData = PokemonData.PokemonData;
    this.getPokemonData = PokemonData.getPokemonData;
  }

  ngOnInit () {
    this.getPokemonData(25)
  }




  

// Alte Lösung die nicht die stärken von Angular nutzt. vgl: PokemonAPIService
  /*
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
  }*/

}
