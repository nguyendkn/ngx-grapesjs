# Welcome to ngx-grapesjs 👋
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/nguyendkn/ngx-grapesjs/blob/main/README.md)

> Angular library for GrapesJS

## Getting started

This repository contains the following projects:

* [ngx-grapesjs](https://github.com/nguyendkn/ngx-grapesjs/tree/main/ngx-grapesjs): a wrapper library for the GrapesJS editor https://grapesjs.com/
* [WebPage Demo](https://grapesjs.com/demo.html): a demo application that showcases the usage of the library
* [Newsletter Demo](https://grapesjs.com/demo-newsletter-editor.html): a demo application that showcases the usage of the library

## Usage

```sh
npm install nguyendk-grapesjs
```
Add scripts and style to your project
```json
"styles": [
  "apps/grapesjs/src/styles.scss",
  "node_modules/grapesjs/dist/css/grapes.min.css"
],
"scripts": [
  "node_modules/grapesjs/dist/grapes.min.js",
  "node_modules/grapesjs-preset-newsletter/dist/index.js",
  "node_modules/grapesjs-preset-webpage/dist/index.js",
  "node_modules/grapesjs-blocks-basic/dist/index.js"
]
```

`app.component.html`
```angular2html
<p>Select an editor mode:</p>
<div>
  <input type="radio" id="webpage" name="webpage" value="webpage" [(ngModel)]="editorMode">
  <label for="webpage">Webpage</label>
</div>
<div>
  <input type="radio" id="newsletter" name="newsletter" value="newsletter" [(ngModel)]="editorMode">
  <label for="newsletter">Newsletter</label>
</div>
<div class="editor">
  <ngx-grapesjs-newsletter *ngIf="editorMode === 'newsletter'" [template]="template" [placeholders]="placeholders"></ngx-grapesjs-newsletter>
  <ngx-grapesjs-webpage *ngIf="editorMode === 'webpage'" [template]="template"></ngx-grapesjs-webpage>
</div>
```

`app.component.ts`
```angular2html
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  NgxGrapesjsNewletterComponent,
  NgxGrapesjsWebpageComponent,
} from '@ngx-grapesjs';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgxGrapesjsNewletterComponent,
    NgxGrapesjsWebpageComponent,
    FormsModule,
    NgIf,
  ],
  selector: 'ngx-grapesjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  editorMode = '';
  template = '<span>This is a test content</span>';
  placeholders = [
    {
      value: 'MyPlaceholder',
      name: 'Custom placeholder',
      description: 'This is a custom placeholder',
    },
  ];
}

```

## Author

👤 **Dao Khoi Nguyen**

* Website: https://blogs.redis.asia
* Github: [@nguyendkn](https://github.com/nguyendkn)
* LinkedIn: [@khoinguyenict](https://www.linkedin.com/in/khoinguyenict/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2022 [nguyendkn](https://github.com/nguyendkn).

