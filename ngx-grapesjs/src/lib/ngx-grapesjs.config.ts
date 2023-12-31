import { InjectionToken } from '@angular/core';

import { Config } from './ngx-grapesjs.model';

export const BASE_CONFIG: Config = {
  container: '#gjs',
  plugins: [],
  components: '',
  pluginsOpts: {},
  storageManager: {
    id: 'gjs-'
  }
};

export const EDITOR_CONFIG = new InjectionToken<Config>('editor.config');
