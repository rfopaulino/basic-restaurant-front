import { Component, OnInit } from "@angular/core"

import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'cedro-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {

  }

}
