import { Component } from '@angular/core';

// <pm-root> referenced in index.html ("pm-root" because product management root)
@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <div>My First Ccomponent</div>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
