import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CharactersComponent } from './characters/characters.component';
import { StudentsComponent } from './students/students.component';
import { ProfesorsComponent } from './profesors/profesors.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LogosPipe } from '../pipes/logos.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ComponentsRoutingModule } from './components-routing.module';


@NgModule({
  declarations: [
    CharactersComponent,
    StudentsComponent,
    ProfesorsComponent,
    LogosPipe,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  exports: [
    CharactersComponent,
    StudentsComponent,
    ProfesorsComponent
  ]
})
export class ComponentsModule { }
