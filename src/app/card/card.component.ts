import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() deck = '';
  @Input() card_code = '';
  @Input() rarity = '';
  @Input() kind = '';
  @Input() text = '';
  @Input() name = '';
  @Input() images = '';
  @Input() collected = "false";
  @Input() filters:any[] = [];
}
