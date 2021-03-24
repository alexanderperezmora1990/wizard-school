import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { WizardModel } from 'src/app/models/wizard';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})


export class TablesComponent implements OnInit, AfterViewInit {

  @Input() charactersList: WizardModel[] = [];
  copyCharactersList: WizardModel[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
    this.copyCharactersList = this.charactersList;
    this.initDataSource(this.copyCharactersList);
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  initDataSource(list: WizardModel[]): void {
    this.dataSource = new MatTableDataSource<WizardModel>(list);
  }

  search(search: string): void {
    if (search.length === 0) {
      this.copyCharactersList = this.charactersList;
    } else {
      this.copyCharactersList = this.copyCharactersList.filter( (wizard: WizardModel) =>{
        if (
            (wizard.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
            || (wizard.patronus.toLowerCase().indexOf(search.toLowerCase()) > -1)
            || (wizard.age.toLowerCase().indexOf(search.toLowerCase()) > -1)
          ) {
          return wizard;
        }
      }  );
    }

    this.initDataSource(this.copyCharactersList);
  }

  saveStudent(studentList: WizardModel[]): void {
    this.charactersList = studentList;
    this.copyCharactersList = this.charactersList;
    this.initDataSource(this.copyCharactersList);
  }

}
