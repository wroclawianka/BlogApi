import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlaygroundService {

  private playgroundModeSource = new BehaviorSubject<boolean>(false);
  public _playgroundMode : Observable<boolean> = this.playgroundModeSource.asObservable();

  constructor() {};

  set isPlaygroundOn(playgroundMode : boolean){
    this.playgroundModeSource.next(playgroundMode);
  }

  playgroundOn() {
    this.isPlaygroundOn = true;
  }

  playgroundOff() {
    this.isPlaygroundOn = false;
  }
}
