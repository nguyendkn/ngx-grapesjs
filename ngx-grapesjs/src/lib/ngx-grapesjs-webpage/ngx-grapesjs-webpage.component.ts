import { Component, OnInit } from '@angular/core';
import { NgxGrapesjsComponent } from '../ngx-grapesjs.component';
import { Config } from '../ngx-grapesjs.model';

@Component({
  standalone: true,
  selector: 'ngx-grapesjs-webpage',
  templateUrl: './ngx-grapesjs-webpage.component.html',
})
export class NgxGrapesjsWebpageComponent
  extends NgxGrapesjsComponent
  implements OnInit
{
  private webpageConfig: Partial<Config> = {
    container: '#gjs',
    plugins: ['grapesjs-preset-webpage', 'gjs-blocks-basic'],
    pluginsOpts: {
      'grapesjs-preset-webpage': {
        modalTitleImport: 'Import template',
      },
    },
  };

  ngOnInit() {
    this.setup(this.webpageConfig);
  }
}
