import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  { path: 'template', component: TemplateFormComponent },
  { path: 'reactivo', component: ReactiveFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reactivo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
