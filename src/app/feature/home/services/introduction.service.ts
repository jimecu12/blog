import { MasterService } from 'app/core/master.service';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from 'environments/environment';

@Injectable()
export class IntroductionService {

  constructor(private masterService: MasterService) { }

  getIntroduction() {
    const observable = this.masterService.get(environment.api.introduction)
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    return observable;
  }
}
