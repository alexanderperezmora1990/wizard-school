import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardModel } from 'src/app/models/wizard';
import { HogwartsService } from 'src/app/services/hogwarts.service';
import { TablesComponent } from 'src/app/shared/tables/tables.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  loading = true;
  charactersList: WizardModel[] = [];
  @ViewChild(TablesComponent) table: TablesComponent;


  constructor(
    private howartsService: HogwartsService,
  ) { }

  ngOnInit(): void {
    this.getCharacterScreen();
  }

  getCharacterScreen(): void{
    this.loading = true;
    this.howartsService.getStudents().subscribe((data: WizardModel[]) => {
      this.charactersList = data;
      const saveStudentsList: WizardModel[] = this.howartsService.getStorage();
      this.charactersList = [...saveStudentsList, ...this.charactersList];
      this.loading = false;
    });
  }

  saveStudent(student: WizardModel): void {
    this.loading = true;
    this.charactersList = [student, ...this.charactersList];
    this.howartsService.saveStorage(student);
    this.table.saveStudent(this.charactersList);
    this.loading = false;
  }


}
