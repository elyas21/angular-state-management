import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { GetApiDataService } from 'src/app/services/get-api-data.service';
import { GetVariablesService } from 'src/app/services/get-variables.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent {
  constructor(
    private _dataSer: GetApiDataService,
    public varSer: GetVariablesService
  ) {}

  operators = [
    { name: 'map', link: 'map' },
    { name: 'filter', link: 'filter' },
    { name: 'take', link: 'take' },
    { name: 'switchMap', link: 'switchMap' },
    { name: 'tap', link: 'tap' },
    { name: 'combineLatest', link: 'combineLatest' },
  ];
  ngOnInit(): void {
    this._dataSer
      .getCommentsFromApi()
      .pipe(tap((x) => console.log('taped')))
      .subscribe((x) => console.log(x));
  }
}
