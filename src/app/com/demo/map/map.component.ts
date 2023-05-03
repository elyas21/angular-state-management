import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GetApiDataService } from 'src/app/services/get-api-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private dataApi: GetApiDataService) {}

  rowObject:any;
  newObject:any;

  ngOnInit(): void {
    this.dataApi
      .getUserFromApi('1')
      .pipe(
        map((user: any) => {
          this.rowObject = user;
          return {
            nickname: user.username,
            city: user.address.city,
            company: user.company.name
          }
        })
      )
      .subscribe((res) => {
        this.newObject = res;
      });
  }
}
