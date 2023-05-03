import { Component } from '@angular/core';
import { CodeJarContainer } from 'ngx-codejar';
import * as Prism from 'prismjs';
import { GetApiDataService } from 'src/app/services/get-api-data.service';
import { GetVariablesService } from 'src/app/services/get-variables.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _dataSer: GetApiDataService, public varSer: GetVariablesService) {}

  ngOnInit(): void {
    this._dataSer.getUserFromApi().subscribe(res=>{
      console.log(res);
      
    })
  }

  hightlightMethod(editor: CodeJarContainer) {
    if (editor.textContent !== null && editor.textContent !== undefined) {
      editor.innerHTML = Prism.highlight(
        editor.textContent,
        Prism.languages['typescript'],
        'typescript'
      );
    }
  }

}
