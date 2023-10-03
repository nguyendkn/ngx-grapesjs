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
