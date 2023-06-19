import { Component } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-param-map',
  templateUrl: './param-map.component.html',
  styleUrls: ['./param-map.component.scss']
})
export class ParamMapComponent {
  itemList$: Observable<any>  = this._itemService.items$;

  itemFormControl:FormControl = this._itemService.searchFormControl;

  constructor(private _itemService: ItemServiceService, private _router: Router, 
    private _route: ActivatedRoute){}


  serchItem(){
    this._router.navigate([],{
      relativeTo: this._route,
      queryParams: {
        q:this.itemFormControl.value
      },
      queryParamsHandling: 'merge'
    })
  }

}
