import { Component } from '@angular/core';

@Component({
  // <pm-root> referenced in index.html ("pm-root" because product management root)
  selector: 'pm-root',
  // in order to use <pm-products>, it must be defined as a selector (see product-list.component.ts)
  // and the component must be referenced as a declaration in app.module.ts
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/welcome']"
            >Home</a
          >
        </li>
        <li>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/products']"
            >Product List</a
          >
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
