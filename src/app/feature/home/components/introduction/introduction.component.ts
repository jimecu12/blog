import { Introduction } from './../../models/introduction.model';
import { IntroductionService } from './../../services/introduction.service';
import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

declare var $: any;

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  
  private introduction: Introduction;

  constructor(private introductionService: IntroductionService) { }

  ngOnInit() {
    this.getIntroduction();
  }

  setOpacity() {
    $('.biography').css('opacity', 1);
    $('.image').css('opacity', 1);
  }

  getIntroduction() {
    this.introductionService.getIntroduction().subscribe(result => {
      this.introduction = result.introduction;
      setTimeout(() => {
        this.setOpacity();
      }, 1);
    });
  }
}
