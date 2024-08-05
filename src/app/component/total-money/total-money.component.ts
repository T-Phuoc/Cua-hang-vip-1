import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../models/services/store.service';

@Component({
  selector: 'app-total-money',
  standalone: true,
  imports: [],
  templateUrl: './total-money.component.html',
  styleUrl: './total-money.component.scss',
})
export class TotalMoneyComponent implements OnInit {
  total!: number;

  constructor(public storeService: StoreService) {}

  ngOnInit() {
    // @ts-ignore
    this.total = this.storeService.totalMoney();
  }
}
