import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
