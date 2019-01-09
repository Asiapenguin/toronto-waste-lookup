import { Component, OnInit } from '@angular/core';
import { WasteLookupService } from './service/waste-lookup.service';
import { Waste } from './model/waste';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  wastes: Array<Waste>;

  constructor(private wasteLookupService: WasteLookupService) {}
  ngOnInit() {
    this.wasteLookupService.getWaste().then((data) => {
      this.wastes = data;
      console.log(this.wastes);
    },
    error => {
      console.log(error);
    });
  }
}
