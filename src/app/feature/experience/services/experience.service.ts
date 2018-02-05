import { environment } from './../../../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MasterService } from 'app/core/master.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExperienceService {

  constructor(private http: Http, private masterService: MasterService) { }

  getExperience() {
    const observable = this.masterService.get(environment.api.experience)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    
      return observable;
  }

}
