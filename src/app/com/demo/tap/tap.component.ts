import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { GetApiDataService } from 'src/app/services/get-api-data.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  constructor(private dataApi: GetApiDataService) {}

  rowObject: any;
  newObject: any;

  ngOnInit(): void {
    this.dataApi
      .getUserFromApi('1')
      .pipe(
        tap((user) => console.log(user)),
        map((user: any) => {
          this.rowObject = user;
          return {
            nickname: user.username,
            city: user.address.city,
            company: user.company.name,
          };
        }),
        tap((user) => console.log(user))
      )
      .subscribe((res) => {
        this.newObject = res;
      });
  }
}
