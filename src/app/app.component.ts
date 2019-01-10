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
      this.sanitize(this.wastes);
      console.log(this.wastes);
    },
    error => {
      console.log(error);
    });
  }

  sanitize(wastes: Array<Waste>) {
    for (let waste of wastes) {
      let encoded = encodeURIComponent(waste.body);
      console.log("encode" + encoded);
      let decoded = decodeURIComponent(encoded);
      console.log("decode" + decoded);
      waste.body = decoded;
    }
  }
}
