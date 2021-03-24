import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ProfesorsComponent } from './profesors/profesors.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'profesors', component: ProfesorsComponent },
  { path: '**', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
