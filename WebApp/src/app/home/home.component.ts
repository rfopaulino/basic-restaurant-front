import { Component, OnInit } from "@angular/core"
import { AppService } from "../app.service";

@Component({
  selector: 'cedro-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
