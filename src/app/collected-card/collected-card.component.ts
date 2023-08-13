import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-collected-card',
  templateUrl: './collected-card.component.html',
  styleUrls: ['./collected-card.component.css']
})
export class CollectedCardComponent {
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
