import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {$('.technology-body').css('opacity', 1)}, 1);
  }

}
