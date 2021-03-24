import { Component, OnInit } from '@angular/core';
import { WizardModel } from 'src/app/models/wizard';
import {houses} from '../../const/houses';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  selectHouse: string;
  houses: string[] = [];
  charactersList: WizardModel[] = [];
  loading = true;

  constructor(private howartsService: HogwartsService) {
    this.selectHouse = 'gryffindor';
    this.houses = houses;
  }

  ngOnInit(): void {

    this.getCharacterScreen();

  }

  houseChange(house: string): void {
    this.selectHouse = house;
    this.getCharacterScreen();
  }

  getCharacterScreen(): void{
    this.loading = true;
    this.howartsService.getCharacters(this.selectHouse).subscribe((data: WizardModel[]) => {
      this.charactersList = data;
      this.loading = false;
    });
  }

}
