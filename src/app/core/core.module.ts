import { ExperienceService } from './../feature/experience/services/experience.service';
import { IntroductionService } from './../feature/home/services/introduction.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from 'app/core/master.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MasterService, IntroductionService, ExperienceService],
  declarations: []
})
export class CoreModule { }
