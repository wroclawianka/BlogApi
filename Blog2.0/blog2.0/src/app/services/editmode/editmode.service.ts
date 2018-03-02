import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditModeService {

  private editModeSource = new BehaviorSubject<boolean>(false);
  public _editMode : Observable<boolean> = this.editModeSource.asObservable();

  constructor() {};

  set isEditMode(editMode : boolean){
    this.editModeSource.next(editMode);
  }

  editModeOn() {
    this.isEditMode = true;
  }

  editModeOff() {
    this.isEditMode = false;
  }
}
