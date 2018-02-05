import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'app/feature/experience/services/experience.service';
import { Experience } from 'app/feature/experience/models/experience.model';

declare var $: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Array<Experience>;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getExperiences();
  }
  
  getExperiences() {
    this.experienceService.getExperience().subscribe(res => {
      this.experiences = res.experiences;
      $('.experience-body').css('opacity', 1);
    });
  }

}
