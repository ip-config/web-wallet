import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { environment } from '@environment';

@Component({
  selector: 'app-address-type-menu',
  templateUrl: './address-type-menu.component.html',
  styleUrls: ['./address-type-menu.component.scss']
})
export class AddressTypeMenuComponent implements OnInit {
  @Output() menuChanged = new EventEmitter<string>();
  @Input() menuItems: any;

  public iconDrop: string = `${environment.assetsPath}/images/modules/addresses/components/address-type-menu/arrow.svg`;
  selectedItem = {};
  isDropdownVisible = false;

  constructor() {
  }

  changeDropdownState(event) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  selectItem(item) {
    this.selectedItem = item;
    this.isDropdownVisible = false;
    this.menuChanged.emit(item);
  }

  onClickedOutside() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  ngOnInit() {
    this.selectedItem = this.menuItems[0];
  }

}
