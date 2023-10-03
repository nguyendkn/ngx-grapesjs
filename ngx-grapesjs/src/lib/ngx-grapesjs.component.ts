import {Component, Input} from "@angular/core";
import {Config} from "./ngx-grapesjs.model";

declare var grapesjs: {
  init(options: any): object;
};

@Component({
  standalone: true,
  template: ''
})
export class NgxGrapesjsComponent {
  @Input() template = '';
  @Input() storagePrefix = 'gjs-';

  setup(customConfig: Partial<Config>) {
    const config: Partial<Config> = {
      components: this.template,
      storageManager: {
        id: this.storagePrefix
      }
    };

    return grapesjs.init({
      ...config,
      ...customConfig
    });
  }
}
