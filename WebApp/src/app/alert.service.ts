import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class AlertService {

  private alertSuccessIn = new BehaviorSubject<boolean>(false);
  private alertDangerIn = new BehaviorSubject<boolean>(false);
  private alertWarningIn = new BehaviorSubject<boolean>(false);
  private alertWarninGridgIn = new BehaviorSubject<boolean>(false);

  get openAlertSuccessIn() {
    return this.alertSuccessIn.asObservable();
  }

  get openAlertDangerIn() {
    return this.alertDangerIn.asObservable();
  }

  get openAlertWarningIn() {
    return this.alertWarningIn.asObservable();
  }

  get openAlertWarningGridIn() {
    return this.alertWarninGridgIn.asObservable();
  }

  constructor() { }

  success() {
    this.alertSuccessIn.next(true);
    setTimeout(() => {
      this.alertSuccessIn.next(false);
    }, 3500);
  }

  danger() {
    this.alertDangerIn.next(true);
    setTimeout(() => {
      this.alertDangerIn.next(false);
    }, 5000);
  }

  warning() {
    this.alertWarningIn.next(true);
    setTimeout(() => {
      this.alertWarningIn.next(false);
    }, 5000);
  }

  warningGrid() {
    this.alertWarninGridgIn.next(true);
    setTimeout(() => {
      this.alertWarninGridgIn.next(false);
    }, 3000);
  }
}
