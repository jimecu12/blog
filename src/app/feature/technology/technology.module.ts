import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './components/technology/technology.component';

const technologyRoutes = [
  {path: '', component: TechnologyComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(technologyRoutes)
  ],
  declarations: [TechnologyComponent]
})
export class TechnologyModule { }
