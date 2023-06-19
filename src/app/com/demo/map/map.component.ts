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

  rowObject: any;
  newObject: any;

  ngOnInit(): void {
    this.dataApi
      .getUserFromApi('1')
      .pipe(
        map((user) => {
          return {
            name: user.name,
            address: {
              street: user.address.street,
              city: user.address.city,
              phone: user.phone,
            },
          };
        }),
        map((muser:any)=>{
          return {
            userCity: muser.name + ' lived in ' +  muser.address.city,
            phone: muser.address.phone
          }
        }),
        
        map((mmuser:any)=>{
          return {
            userPhone: mmuser.phone
          }
        }),
        
      )
      .subscribe((res) => {
        console.log(res);
        this.newObject = res;
      });
  }
}
