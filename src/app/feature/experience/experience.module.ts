import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './components/experience/experience.component';
import { Routes, RouterModule } from '@angular/router';
import {SqueezeBoxModule} from 'squeezebox';

const experienceRoutes: Routes = [
  {
    'path': '', component: ExperienceComponent
  }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(experienceRoutes),
    SqueezeBoxModule
  ],
  declarations: [ExperienceComponent]
})
export class ExperienceModule { }
