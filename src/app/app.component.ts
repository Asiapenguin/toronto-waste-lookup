import { Component, OnInit } from '@angular/core';
import { WasteLookupService } from './service/waste-lookup.service';
import { Waste } from './model/waste';
import { FilterableComponent } from 'src/core/filterable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends FilterableComponent implements OnInit {
  wastes: Array<Waste>;
  favoriteWastes: Array<Waste> = [];
  containsFavorite = false;

  constructor(private wasteLookupService: WasteLookupService) {
    super();
  }

  getData() {
    return this.wastes;
  }

  ngOnInit() {
    this.wasteLookupService.getWaste().then((data) => {
      this.wastes = data;
      this.sanitize(this.wastes);
    },
    error => {
      console.log(error);
    });
  }

  sanitize(wastes: Array<Waste>) {
    for (const waste of wastes) {
      const parser = new DOMParser;
      const encodedBody = parser.parseFromString(waste.body, 'text/html');
      waste.body = encodedBody.body.textContent;
    }
  }

  setFavorite(waste: Waste) {
    waste.favorite = !waste.favorite;
    if (waste.favorite) {
      this.favoriteWastes.push(waste);
    } else {
      const index = this.favoriteWastes.indexOf(waste);
      this.favoriteWastes.splice(index, 1);
    }
  }
}
