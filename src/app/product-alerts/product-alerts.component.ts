import { Component, Input,  Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter<string>();

  stato = "disponibile"

  constructor() {}

  ngOnInit(): void {}

  mandaStato(){
    this.notify.emit(this.stato)
  }




}
