import { Component, OnInit } from "@angular/core"

import { AppService } from "../app.service";

@Component({
  selector: 'cedro-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

}
