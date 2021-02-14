import { Component } from '@angular/core';


@Component({
  // <pm-root> referenced in index.html ("pm-root" because product management root)
  selector: 'pm-root',
  // in order to use <pm-products>, it must be defined as a selector (see product-list.component.ts)
  // and the component must be referenced as a declaration in app.module.ts
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <pm-products></pm-products>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
