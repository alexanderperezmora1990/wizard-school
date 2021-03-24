import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TablesComponent } from './tables/tables.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    TablesComponent,
    ModalFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    ModalModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    DpDatePickerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavBarComponent,
    TablesComponent,
    ModalFormComponent
  ]
})
export class SharedModule { }
