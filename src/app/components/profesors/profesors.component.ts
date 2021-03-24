import { Component, OnInit } from '@angular/core';
import { WizardModel } from 'src/app/models/wizard';
import { HogwartsService } from 'src/app/services/hogwarts.service';

@Component({
  selector: 'app-profesors',
  templateUrl: './profesors.component.html',
  styleUrls: ['./profesors.component.css']
})
export class ProfesorsComponent implements OnInit {

  loading = true;
  charactersList: WizardModel[] = [];

  constructor(private howartsService: HogwartsService) { }

  ngOnInit(): void {
    this.getCharacterScreen();
  }

  getCharacterScreen(): void{
    this.loading = true;
    this.howartsService.getProfesors().subscribe((data: WizardModel[]) => {
      this.charactersList = data;
      this.loading = false;
    });
  }

}
