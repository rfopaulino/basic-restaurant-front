import { Component, OnInit } from "@angular/core"
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { AlertService } from "../alert.service";

@Component({
  selector: 'cedro-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.css']
})
export class AlertComponent implements OnInit {

  openAlertSuccessIn$: Observable<boolean>;
  openAlertDangerIn$: Observable<boolean>;
  openAlertWarningIn$: Observable<boolean>;
  openAlertWarningGridIn$: Observable<boolean>;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.openAlertSuccessIn$ = this.alertService.openAlertSuccessIn;
    this.openAlertDangerIn$ = this.alertService.openAlertDangerIn;
    this.openAlertWarningIn$ = this.alertService.openAlertWarningIn;
    this.openAlertWarningGridIn$ = this.alertService.openAlertWarningGridIn;
  }

}
