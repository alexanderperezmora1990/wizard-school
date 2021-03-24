import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ProfesorsComponent } from './components/profesors/profesors.component';
import { StudentsComponent } from './components/students/students.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./components/components.module`).then(
      module => module.ComponentsModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
