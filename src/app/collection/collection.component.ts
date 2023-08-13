import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  @Input() filters:string[] = []

  tempCollection = localStorage.getItem('cards')
  tempCards = this.tempCollection? JSON.parse(this.tempCollection): [];
  collection:any = this.getCollected()

  numberOfCardsInCollection = this.collection.length


    





  getCollected(){
    var temp = []
    console.log(this.filters)
      
    for(let i =0; i < this.tempCards.length; i++){
      if(this.tempCards[i].collected == 'true' && this.filters.includes(this.tempCards[i].deck)){
        temp.push(this.tempCards[i])
      }else if(this.filters.length ===0 && this.tempCards[i].collected == 'true' ){
        temp.push(this.tempCards[i])
      }
    }

    localStorage.setItem('collection', JSON.stringify(temp))
    
    this.collection = temp
    return temp
  }

  addCardToCollection(card: any){
        for(let i = 0; i < this.tempCards!.length; i++){
            if(card['card_code'] == this.tempCards[i].card_code){

                if(card['collected'] == 'true'){
                    this.tempCards[i].collected = 'false';
                    console.log(this.tempCards[i].collected);
                    localStorage.setItem('cards', JSON.stringify(this.tempCards));
                    
                }else{
                    this.tempCards[i].collected = 'true';
                    console.log(this.tempCards[i].collected);
                    localStorage.setItem('cards', JSON.stringify(this.tempCards));
                    break;
                }
            }
        }
        console.log(this.filters)
  }

expFile() {
  var cardNames = 'One Piece Trading Card Game Card Collection\n\n'
  
  for(let i = 0; i < this.collection.length; i++){
    cardNames += (this.collection[i].name +'\t'+this.collection[i].card_code + '\n')
  }

  var dataStr = "data:text/json;charset=utf-8," + cardNames;
  var dlAnchorElem:any = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "OnePieceTradingCardGameCollection.txt");
  dlAnchorElem.click();
}


}
