import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  search: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearch(): void {
    console.log('Search button clicked with query:', this.search);
  }
}
