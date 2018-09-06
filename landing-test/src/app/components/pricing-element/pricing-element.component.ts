import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pricing-element',
  templateUrl: './pricing-element.component.html',
  styleUrls: ['./pricing-element.component.scss']
})
export class PricingElementComponent implements OnInit {

  @Input() pricingData: any;

  constructor() { }

  ngOnInit() {
  }

}
