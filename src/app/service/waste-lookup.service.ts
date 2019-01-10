import { HttpClient } from '@angular/common/http';
import { Waste } from '../model/waste';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WasteLookupService {
  private address = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000';

  constructor(private http: HttpClient) {}

  getWaste(): Promise<Array<Waste>> {
    return new Promise((res, rej) => {
      this.http.get(this.address).subscribe(
        (result: Array<Waste>) => {
          if (result) {
            const wastes = [];
            for (const row of result) {
              const waste = new Waste();
              Object.assign(waste, row);
              wastes.push(waste);
            }
            res(wastes);
          }
        },
        error => {
          rej(error);
        }
      );
    });
  }
}
