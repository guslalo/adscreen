import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  public object: BehaviorSubject<any> = new BehaviorSubject(null);

  getObjectObs(): Observable<any> {
    return this.object.asObservable();
  }

  setObjectObs(object: any) {
    this.object.next(object);
  }

  constructor() { }


}
