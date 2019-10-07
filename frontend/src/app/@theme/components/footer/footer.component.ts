import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Alejandro García García  <b> TFG <a href="https://etsii.us.es" target="_blank"> US </a>
    <a href="https://lsi.us.es" target="_blank"> LSI </a></b> 2018</span>
  `,
})
export class FooterComponent {
}
