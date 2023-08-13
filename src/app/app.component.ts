import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    cards = [
        {
            "deck": "ST01",
            "card_code": "ST01-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] Give this Leader or 1 of your Characters up to 1 rested DON!! card.",
            "name": "Monkey.D.Luffy",
            "images": "ST01-001.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-002",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] [When Attacking] Your opponent cannot activate a [Blocker] Character that has 5000 or more power during this battle.",
            "name": "Usopp",
            "images": "ST01-002.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-003",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Karoo",
            "images": "ST01-003.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-004",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] This Character gains [Rush].(This card can attack on the turn in which it is played.)",
            "name": "Sanji",
            "images": "ST01-004.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-005",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Up to 1 of your Leader or Character cards other than this card gains +1000 power during this turn.",
            "name": "Jinbe",
            "images": "ST01-005.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Tony Tony.Chopper",
            "images": "ST01-006.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] Give up to 1 rested DON!! card to your Leader or 1 of your Characters.",
            "name": "Nami",
            "images": "ST01-007.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Nico Robin",
            "images": "ST01-008.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Nefeltari Vivi",
            "images": "ST01-009.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Franky",
            "images": "ST01-010.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-011",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 2 rested DON!! cards to your Leader or 1 of your Characters.",
            "name": "Brook",
            "images": "ST01-011.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-012",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)[DON!! x2] [When Attacking] Your opponent cannot activate [Blocker] during this battle.",
            "name": "Monkey.D.Luffy",
            "images": "ST01-012.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-013",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] This Character gains +1000 power.",
            "name": "Roronoa Zoro",
            "images": "ST01-013.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-014",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +3000 power during this battle.",
            "name": "Guard Point",
            "images": "ST01-014.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-015",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] K.O. up to 1 of your opponent's Characters with 6000 power or less.",
            "name": "Gum-Gum Jet Pistol",
            "images": "ST01-015.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-016",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Select up to 1 of your {Straw Hat Crew} type Leader or Character cards. Your opponent cannot activate [Blocker] if that Leader or Character attacks during this turn.",
            "name": "Diable Jambe",
            "images": "ST01-016.png",
            "collected": "false"
        },
        {
            "deck": "ST01",
            "card_code": "ST01-017",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] You may rest this Stage: Up to 1 {Straw Hat Crew} type Leader or Character card on your field gains +1000 power during this turn.",
            "name": "Thousand Sunny",
            "images": "ST01-017.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn]  ③ (You may rest the specified number of DON!! cards in your cost area.) You may trash 1 card from your hand: Set this Leader as active.",
            "name": "Eustass\"Captain\"Kid",
            "images": "ST02-001.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-002",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Vito",
            "images": "ST02-002.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-003",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] If you have 3 or more Characters, this card gains +2000 power.",
            "name": "Urouge",
            "images": "ST02-003.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-004",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Capone\"Gang\"Bege",
            "images": "ST02-004.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-005",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 3 or less.",
            "name": "Killer",
            "images": "ST02-005.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Koby",
            "images": "ST02-006.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] ➀ (You may rest the specified number of DON!! cards in your cost area.) You may rest this Character: Look at 5 cards from the top of your deck; reveal up to 1 {Supernovas} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Jewelry Bonney",
            "images": "ST02-007.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Rest up to 1 of your opponent's DON!! cards.",
            "name": "Scratchmen Apoo",
            "images": "ST02-008.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-009",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Set up to 1 of your {Supernovas} or {Heart Pirates} type rested Characters with a cost of 5 or less as active.",
            "name": "Trafalgar Law",
            "images": "ST02-009.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Once Per Turn] [Your Turn] If this Character battles your opponent's Character, set this card as active.",
            "name": "Basil Hawkins",
            "images": "ST02-010.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-011",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Heat",
            "images": "ST02-011.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Bepo",
            "images": "ST02-012.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-013",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[DON!! x1] [End of Your Turn] Set this card as active.",
            "name": "Eustass\"Captain\"Kid",
            "images": "ST02-013.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-014",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] If this Character is rested, your {Supernovas} or {Navy} type Leaders and Characters gain +1000 power.",
            "name": "X.Drake",
            "images": "ST02-014.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-015",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle. Then, set up to 1 of your DON!! cards as active.",
            "name": "Scalpel",
            "images": "ST02-015.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-016",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, set up to 1 of your DON!! cards as active.",
            "name": "Repel",
            "images": "ST02-016.png",
            "collected": "false"
        },
        {
            "deck": "ST02",
            "card_code": "ST02-017",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Rest up to 1 of your opponent's Characters.",
            "name": "Straw Sword",
            "images": "ST02-017.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] DON!! −4 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Return up to 1 Character with a cost of 5 or less to the owner's hand.",
            "name": "Crocodile",
            "images": "ST03-001.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-002",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Edward Weevil",
            "images": "ST03-002.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-003",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[DON!! x1] [On Block] Place up to 1 Character with a cost of 2 or less at the bottom of the owner's deck.",
            "name": "Crocodile",
            "images": "ST03-003.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-004",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Add up to 1 {The Seven Warlords of the Sea} or {Thriller Bark Pirates} type Character with a cost of 4 or less other than [Gecko Moria] from your trash to your hand.",
            "name": "Gecko Moria",
            "images": "ST03-004.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-005",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Draw 2 cards and trash 2 cards from your hand.",
            "name": "Dracule Mihawk",
            "images": "ST03-005.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Jinbe",
            "images": "ST03-006.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Activate: Main] [Once Per Turn] ➁ (You may rest the specified number of DON!! cards in your cost area.): Play up to 1 [Pacifista] with a cost of 4 or less from your deck, then shuffle your deck.",
            "name": "Sentomaru",
            "images": "ST03-007.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Trafalgar Law",
            "images": "ST03-008.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-009",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Return up to 1 Character with a cost of 7 or less to the owner's hand.",
            "name": "Donquixote Doflamingo",
            "images": "ST03-009.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 3 cards from the top of your deck and return them to the top or bottom of the deck in any order.",
            "name": "Bartholomew Kuma",
            "images": "ST03-010.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-011",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Buggy",
            "images": "ST03-011.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Pacifista",
            "images": "ST03-012.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-013",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Boa Hancock",
            "images": "ST03-013.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-014",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Return up to 1 Character with a cost of 3 or less to the owner's hand.",
            "name": "Marshall.D.Teach",
            "images": "ST03-014.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-015",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Return up to 1 Character with a cost of 7 or less to the owner's hand.",
            "name": "Sables",
            "images": "ST03-015.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-016",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Return up to 1 Character with a cost of 3 or less to the owner's hand.",
            "name": "Thrust Pad Cannon",
            "images": "ST03-016.png",
            "collected": "false"
        },
        {
            "deck": "ST03",
            "card_code": "ST03-017",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, draw 1 card if you have 3 or less cards in your hand.",
            "name": "Love-Love Mellow",
            "images": "ST03-017.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] DON!! −7 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Trash up to 1 of your opponent's Life cards.",
            "name": "Kaido",
            "images": "ST04-001.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-002",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Play up to 1 [Page One] card with a cost of 4 or less from your hand.",
            "name": "Ulti",
            "images": "ST04-002.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-003",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −5 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 6 or less. This Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Kaido",
            "images": "ST04-003.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-004",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "King",
            "images": "ST04-004.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-005",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Draw 2 cards and trash 1 card from your hand.",
            "name": "Queen",
            "images": "ST04-005.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Draw 1 card.",
            "name": "Sasaki",
            "images": "ST04-006.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Sheepshead",
            "images": "ST04-007.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: Add up to 1 DON!! card from your DON!! deck and set it as active.",
            "name": "Jack",
            "images": "ST04-008.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Ginrummy",
            "images": "ST04-009.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 3 or less.",
            "name": "Who's.Who",
            "images": "ST04-010.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-011",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Black Maria",
            "images": "ST04-011.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Page One",
            "images": "ST04-012.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-013",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "X.Drake",
            "images": "ST04-013.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-014",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Draw 1 card, then add up to 1 DON!! card from your DON!! deck and set it as active.",
            "name": "Lead Performer \"Disaster\"",
            "images": "ST04-014.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-015",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] K.O. up to 1 of your opponent's Characters with a cost of 6 or less, then add up to 1 DON!! card from your DON!! deck and set it as active.",
            "name": "Brachio Bomber",
            "images": "ST04-015.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-016",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Up to 1 of your Leader or Character cards gains +4000 power during this battle.",
            "name": "Blast Breath",
            "images": "ST04-016.png",
            "collected": "false"
        },
        {
            "deck": "ST04",
            "card_code": "ST04-017",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] You may rest this Stage: If your Leader has the {Animal Kingdom Pirates} type, add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Onigashima Island",
            "images": "ST04-017.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] DON!! −3 (You may return the specified number of DON!! cards from your field to your DON!! deck.): All of your {FILM} type Characters gain +2000 power during this turn.",
            "name": "Shanks",
            "images": "ST05-001.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-002",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Ain",
            "images": "ST05-002.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-003",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Ann",
            "images": "ST05-003.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-004",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Block] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Uta",
            "images": "ST05-004.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-005",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] You may rest this Character and trash 1 {FILM} type card from your hand: If your opponent has more DON!! cards on their field than you, add 2 DON!! cards from your DON!! deck and rest them.",
            "name": "Carina",
            "images": "ST05-005.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Draw 2 cards.",
            "name": "Gild Tesoro",
            "images": "ST05-006.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Gordon",
            "images": "ST05-007.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "EffectIf you have 8 or more DON!! cards on your field, this Character cannot be K.O.'d in battle.",
            "name": "Shiki",
            "images": "ST05-008.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Scarlet",
            "images": "ST05-009.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "EffectWhen this Character battles ＜Strike＞ attribute Characters, this Character gains +3000 power during this turn.[Activate: Main] [Once Per Turn] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains +2000 power during this turn.",
            "name": "Zephyr",
            "images": "ST05-010.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-011",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] DON!! −4 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 2 of your opponent's Characters with a cost of 6 or less. Then, this Character gains [Double Attack] during this turn.(This card deals 2 damage.)",
            "name": "Douglas Bullet",
            "images": "ST05-011.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Baccarat",
            "images": "ST05-012.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-013",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Bins",
            "images": "ST05-013.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-014",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 {FILM} type card other than [Buena Festa] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Buena Festa",
            "images": "ST05-014.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-015",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Dr. Indigo",
            "images": "ST05-015.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-016",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Lion's Threat Imperial Earth Bind",
            "images": "ST05-016.png",
            "collected": "false"
        },
        {
            "deck": "ST05",
            "card_code": "ST05-017",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your {FILM} type Leader or Character cards gains +4000 power during this battle. If that card is a Character, that Character cannot be K.O.'d during this turn.",
            "name": "Union Armada",
            "images": "ST05-017.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] ③ (You may rest the specified number of DON!! cards in your cost area.) You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost of 0.",
            "name": "Sakazuki",
            "images": "ST06-001.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-002",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost of 0.",
            "name": "Koby",
            "images": "ST06-002.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-003",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Jango",
            "images": "ST06-003.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-004",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "EffectThis Character cannot be K.O.'d by effects.[DON!! x1] If there is a Character with a cost of 0, this Character gains [Double Attack].(This card deals 2 damage.)",
            "name": "Smoker",
            "images": "ST06-004.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-005",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] Give up to 1 of your opponent's Characters −4 cost during this turn.",
            "name": "Sengoku",
            "images": "ST06-005.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: Give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Tashigi",
            "images": "ST06-006.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Tsuru",
            "images": "ST06-007.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 1 of your opponent's Characters −4 cost during this turn.",
            "name": "Hina",
            "images": "ST06-008.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Fullbody",
            "images": "ST06-009.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 1 of your opponent's Characters −3 cost during this turn.",
            "name": "Helmeppo",
            "images": "ST06-010.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-011",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Momonga",
            "images": "ST06-011.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-012",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may trash 1 card from your hand and rest this Character: K.O. up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "Monkey.D.Garp",
            "images": "ST06-012.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-013",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "T-Bone",
            "images": "ST06-013.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-014",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, K.O. up to 1 of your opponent's active Characters with a cost of 3 or less.",
            "name": "Shockwave",
            "images": "ST06-014.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-015",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Draw 1 card. Then, give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Great Eruption",
            "images": "ST06-015.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-016",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle.",
            "name": "White Out",
            "images": "ST06-016.png",
            "collected": "false"
        },
        {
            "deck": "ST06",
            "card_code": "ST06-017",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[On Play] Give up to 1 of your opponent's Characters −1 cost during this turn.[Activate: Main] You may rest this Stage: If your Leader has the {Navy} type, give up to 1 of your opponent's Characters −1 cost during this turn.",
            "name": "Navy HQ",
            "images": "ST06-017.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x2] [When Attacking] You may add 1 card from the top or bottom of your Life cards to your hand: If you have 2 or less Life cards, add up to 1 card from your hand to the top of your Life cards.",
            "name": "Charlotte Linlin",
            "images": "ST07-001.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-002",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Charlotte Anana",
            "images": "ST07-002.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-003",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at up to 1 card from the top of your or your opponent's Life cards, and place it at the top or bottom of the Life cards. Then, if you have less Life cards than your opponent, this Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Charlotte Katakuri",
            "images": "ST07-003.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-004",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may add 1 card from the top or bottom of your Life cards to your hand: This Character gains [Banish] and +1000 power during this battle.(When this card deals damage, the target card is trashed without activating its Trigger.)",
            "name": "Charlotte Snack",
            "images": "ST07-004.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-005",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may add 1 card from the top or bottom of your Life cards to your hand: Add up to 1 card from the top of your deck to the top of your Life cards.",
            "name": "Charlotte Daifuku",
            "images": "ST07-005.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Charlotte Flampe",
            "images": "ST07-006.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Charlotte Brulee",
            "images": "ST07-007.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at up to 1 card from the top of your or your opponent's Life cards, and place it at the top or bottom of the Life cards.",
            "name": "Charlotte Pudding",
            "images": "ST07-008.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character and add 1 card from the top or bottom of your Life cards to your hand: K.O. up to 1 of your opponent's Characters with a cost of 3 or less.",
            "name": "Charlotte Mont-d'or",
            "images": "ST07-009.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-010",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Your opponent chooses one:- Trash 1 card from the top of your opponent's Life cards.- Add 1 card from the top of your deck to the top of your Life cards.",
            "name": "Charlotte Linlin",
            "images": "ST07-010.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-011",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: Up to 1 of your [Charlotte Linlin] cards gains [Banish] during this turn.(When this card deals damage, the target card is trashed without activating its Trigger.)",
            "name": "Zeus",
            "images": "ST07-011.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Baron Tamago",
            "images": "ST07-012.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-013",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: Up to 1 of your [Charlotte Linlin] cards gains [Double Attack] during this turn.(This card deals 2 damage.)",
            "name": "Prometheus",
            "images": "ST07-013.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-014",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Pekoms",
            "images": "ST07-014.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-015",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Your opponent chooses one:- Trash 1 card from the top of your opponent's Life cards.- Add 1 card from the top of your deck to the top of your Life cards.",
            "name": "Soul Pocus",
            "images": "ST07-015.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-016",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Look at up to 1 card from the top of your or your opponent's Life cards, and place it at the top or bottom of the Life cards. Then, up to 1 of your Leader or Character cards gains +2000 power during this battle.",
            "name": "Power Mochi",
            "images": "ST07-016.png",
            "collected": "false"
        },
        {
            "deck": "ST07",
            "card_code": "ST07-017",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] You may rest this Stage and add 1 card from the top or bottom of your Life cards to your hand: Add up to 1 of your Characters with a cost of 3 to the top of the owner's Life cards face-up.",
            "name": "Queen Mama Chanter",
            "images": "ST07-017.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] When a Character is K.O.'d, give up to 1 rested DON!! card to this Leader.",
            "name": "Monkey.D.Luffy",
            "images": "ST08-001.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-002",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "EffectThis Character cannot be K.O.'d in battle by Leaders.[Activate: Main] You may rest this Character: Give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Uta",
            "images": "ST08-002.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-003",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Gaimon",
            "images": "ST08-003.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-004",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: K.O. up to 1 of your opponent's Characters with a cost of 2 or less.",
            "name": "Koby",
            "images": "ST08-004.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-005",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: K.O. all Characters with a cost of 1 or less.",
            "name": "Shanks",
            "images": "ST08-005.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] Give up to 1 of your opponent's Characters −4 cost during this turn.",
            "name": "Shirahoshi",
            "images": "ST08-006.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Nefeltari Vivi",
            "images": "ST08-007.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Higuma",
            "images": "ST08-008.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If there is a Character with a cost of 0, draw 1 card.",
            "name": "Makino",
            "images": "ST08-009.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Monkey.D.Garp",
            "images": "ST08-010.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-011",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Monkey.D.Luffy",
            "images": "ST08-011.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Laboon",
            "images": "ST08-012.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-013",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] At the end of a battle in which this Character battles your opponent's Character, you may K.O. the opponent’s Character you battled with. If you do, K.O. this Character.",
            "name": "Mr.2.Bon.Kurei(Bentham)",
            "images": "ST08-013.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-014",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] You may add 1 card from the top of your Life cards to your hand: Give up to 1 of your opponent's Characters −7 cost during this turn.",
            "name": "Gum-Gum Bell",
            "images": "ST08-014.png",
            "collected": "false"
        },
        {
            "deck": "ST08",
            "card_code": "ST08-015",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] K.O. up to 1 of your opponent's Characters with a cost of 2 or less.",
            "name": "Gum-Gum Pistol",
            "images": "ST08-015.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [Opponent's Turn] If you have 2 or less Life cards, this Leader gains +1000 power.",
            "name": "Yamato",
            "images": "ST09-001.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-002",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Uzuki Tempura",
            "images": "ST09-002.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-003",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Ulti",
            "images": "ST09-003.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-004",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] If you have 2 or less Life cards, this Character cannot be K.O.'d in battle.",
            "name": "Kaido",
            "images": "ST09-004.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-005",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] This Character gains [Double Attack].(This card deals 2 damage.)[On K.O.] You may trash 2 cards from your hand: Add up to 1 card from the top of your deck to the top of your Life cards.",
            "name": "Kouzuki Oden",
            "images": "ST09-005.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Kouzuki Momonosuke",
            "images": "ST09-006.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Block] You may add 1 card from the top or bottom of your Life cards to your hand: This Character gains +4000 power during this battle.",
            "name": "Shinobu",
            "images": "ST09-007.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may add 1 card from the top or bottom of your Life cards to your hand: Play up to 1 yellow {Land of Wano} type Character card with a cost of 4 or less from your hand.",
            "name": "Shimotsuki Ushimaru",
            "images": "ST09-008.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Fugetsu Omusubi",
            "images": "ST09-009.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-010",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Once Per Turn] If this Character would be K.O.'d, you may trash 1 card from the top or bottom of your Life cards instead.",
            "name": "Portgas.D.Ace",
            "images": "ST09-010.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-011",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Monkey.D.Luffy",
            "images": "ST09-011.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] You may add 1 card from the top or bottom of your Life cards to your hand: This Character gains +2000 power until the start of your next turn.",
            "name": "Yamato",
            "images": "ST09-012.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-013",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Yamato",
            "images": "ST09-013.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-014",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] If you have 2 or less Life cards, give up to 1 of your opponent's Leader or Character cards −3000 power during this turn.",
            "name": "Narikabura Arrow",
            "images": "ST09-014.png",
            "collected": "false"
        },
        {
            "deck": "ST09",
            "card_code": "ST09-015",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, if you have 2 or less Life cards, add up to 1 of your opponent's Characters with a cost of 3 or less to the top or bottom of the owner's Life cards face-up.",
            "name": "Thunder Bagua",
            "images": "ST09-015.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [Your Turn] All of your Characters gain +1000 power.",
            "name": "Roronoa Zoro",
            "images": "OP01-001.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [Your Turn] All of your Characters gain +1000 power.",
            "name": "Roronoa Zoro",
            "images": "OP01-001_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-002",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] ➁ (You may rest the specified number of DON!! cards in your cost area.): If you have 5 Characters, return 1 of your Characters to the owner's hand. Then, play up to 1 Character with a cost of 5 or less from your hand that is a different color than the returned Character.",
            "name": "Trafalgar Law",
            "images": "OP01-002.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-002",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] ➁ (You may rest the specified number of DON!! cards in your cost area.): If you have 5 Characters, return 1 of your Characters to the owner's hand. Then, play up to 1 Character with a cost of 5 or less from your hand that is a different color than the returned Character.",
            "name": "Trafalgar Law",
            "images": "OP01-002_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-003",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] ➃ (You may rest the specified number of DON!! cards in your cost area.): Set up to 1 of your {Supernovas} or {Straw Hat Crew} type Character cards with a cost of 5 or less as active. It gains +1000 power during this turn.",
            "name": "Monkey.D.Luffy",
            "images": "OP01-003.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-003",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] ➃ (You may rest the specified number of DON!! cards in your cost area.): Set up to 1 of your {Supernovas} or {Straw Hat Crew} type Character cards with a cost of 5 or less as active. It gains +1000 power during this turn.",
            "name": "Monkey.D.Luffy ",
            "images": "OP01-003_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-004",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] [Once Per Turn] Draw 1 card when your opponent activates an Event.",
            "name": "Usopp",
            "images": "OP01-004.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-005",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Add up to 1 red Character card other than [Uta] with a cost of 3 or less from your trash to your hand.",
            "name": "Uta",
            "images": "OP01-005.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-006",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 1 of your opponent's Characters −2000 power during this turn.",
            "name": "Otama",
            "images": "OP01-006.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] K.O. up to 1 of your opponent's Characters with 4000 power or less.",
            "name": "Caribou",
            "images": "OP01-007.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may add 1 card from your Life area to your hand: This Character gains [Rush] during this turn. (This card can attack on the turn in which it is played.)",
            "name": "Cavendish",
            "images": "OP01-008.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-008",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may add 1 card from your Life area to your hand: This Character gains [Rush] during this turn. (This card can attack on the turn in which it is played.)",
            "name": "Cavendish",
            "images": "OP01-008_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Trigger] Play this card.",
            "name": "Carrot",
            "images": "OP01-009.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Komachiyo",
            "images": "OP01-010.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-011",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may place 1 card from your hand at the bottom of your deck: Draw 1 card.",
            "name": "Gordon",
            "images": "OP01-011.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Sai",
            "images": "OP01-012.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-013",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] You may add 1 card from your Life area to your hand: This Character gains +2000 power during this turn. Then, give this Character up to 2 rested DON!! cards.",
            "name": "Sanji",
            "images": "OP01-013.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-013",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] You may add 1 card from your Life area to your hand: This Character gains +2000 power during this turn. Then, give this Character up to 2 rested DON!! cards.",
            "name": "Sanji",
            "images": "OP01-013_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-014",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[DON!! x1] [On Block] Play up to 1 red Character card with a cost of 2 or less from your hand.",
            "name": "Jinbe",
            "images": "OP01-014.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-015",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may trash 1 card from your hand: Add up to 1 {Straw Hat Crew} type Character card other than [Tony Tony.Chopper] with a cost of 4 or less from your trash to your hand.",
            "name": "Tony Tony.Chopper",
            "images": "OP01-015.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-016",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 {Straw Hat Crew} type card other than [Nami] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Nami",
            "images": "OP01-016.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-016",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 {Straw Hat Crew} type card other than [Nami] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Nami",
            "images": "OP01-016_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-017",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] K.O. up to 1 of your opponent's Characters with 3000 power or less.",
            "name": "Nico Robin",
            "images": "OP01-017.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-018",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Hajrudin",
            "images": "OP01-018.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-019",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[DON!! x2] [Opponent's Turn] This Character gains +3000 power.",
            "name": "Bartolomeo",
            "images": "OP01-019.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-020",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: Up to 1 of your Leader or Character cards gains +2000 power during this turn.",
            "name": "Hyogoro",
            "images": "OP01-020.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-021",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] This Character can also attack your opponent's active Characters.",
            "name": "Franky",
            "images": "OP01-021.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-022",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Give up to 2 of your opponent's Characters −2000 power during this turn.",
            "name": "Brook",
            "images": "OP01-022.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-023",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Marco",
            "images": "OP01-023.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-024",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] This Character cannot be K.O.'d in battle by ＜Strike＞ attribute Characters.[Activate: Main] [Once Per Turn] Give this Character up to 2 rested DON!! cards.",
            "name": "Monkey.D.Luffy",
            "images": "OP01-024.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-024",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] This Character cannot be K.O.'d in battle by ＜Strike＞  attribute Characters.[Activate: Main] [Once Per Turn] Give this Character up to 2 rested DON!! cards.",
            "name": "Monkey.D.Luffy",
            "images": "OP01-024_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-025",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)",
            "name": "Roronoa Zoro",
            "images": "OP01-025.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-025",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)",
            "name": "Roronoa Zoro",
            "images": "OP01-025_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-026",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, K.O. up to 1 of your opponent's Characters with 4000 power or less.",
            "name": "Gum-Gum Fire-Fist Pistol Red Hawk",
            "images": "OP01-026.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-027",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Give up to 1 of your opponent's Characters −10000 power during this turn.",
            "name": "Round Table",
            "images": "OP01-027.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-028",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Give up to 1 of your opponent's Leader or Character cards −2000 power during this turn.",
            "name": "Green Star Rafflesia",
            "images": "OP01-028.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-029",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle. Then, if you have 2 or less Life cards, that card gains an additional +2000 power.",
            "name": "Radical Beam!!",
            "images": "OP01-029.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-030",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] Look at 5 cards from the top of your deck; reveal up to 1 {Straw Hat Crew} type Character card and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "In Two Years!! At the Sabaody Archipelago!!",
            "images": "OP01-030.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-031",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] You can trash 1 {Land of Wano} type card from your hand: Set up to 2 of your DON!! cards as active.",
            "name": "Kouzuki Oden",
            "images": "OP01-031.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-031",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] You can trash 1 {Land of Wano} type card from your hand: Set up to 2 of your DON!! cards as active.",
            "name": "Kouzuki Oden",
            "images": "OP01-031_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-032",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] If your opponent has 2 or more rested Characters, this Character gains +2000 power.",
            "name": "Ashura Doji",
            "images": "OP01-032.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-033",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Rest up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "Izo",
            "images": "OP01-033.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-034",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] [When Attacking] Set up to 1 of your DON!! cards as active.",
            "name": "Inuarashi",
            "images": "OP01-034.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-034",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] [When Attacking] Set up to 1 of your DON!! cards as active.",
            "name": "Inuarashi",
            "images": "OP01-034_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-035",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] [Once Per Turn] Rest up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Okiku",
            "images": "OP01-035.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-036",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Otsuru",
            "images": "OP01-036.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-037",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Kawamatsu",
            "images": "OP01-037.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-038",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] K.O. up to 1 of your opponent's rested Characters with a cost of 2 or less.[On K.O.] Your opponent chooses 1 card from your hand; trash that card.",
            "name": "Kanjuro",
            "images": "OP01-038.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-039",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[DON!! x1] [On Block] If you have 3 or more Characters, draw 1 card.",
            "name": "Killer",
            "images": "OP01-039.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-040",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader is [Kouzuki Oden], play up to 1 {The Akazaya Nine} type Character card with a cost of 3 or less from your hand.[DON!! x1] [When Attacking] [Once Per Turn] Set up to 1 of your {The Akazaya Nine} type Character cards with a cost of 3 or less as active.",
            "name": "Kin'emon",
            "images": "OP01-040.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-040",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader is [Kouzuki Oden], play up to 1 {The Akazaya Nine} type Character card with a cost of 3 or less from your hand.[DON!! x1] [When Attacking] [Once Per Turn] Set up to 1 of your {The Akazaya Nine} type Character cards with a cost of 3 or less as active.",
            "name": "Kin'emon",
            "images": "OP01-040_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-041",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] ➀ (You may rest the specified number of DON!! cards in your cost area) You may rest this Character: Look at 5 cards from the top of your deck; reveal up to 1 {Land of Wano} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Kouzuki Momonosuke",
            "images": "OP01-041.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-042",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] ③ (You may rest the specified number of DON!! cards in your cost area.): If your Leader is [Kouzuki Oden], set up to 1 of your {Land of Wano} type Character cards with a cost of 3 or less as active.",
            "name": "Komurasaki",
            "images": "OP01-042.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-043",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Shinobu",
            "images": "OP01-043.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-044",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] If you don't have [Penguin], play up to 1 [Penguin] from your hand.",
            "name": "Shachi",
            "images": "OP01-044.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-045",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Jean Bart",
            "images": "OP01-045.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-046",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] If your Leader is [Kouzuki Oden], set up to 2 of your DON!! cards as active.",
            "name": "Denjiro",
            "images": "OP01-046.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-047",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] You may return 1 Character to your hand: Play up to 1 Character card with a cost of 3 or less from your hand.",
            "name": "Trafalgar Law",
            "images": "OP01-047.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-047",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] You may return 1 Character to your hand: Play up to 1 Character card with a cost of 3 or less from your hand.",
            "name": "Trafalgar Law",
            "images": "OP01-047_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-048",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Rest up to 1 of your opponent's Characters with a cost of 3 or less.",
            "name": "Nekomamushi",
            "images": "OP01-048.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-048",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Rest up to 1 of your opponent's Characters with a cost of 3 or less.",
            "name": "Nekomamushi",
            "images": "OP01-048_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-049",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Play up to 1 {Heart Pirates} type Character card other than [Bepo] with a cost of 4 or less from your hand.",
            "name": "Bepo",
            "images": "OP01-049.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-050",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] If you don't have [Shachi], play up to 1 [Shachi] from your hand.",
            "name": "Penguin",
            "images": "OP01-050.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-051",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Opponent's Turn] If this Character is rested, your opponent cannot attack any card other than the Character [Eustass\"Captain\"Kid].[Activate: Main] [Once Per Turn] You may rest this Character: Play up to 1 Character card with a cost of 3 or less from your hand.",
            "name": "Eustass\"Captain\"Kid",
            "images": "OP01-051.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-051",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Opponent's Turn] If this Character is rested, your opponent cannot attack any card other than the Character [Eustass\"Captain\"Kid].[Activate: Main] [Once Per Turn] You may rest this Character: Play up to 1 Character card with a cost of 3 or less from your hand.",
            "name": "Eustass\"Captain\"Kid",
            "images": "OP01-051_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-052",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] [Once Per Turn] If you have 2 or more rested Characters, draw 1 card.",
            "name": "Raizo",
            "images": "OP01-052.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-053",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Wire",
            "images": "OP01-053.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-054",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 4 or less.",
            "name": "X.Drake",
            "images": "OP01-054.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-055",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] You may rest 2 of your Characters: Draw 2 cards.",
            "name": "You Can Be My Samurai!!",
            "images": "OP01-055.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-056",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] K.O. up to 2 of your opponent's rested Characters with a cost of 5 or less.",
            "name": "Demon Face",
            "images": "OP01-056.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-057",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle. Then, set up to 1 of your Characters as active.",
            "name": "Paradise Waterfall",
            "images": "OP01-057.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-058",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, rest up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "Punk Gibson",
            "images": "OP01-058.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-059",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] You may trash 1 {Land of Wano} type card from your hand: Set up to 1 of your {Land of Wano} type Character cards with a cost of 3 or less as active.",
            "name": "BE-BENG!!",
            "images": "OP01-059.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-060",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x2] [When Attacking] ➀ (You may rest the specified number of DON!! cards in your cost area.): Reveal 1 card from the top of your deck. If that card is a {The Seven Warlords of the Sea} type Character card with a cost of 4 or less, you may play that card rested.",
            "name": "Donquixote Doflamingo",
            "images": "OP01-060.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-060",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x2] [When Attacking] ➀ (You may rest the specified number of DON!! cards in your cost area.): Reveal 1 card from the top of your deck. If that card is a {The Seven Warlords of the Sea} type Character card with a cost of 4 or less, you may play that card rested.",
            "name": "Donquixote Doflamingo",
            "images": "OP01-060_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-061",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [Your Turn] [Once Per Turn] When your opponent's Character is K.O.'d, add up to 1 DON!! card from your DON!! deck and set it as active.",
            "name": "Kaido",
            "images": "OP01-061.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-061",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [Your Turn] [Once Per Turn] When your opponent's Character is K.O.'d, add up to 1 DON!! card from your DON!! deck and set it as active.",
            "name": "Kaido",
            "images": "OP01-061_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-062",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] When you activate an Event, you may draw 1 card if you have 4 or less cards in your hand and haven't drawn a card using this Leader's effect during this turn.",
            "name": "Crocodile",
            "images": "OP01-062.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-062",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] When you activate an Event, you may draw 1 card if you have 4 or less cards in your hand and haven't drawn a card using this Leader's effect during this turn.",
            "name": "Crocodile",
            "images": "OP01-062_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-063",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Activate: Main] You may rest this Character: Choose 1 card from your opponent's hand; your opponent reveals that card. If the revealed card is an Event, place up to 1 card from your opponent's Life area at the bottom of the owner's deck.",
            "name": "Arlong",
            "images": "OP01-063.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-064",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may trash 1 card from your hand: Return up to 1 of your opponent's Characters with a cost of 3 or less to the owner's hand.",
            "name": "Alvida",
            "images": "OP01-064.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-064",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may trash 1 card from your hand: Return up to 1 of your opponent's Characters with a cost of 3 or less to the owner's hand.",
            "name": "Alvida",
            "images": "OP01-064_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-065",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Vergo",
            "images": "OP01-065.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-066",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Krieg",
            "images": "OP01-066.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-067",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Banish] (When this card deals damage, the target card is trashed without activating its Trigger.)[DON!! x1] Give blue Events in your hand −1 cost.",
            "name": "Crocodile",
            "images": "OP01-067.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-067",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Banish] (When this card deals damage, the target card is trashed without activating its Trigger.)[DON!! x1] Give blue Events in your hand −1 cost.",
            "name": "Crocodile",
            "images": "OP01-067_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-068",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Your Turn] This Character gains [Double Attack] if you have 5 or more cards in your hand.(This card deals 2 damage.)",
            "name": "Gecko Moria",
            "images": "OP01-068.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-069",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] Play up to 1 [Smiley] from your deck, then shuffle your deck.",
            "name": "Caesar Clown",
            "images": "OP01-069.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-070",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Place up to 1 Character with a cost of 7 or less at the bottom of the owner's deck.",
            "name": "Dracule Mihawk",
            "images": "OP01-070.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-070",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Place up to 1 Character with a cost of 7 or less at the bottom of the owner's deck.",
            "name": "Dracule Mihawk",
            "images": "OP01-070_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-071",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Place up to 1 Character with a cost of 3 or less at the bottom of the owner's deck.",
            "name": "Jinbe",
            "images": "OP01-071.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-072",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] This Character gains +1000 power for every card in your hand.",
            "name": "Smiley",
            "images": "OP01-072.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-073",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] Look at 5 cards from the top of your deck and place them at the top or bottom of the deck in any order.",
            "name": "Donquixote Doflamingo",
            "images": "OP01-073.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-073",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] Look at 5 cards from the top of your deck and place them at the top or bottom of the deck in any order.",
            "name": "Donquixote Doflamingo ",
            "images": "OP01-073_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-074",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On K.O.] Play up to 1 [Pacifista] with a cost of 4 or less from your hand.",
            "name": "Bartholomew Kuma",
            "images": "OP01-074.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-075",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "EffectUnder the rules of this game, you may have any number of this card in your deck.[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Pacifista",
            "images": "OP01-075.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-076",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Bellamy",
            "images": "OP01-076.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-077",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck and place them at the top or bottom of the deck in any order.",
            "name": "Perona",
            "images": "OP01-077.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-077",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck and place them at the top or bottom of the deck in any order.",
            "name": "Perona",
            "images": "OP01-077_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-078",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[DON!! x1] [When Attacking]/[On Block] Draw 1 card if you have 5 or less cards in your hand.",
            "name": "Boa Hancock",
            "images": "OP01-078.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-078",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[DON!! x1] [When Attacking]/[On Block] Draw 1 card if you have 5 or less cards in your hand.",
            "name": "Boa Hancock",
            "images": "OP01-078_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-079",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On K.O.] If your Leader has the {Baroque Works} type, add up to 1 Event from your trash to your hand.",
            "name": "Ms. All Sunday",
            "images": "OP01-079.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-080",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] Draw 1 card.",
            "name": "Miss Doublefinger(Zala)",
            "images": "OP01-080.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-081",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Mocha",
            "images": "OP01-081.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-082",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Monet",
            "images": "OP01-082.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-083",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] If your Leader has the {Baroque Works} type, this Character gains +1000 power for every 2 Events in your trash.",
            "name": "Mr.1(Daz.Bonez)",
            "images": "OP01-083.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-084",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Look at 5 cards from the top of your deck; reveal up to 1 {Baroque Works} type Event card and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Mr.2.Bon.Kurei(Bentham)",
            "images": "OP01-084.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-085",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader has the {Baroque Works} type, select up to 1 of your opponent's Characters with a cost of 4 or less. The selected Character cannot attack until the end of your opponent's next turn.",
            "name": "Mr.3(Galdino)",
            "images": "OP01-085.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-086",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, return up to 1 active Character with a cost of 3 or less to the owner's hand.",
            "name": "Overheat",
            "images": "OP01-086.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-087",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Play up to 1 {Baroque Works} type Character card with a cost of 3 or less from your hand.",
            "name": "Officer Agents",
            "images": "OP01-087.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-088",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle. Then, look at 3 cards from the top of your deck and place them at the top or bottom of the deck in any order.",
            "name": "Desert Spada",
            "images": "OP01-088.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-089",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] If your Leader has the {The Seven Warlords of the Sea} type, return up to 1 Character with a cost of 5 or less to the owner's hand.",
            "name": "Crescent Cutlass",
            "images": "OP01-089.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-090",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] Look at 5 cards from the top of your deck; reveal up to 1 {Baroque Works} type card other than [Baroque Works] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Baroque Works",
            "images": "OP01-090.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-091",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] If you have 10 DON!! cards on your field, give all of your opponent's Characters −1000 power.",
            "name": "King",
            "images": "OP01-091.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-091",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] If you have 10 DON!! cards on your field, give all of your opponent's Characters −1000 power.",
            "name": "King",
            "images": "OP01-091_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-092",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Urashima",
            "images": "OP01-092.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-093",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] ① (You may rest the specified number of DON!! cards in your cost area.): Add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Ulti",
            "images": "OP01-093.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-093",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] ① (You may rest the specified number of DON!! cards in your cost area.): Add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Ulti",
            "images": "OP01-093_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-094",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −6 (You may return the specified number of DON!! cards from your field to your DON!! deck.): If your Leader has the {Animal Kingdom Pirates} type, K.O. all Characters other than this Character.",
            "name": "Kaido",
            "images": "OP01-094.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-094",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −6 (You may return the specified number of DON!! cards from your field to your DON!! deck.): If your Leader has the {Animal Kingdom Pirates} type, K.O. all Characters other than this Character.",
            "name": "Kaido",
            "images": "OP01-094_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-095",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw 1 card if you have 8 or more DON!! cards on your field.",
            "name": "Kyoshirou",
            "images": "OP01-095.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-096",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 3 or less and up to 1 of your opponent's Characters with a cost of 2 or less.",
            "name": "King",
            "images": "OP01-096.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-096",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 3 or less and up to 1 of your opponent's Characters with a cost of 2 or less.",
            "name": "King",
            "images": "OP01-096_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-097",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains [Rush] during this turn. Then, give up to 1 of your opponent's Characters −2000 power during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Queen",
            "images": "OP01-097.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-097",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains [Rush] during this turn. Then, give up to 1 of your opponent's Characters −2000 power during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Queen",
            "images": "OP01-097_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-098",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Reveal up to 1 [Artificial Devil Fruit SMILE] from your deck and add it to your hand. Then, shuffle your deck.",
            "name": "Kurozumi Orochi",
            "images": "OP01-098.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-099",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect{Kurozumi Clan} type Characters other than your [Kurozumi Semimaru] cannot be K.O.'d in battle.",
            "name": "Kurozumi Semimaru",
            "images": "OP01-099.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-100",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Kurozumi Higurashi",
            "images": "OP01-100.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-101",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may trash 1 card from your hand: Add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Sasaki",
            "images": "OP01-101.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-102",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your opponent trashes 1 card from their hand.",
            "name": "Jack",
            "images": "OP01-102.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-102",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your opponent trashes 1 card from their hand.",
            "name": "Jack",
            "images": "OP01-102_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-103",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Scratchmen Apoo",
            "images": "OP01-103.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-104",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Speed",
            "images": "OP01-104.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-105",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Choose 2 cards from your opponent's hand; your opponent reveals those cards.",
            "name": "Bao Huang",
            "images": "OP01-105.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-106",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Basil Hawkins",
            "images": "OP01-106.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-107",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Babanuki",
            "images": "OP01-107.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-108",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Hitokiri Kamazo",
            "images": "OP01-108.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-109",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] If you have 8 or more DON!! cards on your field, this Character gains +1000 power.",
            "name": "Who's.Who",
            "images": "OP01-109.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-109",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] If you have 8 or more DON!! cards on your field, this Character gains +1000 power.",
            "name": "Who's.Who",
            "images": "OP01-109_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-110",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Fukurokuju",
            "images": "OP01-110.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-111",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Block] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains +1000 power during this turn.",
            "name": "Black Maria",
            "images": "OP01-111.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-112",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character can also attack your opponent's active Characters during this turn.",
            "name": "Page One",
            "images": "OP01-112.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-113",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] Add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Holedem",
            "images": "OP01-113.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-114",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your opponent trashes 1 card from their hand.",
            "name": "X.Drake",
            "images": "OP01-114.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-115",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] K.O. up to 1 of your opponent's Characters with a cost of 2 or less, then add up to 1 DON!! card from your DON!! deck and set it as active.",
            "name": "Elephant's Marchoo",
            "images": "OP01-115.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-116",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] Look at 5 cards from the top of your deck; play up to 1 {SMILE} type Character card with a cost of 3 or less. Then, place the rest at the bottom of your deck in any order.",
            "name": "Artificial Devil Fruit SMILE",
            "images": "OP01-116.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-117",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 1 of your opponent's Characters with a cost of 6 or less.",
            "name": "Sheep's Horn",
            "images": "OP01-117.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-118",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Counter] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Up to 1 of your Leader or Character cards gains +2000 power during this battle. Then, draw 1 card.",
            "name": "Ulti-Mortar",
            "images": "OP01-118.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-119",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, if you have 2 or less Life cards, add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Thunder Bagua",
            "images": "OP01-119.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-120",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)[When Attacking] Your opponent cannot activate a [Blocker] Character that has 2000 or less power during this battle.",
            "name": "Shanks",
            "images": "OP01-120.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-120",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)[When Attacking] Your opponent cannot activate a [Blocker] Character that has 2000 or less power during this battle.",
            "name": "Shanks",
            "images": "OP01-120_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-120",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)[When Attacking] Your opponent cannot activate a [Blocker] Character that has 2000 or less power during this battle.",
            "name": "Shanks",
            "images": "OP01-120_p2.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-121",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "EffectAlso treat this card's name as [Kouzuki Oden] according to the rules.[Double Attack] (This card deals 2 damage.)[Banish] (When this card deals damage, the target card is trashed without activating its Trigger.)",
            "name": "Yamato",
            "images": "OP01-121.png",
            "collected": "false"
        },
        {
            "deck": "OP01",
            "card_code": "OP01-121",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "EffectAlso treat this card's name as [Kouzuki Oden] according to the rules.[Double Attack] (This card deals 2 damage.)[Banish] (When this card deals damage, the target card is trashed without activating its Trigger.)",
            "name": "Yamato",
            "images": "OP01-121_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[End of Your Turn] Add 1 card from the top of your Life cards to your hand.",
            "name": "Edward.Newgate",
            "images": "OP02-001.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[End of Your Turn] Add 1 card from the top of your Life cards to your hand.",
            "name": "Edward.Newgate",
            "images": "OP02-001_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-002",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] When this Leader or any of your Characters is given a DON!! card, give up to 1 of your opponent's Characters with a cost of 7 or less −1 cost during this turn.",
            "name": "Monkey.D.Garp",
            "images": "OP02-002.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-002",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] When this Leader or any of your Characters is given a DON!! card, give up to 1 of your opponent's Characters with a cost of 7 or less −1 cost during this turn.",
            "name": "Monkey.D.Garp",
            "images": "OP02-002_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-003",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Atmos",
            "images": "OP02-003.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-004",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Up to 1 of your Leader gains +2000 power until the start of your next turn. Then, you cannot add Life cards to your hand using your own effects during this turn.[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with 3000 power or less.",
            "name": "Edward.Newgate",
            "images": "OP02-004.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-004",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Up to 1 of your Leader gains +2000 power until the start of your next turn. Then, you cannot add Life cards to your hand using your own effects during this turn.[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with 3000 power or less.",
            "name": "Edward.Newgate",
            "images": "OP02-004_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-005",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at up to 5 cards from the top of your deck; reveal up to 1 red Character with a cost of 1 and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Curly.Dadan",
            "images": "OP02-005.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Kingdew",
            "images": "OP02-006.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Thatch",
            "images": "OP02-007.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-008",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] If you have 2 or less Life cards and your Leader's type includes \"Whitebeard Pirates\", this Character gains [Rush].(This card can attack on the turn in which it is played.)",
            "name": "Jozu",
            "images": "OP02-008.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-009",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader's type includes \"Whitebeard Pirates\", give up to 1 of your opponent's Characters −4000 power during this turn and add 1 card from the top of your Life cards to your hand.",
            "name": "Squard",
            "images": "OP02-009.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-009",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader's type includes \"Whitebeard Pirates\", give up to 1 of your opponent's Characters −4000 power during this turn and add 1 card from the top of your Life cards to your hand.",
            "name": "Squard",
            "images": "OP02-009_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: Play up to 1 red Character other than [Dogura] with a cost of 1 from your hand.",
            "name": "Dogura",
            "images": "OP02-010.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-011",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] K.O. up to 1 of your opponent's Characters with 3000 power or less.",
            "name": "Vista",
            "images": "OP02-011.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-012",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Blenheim",
            "images": "OP02-012.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-013",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 2 of your opponent's Characters −3000 power during this turn. Then, if your Leader's type includes \"Whitebeard Pirates\", this Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Portgas.D.Ace",
            "images": "OP02-013.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-013",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 2 of your opponent's Characters −3000 power during this turn. Then, if your Leader's type includes \"Whitebeard Pirates\", this Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Portgas.D.Ace",
            "images": "OP02-013_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-013",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 2 of your opponent's Characters −3000 power during this turn. Then, if your Leader's type includes \"Whitebeard Pirates\", this Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Portgas.D.Ace",
            "images": "OP02-013_p2.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-014",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] This Character can also attack your opponent's active Characters.",
            "name": "Whitey Bay",
            "images": "OP02-014.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-015",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: Up to 1 of your red Characters with a cost of 1 gains +3000 power during this turn.",
            "name": "Makino",
            "images": "OP02-015.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-016",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Up to 1 of your red Characters with a cost of 1 gains +3000 power during this turn.",
            "name": "Magura",
            "images": "OP02-016.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-017",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with 2000 power or less.",
            "name": "Masked Deuce",
            "images": "OP02-017.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-017",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with 2000 power or less.",
            "name": "Masked Deuce",
            "images": "OP02-017_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-018",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On K.O.] You may trash 1 card with a type including \"Whitebeard Pirates\" from your hand: If you have 2 or less Life cards, play this Character card from your trash rested.",
            "name": "Marco",
            "images": "OP02-018.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-018",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On K.O.] You may trash 1 card with a type including \"Whitebeard Pirates\" from your hand: If you have 2 or less Life cards, play this Character card from your trash rested.",
            "name": "Marco",
            "images": "OP02-018_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-019",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] All of your Characters with a type including \"Whitebeard Pirates\" gain +1000 power.",
            "name": "Rakuyo",
            "images": "OP02-019.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-020",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "LittleOars Jr.",
            "images": "OP02-020.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-021",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] If your Leader's type includes \"Whitebeard Pirates\", K.O. up to 1 of your opponent's Characters with 3000 power or less.",
            "name": "Seaquake",
            "images": "OP02-021.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-022",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] Look at 5 cards from the top of your deck; reveal up to 1 Character card with a type including \"Whitebeard Pirates\" and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Whitebeard Pirates",
            "images": "OP02-022.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-023",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] If you have 3 or less Life cards, you cannot add Life cards to your hand using your own effects during this turn.",
            "name": "You May Be a Fool...but I Still Love You",
            "images": "OP02-023.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-024",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Your Turn] If you have 1 or less Life cards, your [Edward.Newgate] and all your Characters with a type including \"Whitebeard Pirates\" gain +2000 power.",
            "name": "Moby Dick",
            "images": "OP02-024.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-025",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] If you have 1 or less Characters, the next time you play a {Land of Wano} type Character card with a cost of 3 or more from your hand during this turn, the cost will be reduced by 1.",
            "name": "Kin'emon",
            "images": "OP02-025.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-025",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] [Once Per Turn] If you have 1 or less Characters, the next time you play a {Land of Wano} type Character card with a cost of 3 or more from your hand during this turn, the cost will be reduced by 1.",
            "name": "Kin'emon",
            "images": "OP02-025_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-026",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Once Per Turn] When you play a Character with no base effect from your hand, if you have 3 or less Characters, set up to 2 of your DON!! cards as active.",
            "name": "Sanji",
            "images": "OP02-026.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-026",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Once Per Turn] When you play a Character with no base effect from your hand, if you have 3 or less Characters, set up to 2 of your DON!! cards as active.",
            "name": "Sanji",
            "images": "OP02-026_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-027",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "EffectIf all of your DON!! cards are rested, this Character cannot be removed from the field by your opponent's effects.",
            "name": "Inuarashi",
            "images": "OP02-027.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-028",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Usopp",
            "images": "OP02-028.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-029",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[End of Your Turn] Set up to 1 of your DON!! cards as active.",
            "name": "Carrot",
            "images": "OP02-029.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-030",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] ③ (You may rest the specified number of DON!! cards in your cost area.): Set this Character as active.[On K.O.] Play up to 1 green {Land of Wano} type Character card with a cost of 3 from your deck. Then, shuffle your deck.",
            "name": "Kouzuki Oden",
            "images": "OP02-030.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-030",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] ③ (You may rest the specified number of DON!! cards in your cost area.): Set this Character as active.[On K.O.] Play up to 1 green {Land of Wano} type Character card with a cost of 3 from your deck. Then, shuffle your deck.",
            "name": "Kouzuki Oden",
            "images": "OP02-030_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-031",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "EffectIf you have a [Kouzuki Oden] Character, this Character gains [Blocker].(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Kouzuki Toki",
            "images": "OP02-031.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-031",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "EffectIf you have a [Kouzuki Oden] Character, this Character gains [Blocker].(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Kouzuki Toki",
            "images": "OP02-031_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-032",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] ② (You may rest the specified number of DON!! cards in your cost area.): Set up to 1 of your {Minks} type Characters with a cost of 5 or less as active.",
            "name": "Shishilian",
            "images": "OP02-032.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-033",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Jinbe",
            "images": "OP02-033.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-034",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Rest up to 1 of your opponent's Characters with a cost of 2 or less.",
            "name": "Tony Tony.Chopper",
            "images": "OP02-034.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-035",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] ➀ (You may rest the specified number of DON!! cards in your cost area.) You may return this Character to the owner's hand: Play up to 1 Character with a cost of 3 from your hand.",
            "name": "Trafalgar Law",
            "images": "OP02-035.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-036",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play]/[When Attacking] ➀ (You may rest the specified number of DON!! cards in your cost area.): Look at 3 cards from the top of your deck; reveal up to 1 {FILM} type card other than [Nami] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Nami",
            "images": "OP02-036.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-036",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play]/[When Attacking] ➀ (You may rest the specified number of DON!! cards in your cost area.): Look at 3 cards from the top of your deck; reveal up to 1 {FILM} type card other than [Nami] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Nami",
            "images": "OP02-036_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-037",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Play up to 1 {FILM} or {Straw Hat Crew} type Character card with a cost of 2 or less from your hand.",
            "name": "Nico Robin",
            "images": "OP02-037.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-038",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Nekomamushi",
            "images": "OP02-038.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-039",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Franky",
            "images": "OP02-039.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-040",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Play up to 1 {FILM} or {Straw Hat Crew} type Character card with a cost of 3 or less from your hand.",
            "name": "Brook",
            "images": "OP02-040.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-041",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] Play up to 1 {FILM} or {Straw Hat Crew} type Character card with a cost of 4 or less from your hand.",
            "name": "Monkey.D.Luffy",
            "images": "OP02-041.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-041",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] Play up to 1 {FILM} or {Straw Hat Crew} type Character card with a cost of 4 or less from your hand.",
            "name": "Monkey.D.Luffy",
            "images": "OP02-041_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-042",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "EffectAlso treat this card's name as [Kouzuki Oden] according to the rules.[On Play] Rest up to 1 of your opponent's Characters with a cost of 6 or less.",
            "name": "Yamato",
            "images": "OP02-042.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-043",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Roronoa Zoro",
            "images": "OP02-043.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-044",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Play up to 1 {Minks} type Character card other than [Wanda] with a cost of 3 or less from your hand.",
            "name": "Wanda",
            "images": "OP02-044.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-045",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +6000 power during this battle. Then, play up to 1 Character card with a cost of 3 or less and no base effect from your hand.",
            "name": "Three Sword Style Oni Giri",
            "images": "OP02-045.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-046",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] K.O. up to 1 of your opponent's rested Characters with a cost of 4 or less.",
            "name": "Diable Jambe Venaison Shoot",
            "images": "OP02-046.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-047",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] Rest up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "Paradise Totsuka",
            "images": "OP02-047.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-048",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] You may trash 1 {Land of Wano} type card from your hand and rest this Stage: Set up to 1 of your DON!! cards as active.",
            "name": "Land of Wano",
            "images": "OP02-048.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-049",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[End of Your Turn] If you have 0 cards in your hand, draw 2 cards.",
            "name": "Emporio.Ivankov",
            "images": "OP02-049.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-049",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[End of Your Turn] If you have 0 cards in your hand, draw 2 cards.",
            "name": "Emporio.Ivankov",
            "images": "OP02-049_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-050",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "EffectIf you have 1 or less cards in your hand, this Character gains +2000 power.[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Inazuma",
            "images": "OP02-050.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-051",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw card(s) so that you have 3 cards in your hand and then play up to 1 blue {Impel Down} type Character card with a cost of 6 or less from your hand.",
            "name": "Emporio.Ivankov",
            "images": "OP02-051.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-051",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw card(s) so that you have 3 cards in your hand and then play up to 1 blue {Impel Down} type Character card with a cost of 6 or less from your hand.",
            "name": "Emporio.Ivankov",
            "images": "OP02-051_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-052",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If you have [Mohji], draw 2 cards and trash 1 card from your hand.",
            "name": "Cabaji",
            "images": "OP02-052.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-053",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Crocodile",
            "images": "OP02-053.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-054",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Gecko Moria",
            "images": "OP02-054.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-055",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Dracule Mihawk",
            "images": "OP02-055.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-056",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 3 cards from the top of your deck and place them at the top or bottom of the deck in any order.[DON!! x1] [When Attacking] You may trash 1 card from your hand: Place up to 1 of your opponent's Characters with a cost of 1 or less at the bottom of the owner's deck.",
            "name": "Donquixote Doflamingo",
            "images": "OP02-056.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-057",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 2 cards from the top of your deck; reveal up to 1 {The Seven Warlords of the Sea} type card and add it to your hand. Then, place the rest at the top or bottom of the deck in any order.",
            "name": "Bartholomew Kuma",
            "images": "OP02-057.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-058",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 blue {Impel Down} type card other than [Buggy] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Buggy",
            "images": "OP02-058.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-058",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 blue {Impel Down} type card other than [Buggy] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Buggy",
            "images": "OP02-058_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-059",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] Draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.",
            "name": "Boa Hancock",
            "images": "OP02-059.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-059",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] Draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.",
            "name": "Boa Hancock",
            "images": "OP02-059_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-060",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Mohji",
            "images": "OP02-060.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-061",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] If you have 1 or less cards in your hand, your opponent cannot activate the [Blocker] of any Character with a cost of 5 or less during this battle.",
            "name": "Morley",
            "images": "OP02-061.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-062",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play]/[When Attacking] You may trash 2 cards from your hand: Return up to 1 Character with a cost of 4 or less to the owner's hand. Then, this Character gains [Double Attack] during this turn.(This card deals 2 damage.)",
            "name": "Monkey.D.Luffy",
            "images": "OP02-062.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-062",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play]/[When Attacking] You may trash 2 cards from your hand: Return up to 1 Character with a cost of 4 or less to the owner's hand. Then, this Character gains [Double Attack] during this turn.(This card deals 2 damage.)",
            "name": "Monkey.D.Luffy",
            "images": "OP02-062_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-063",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Add up to 1 blue Event card with a cost of 1 from your trash to your hand.",
            "name": "Mr.1(Daz.Bonez)",
            "images": "OP02-063.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-064",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may trash 1 card from your hand: Place up to 1 Character with a cost of 2 or less at the bottom of the owner's deck. Then, at the end of this battle, place this Character at the bottom of the owner's deck.",
            "name": "Mr.2.Bon.Kurei(Bentham)",
            "images": "OP02-064.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-065",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[End of Your Turn] You may trash 1 card from your hand: Set this Character as active.",
            "name": "Mr.3(Galdino)",
            "images": "OP02-065.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-066",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] You may trash 2 cards from your hand: If your Leader has the {Impel Down} type, draw up to 2 cards.",
            "name": "Impel Down All Stars",
            "images": "OP02-066.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-067",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] Return up to 1 Character with a cost of 4 or less to the owner's hand.",
            "name": "Arabesque Brick Fist",
            "images": "OP02-067.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-068",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Counter] You may trash 1 card from your hand: Up to 1 of your Leader or Character cards gains +3000 power during this battle.",
            "name": "Gum-Gum Rain",
            "images": "OP02-068.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-069",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +6000 power during this battle. Then, draw cards so that you have 2 cards in your hand.",
            "name": "DEATH WINK",
            "images": "OP02-069.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-070",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] You may rest this Stage: If your Leader is [Emporio.Ivankov], draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.",
            "name": "New Kama Land",
            "images": "OP02-070.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-071",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] [Once Per Turn] When a DON!! card on the field is returned to your DON!! deck, this Leader gains +1000 power during this turn.",
            "name": "Magellan",
            "images": "OP02-071.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-071",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] [Once Per Turn] When a DON!! card on the field is returned to your DON!! deck, this Leader gains +1000 power during this turn.",
            "name": "Magellan",
            "images": "OP02-071_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-072",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[When Attacking] DON!! −4 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 3 or less. Then, this Leader gains +1000 power during this turn.",
            "name": "Zephyr",
            "images": "OP02-072.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-072",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[When Attacking] DON!! −4 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 3 or less. Then, this Leader gains +1000 power during this turn.",
            "name": "Zephyr",
            "images": "OP02-072_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-073",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Play up to 1 {Jailer Beast} type Character card from your hand.",
            "name": "Little Sadi",
            "images": "OP02-073.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-073",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Play up to 1 {Jailer Beast} type Character card from your hand.",
            "name": "Little Sadi",
            "images": "OP02-073_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-074",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "EffectYour [Blugori] gains [Blocker].(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Saldeath",
            "images": "OP02-074.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-075",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Shiki",
            "images": "OP02-075.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-076",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 1 or less.",
            "name": "Shiryu",
            "images": "OP02-076.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-077",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Solitaire",
            "images": "OP02-077.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-078",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Play up to 1 {SMILE} type Character card other than [Daifugo] with a cost of 3 or less from your hand.",
            "name": "Daifugo",
            "images": "OP02-078.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-079",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "Douglas Bullet",
            "images": "OP02-079.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-080",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Dobon",
            "images": "OP02-080.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-081",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Domino",
            "images": "OP02-081.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-082",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] DON!! −8 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains +792000 power during this turn.",
            "name": "Byrnndi World",
            "images": "OP02-082.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-083",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 purple {Impel Down} type card other than [Hannyabal] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Hannyabal",
            "images": "OP02-083.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-084",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Blugori",
            "images": "OP02-084.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-085",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your opponent returns 1 DON!! card from their field to their DON!! deck.[Opponent's Turn] When this Character is K.O.'d, your opponent returns 2 DON!! cards from their field to their DON!! deck.",
            "name": "Magellan",
            "images": "OP02-085.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-085",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your opponent returns 1 DON!! card from their field to their DON!! deck.[Opponent's Turn] When this Character is K.O.'d, your opponent returns 2 DON!! cards from their field to their DON!! deck.",
            "name": "Magellan",
            "images": "OP02-085_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-086",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On K.O.] If your Leader has the {Impel Down} type, add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Minokoala",
            "images": "OP02-086.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-086",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On K.O.] If your Leader has the {Impel Down} type, add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Minokoala",
            "images": "OP02-086_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-087",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Double Attack] (This card deals 2 damage.)[On K.O.] If your Leader has the {Impel Down} type, add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Minotaur",
            "images": "OP02-087.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-088",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Sphinx",
            "images": "OP02-088.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-089",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Counter] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Give up to a total of 2 of your opponent's Leader or Character cards −3000 power during this turn.",
            "name": "Judgment of Hell",
            "images": "OP02-089.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-090",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Give up to 1 of your opponent's Characters −3000 power during this turn.",
            "name": "Hydra",
            "images": "OP02-090.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-091",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Add up to 1 DON!! card from your DON!! deck and set it as active.",
            "name": "Venom Road",
            "images": "OP02-091.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-092",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] You may trash 1 card from your hand and rest this Stage: Look at 3 cards from the top of your deck; reveal up to 1 {Impel Down} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Impel Down",
            "images": "OP02-092.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-093",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [Activate: Main] [Once Per Turn] Give up to 1 of your opponent's Characters −1 cost during this turn. Then, if there is a Character with a cost of 0, this Leader gains +1000 power during this turn.",
            "name": "Smoker",
            "images": "OP02-093.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-093",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [Activate: Main] [Once Per Turn] Give up to 1 of your opponent's Characters −1 cost during this turn. Then, if there is a Character with a cost of 0, this Leader gains +1000 power during this turn.",
            "name": "Smoker",
            "images": "OP02-093_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-094",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Once Per Turn] When this Character battles and K.O.'s your opponent's Character, set this Character as active.",
            "name": "Isuka",
            "images": "OP02-094.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-095",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "EffectIf there is a Character with a cost of 0, this Character gains [Banish].(When this card deals damage, the target card is trashed without activating its Trigger.)",
            "name": "Onigumo",
            "images": "OP02-095.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-096",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw 1 card.[When Attacking] Give up to 1 of your opponent's Characters −4 cost during this turn.",
            "name": "Kuzan",
            "images": "OP02-096.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-096",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw 1 card.[When Attacking] Give up to 1 of your opponent's Characters −4 cost during this turn.",
            "name": "Kuzan",
            "images": "OP02-096_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-097",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Komille",
            "images": "OP02-097.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-098",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost of 3 or less.",
            "name": "Koby",
            "images": "OP02-098.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-099",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Sakazuki",
            "images": "OP02-099.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-099",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Sakazuki",
            "images": "OP02-099_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-100",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "EffectIf you have [Fullbody], this Character cannot be K.O.'d in battle.",
            "name": "Jango",
            "images": "OP02-100.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-101",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] If there is a Character with a cost of 0, your opponent cannot activate the [Blocker] of any Character with a cost of 5 or less during this battle.",
            "name": "Strawberry",
            "images": "OP02-101.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-102",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "EffectThis Character cannot be K.O.'d by effects.[When Attacking] If there is a Character with a cost of 0, this Character gains +2000 power during this battle.",
            "name": "Smoker",
            "images": "OP02-102.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-103",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Sengoku",
            "images": "OP02-103.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-104",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Sentomaru",
            "images": "OP02-104.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-105",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters −3 cost during this turn.",
            "name": "Tashigi",
            "images": "OP02-105.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-105",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters −3 cost during this turn.",
            "name": "Tashigi",
            "images": "OP02-105_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-106",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Tsuru",
            "images": "OP02-106.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-107",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Doberman",
            "images": "OP02-107.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-108",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Donquixote Rosinante",
            "images": "OP02-108.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-108",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Donquixote Rosinante",
            "images": "OP02-108_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-109",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Jaguar.D.Saul",
            "images": "OP02-109.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-110",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Block] Select up to 1 of your opponent's Characters with a cost of 6 or less. The selected Character cannot attack during this turn.",
            "name": "Hina",
            "images": "OP02-110.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-111",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] If you have [Jango], this card gains +3000 power during this battle.",
            "name": "Fullbody",
            "images": "OP02-111.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-112",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: Give up to 1 of your opponent's Characters −1 cost during this turn. Then, up to 1 of your Leader or Character cards gains +1000 power during this turn.",
            "name": "Bell-mère",
            "images": "OP02-112.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-113",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] Give up to 1 of your opponent's Characters −2 cost during this turn. Then, if there is a Character with a cost of 0, this Character gains +2000 power during this battle.",
            "name": "Helmeppo",
            "images": "OP02-113.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-114",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Opponent's Turn] This Character gains +1000 power and cannot be K.O.'d by effects.[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Borsalino",
            "images": "OP02-114.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-114",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Opponent's Turn] This Character gains +1000 power and cannot be K.O.'d by effects.[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Borsalino",
            "images": "OP02-114_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-115",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with a cost of 0.",
            "name": "Monkey.D.Garp",
            "images": "OP02-115.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-115",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with a cost of 0.",
            "name": "Monkey.D.Garp",
            "images": "OP02-115_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-116",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Yamakaji",
            "images": "OP02-116.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-117",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] Give up to 1 of your opponent's Characters −5 cost during this turn.",
            "name": "Ice Age",
            "images": "OP02-117.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-118",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] You may trash 1 card from your hand: Select up to 1 of your Characters. The selected Character cannot be K.O.'d during this battle.",
            "name": "Yasakani Sacred Jewel",
            "images": "OP02-118.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-119",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] K.O. up to 1 of your opponent's Characters with a cost of 1 or less.",
            "name": "Meteor Volcano",
            "images": "OP02-119.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-120",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your Leader and all of your Characters gain +1000 power until the start of your next turn.",
            "name": "Uta",
            "images": "OP02-120.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-120",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your Leader and all of your Characters gain +1000 power until the start of your next turn.",
            "name": "Uta",
            "images": "OP02-120_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-121",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[Your Turn] Give all of your opponent's Characters −5 cost.[On Play] K.O. up to 1 of your opponent's Characters with a cost of 0.",
            "name": "Kuzan",
            "images": "OP02-121.png",
            "collected": "false"
        },
        {
            "deck": "OP02",
            "card_code": "OP02-121",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[Your Turn] Give all of your opponent's Characters −5 cost.[On Play] K.O. up to 1 of your opponent's Characters with a cost of 0.",
            "name": "Kuzan",
            "images": "OP02-121_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP01-051",
            "rarity": "SP CARD",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Opponent's Turn] If this Character is rested, your opponent cannot attack any card other than the Character [Eustass\"Captain\"Kid].[Activate: Main] [Once Per Turn] You may rest this Character: Play up to 1 Character card with a cost of 3 or less from your hand.",
            "name": "Eustass\"Captain\"Kid",
            "images": "OP01-051_p2.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "EffectWhen this Leader attacks or is attacked, you may trash any number of Event or Stage cards from your hand. This Leader gains +1000 power during this battle for every card trashed.",
            "name": "Portgas.D.Ace",
            "images": "OP03-001.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-001",
            "rarity": "L",
            "kind": "LEADER",
            "text": "EffectWhen this Leader attacks or is attacked, you may trash any number of Event or Stage cards from your hand. This Leader gains +1000 power during this battle for every card trashed.",
            "name": "Portgas.D.Ace",
            "images": "OP03-001_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-002",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Your opponent cannot activate a [Blocker] Character that has 2000 or less power during this battle.",
            "name": "Adio",
            "images": "OP03-002.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-003",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 card with a type including \"Whitebeard Pirates\" other than [Izo] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Izo",
            "images": "OP03-003.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-004",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "EffectThis Character cannot attack a Leader on the turn in which it is played.[DON!! x1] This Character gains [Rush].(This card can attack on the turn in which it is played.)",
            "name": "Curiel",
            "images": "OP03-004.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-005",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] This Character gains +2000 power during this turn. Then, trash this Character at the end of this turn.",
            "name": "Thatch",
            "images": "OP03-005.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-006",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Speed Jil",
            "images": "OP03-006.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-007",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Namule",
            "images": "OP03-007.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-008",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "EffectThis Character cannot be K.O.'d in battle by  attribute cards.[On Play] Look at 5 cards from the top of your deck; reveal up to 1 red Event and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Buggy",
            "images": "OP03-008.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-009",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] [Once Per Turn] Give up to 1 rested DON!! card to your Leader or 1 of your Characters.",
            "name": "Haruta",
            "images": "OP03-009.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-010",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Fossa",
            "images": "OP03-010.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-011",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters −2000 power during this turn.",
            "name": "Blamenco",
            "images": "OP03-011.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-012",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] You may trash 1 of your red Characters with 4000 power or more: Draw 1 card. Then, this Character gains +1000 power during this battle.",
            "name": "Marshall.D.Teach",
            "images": "OP03-012.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-013",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Your Turn] [On Play] K.O. up to 1 of your opponent's Characters with 3000 power or less.[On K.O.] You may trash 1 Event from your hand: You may play this Character card from your trash rested.",
            "name": "Marco",
            "images": "OP03-013.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-013",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Your Turn] [On Play] K.O. up to 1 of your opponent's Characters with 3000 power or less.[On K.O.] You may trash 1 Event from your hand: You may play this Character card from your trash rested.",
            "name": "Marco",
            "images": "OP03-013_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-014",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] Play up to 1 red Character card with a cost of 1 from your hand.",
            "name": "Monkey.D.Garp",
            "images": "OP03-014.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-015",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[Opponent's Turn] When this Character is K.O.'d, give up to 1 of your opponent's Leader or Character cards −2000 power during this turn.",
            "name": "Lim",
            "images": "OP03-015.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-016",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] If your Leader is [Portgas.D.Ace], K.O. up to 1 of your opponent's Characters with 8000 power or less, and your Leader gains [Double Attack] and +3000 power during this turn.(This card deals 2 damage.)",
            "name": "Flame Emperor",
            "images": "OP03-016.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-017",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main]/[Counter] If your Leader's type includes \"Whitebeard Pirates\", give up to 1 of your opponent's Characters −4000 power during this turn.",
            "name": "Cross Fire",
            "images": "OP03-017.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-018",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] You may trash 1 Event from your hand: K.O. up to 1 of your opponent's Characters with 5000 power or less and up to 1 of your opponent's Characters with 4000 power or less.",
            "name": "Fire Fist",
            "images": "OP03-018.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-018",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] You may trash 1 Event from your hand: K.O. up to 1 of your opponent's Characters with 5000 power or less and up to 1 of your opponent's Characters with 4000 power or less.",
            "name": "Fire Fist",
            "images": "OP03-018_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-019",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Your Leader gains +4000 power during this turn.",
            "name": "Fiery Doll",
            "images": "OP03-019.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-020",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] ② (You may rest the specified number of DON!! cards in your cost area.) You may rest this Stage: If your Leader is [Portgas.D.Ace], look at 5 cards from the top of your deck; reveal up to 1 Event and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Striker",
            "images": "OP03-020.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-021",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] ③ (You may rest the specified number of DON!! cards in your cost area.) You may rest 2 of your {East Blue} type Characters: Set this Leader as active, and rest up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Kuro",
            "images": "OP03-021.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-021",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Activate: Main] ③ (You may rest the specified number of DON!! cards in your cost area.) You may rest 2 of your {East Blue} type Characters: Set this Leader as active, and rest up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Kuro",
            "images": "OP03-021_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-022",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x2] [When Attacking] ① (You may rest the specified number of DON!! cards in your cost area.): Play up to 1 Character card with a cost of 4 or less and a [Trigger] from your hand.",
            "name": "Arlong",
            "images": "OP03-022.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-022",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x2] [When Attacking] ① (You may rest the specified number of DON!! cards in your cost area.): Play up to 1 Character card with a cost of 4 or less and a [Trigger] from your hand.",
            "name": "Arlong",
            "images": "OP03-022_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-023",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Alvida",
            "images": "OP03-023.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-024",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader has the {East Blue} type, rest up to 2 of your opponent's Characters with a cost of 4 or less.",
            "name": "Gin",
            "images": "OP03-024.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-024",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader has the {East Blue} type, rest up to 2 of your opponent's Characters with a cost of 4 or less.",
            "name": "Gin",
            "images": "OP03-024_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-025",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: K.O. up to 2 of your opponent's rested Characters with a cost of 4 or less.[DON!! x1] This Character gains [Double Attack].(This card deals 2 damage.)",
            "name": "Krieg",
            "images": "OP03-025.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-025",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: K.O. up to 2 of your opponent's rested Characters with a cost of 4 or less.[DON!! x1] This Character gains [Double Attack].(This card deals 2 damage.)",
            "name": "Krieg",
            "images": "OP03-025_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-026",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader has the {East Blue} type, rest up to 1 of your opponent's Characters.",
            "name": "Kuroobi",
            "images": "OP03-026.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-027",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader has the {East Blue} type, rest up to 1 of your opponent's Characters with a cost of 2 or less and, if you don't have [Buchi], play up to 1 [Buchi] from your hand.",
            "name": "Sham",
            "images": "OP03-027.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-028",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Choose one:• Set up to 1 of your {East Blue} type Leader or Character cards with a cost of 6 or less as active.• Rest this Character and up to 1 of your opponent's Characters.",
            "name": "Jango",
            "images": "OP03-028.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-029",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 4 or less.",
            "name": "Chew",
            "images": "OP03-029.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-030",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 green {East Blue} type card other than [Nami] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Nami",
            "images": "OP03-030.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-031",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Pearl",
            "images": "OP03-031.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-032",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "EffectThis Character cannot be K.O.'d in battle by  attribute cards.",
            "name": "Buggy",
            "images": "OP03-032.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-033",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Hatchan",
            "images": "OP03-033.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-034",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 2 or less.",
            "name": "Buchi",
            "images": "OP03-034.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-035",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Momoo",
            "images": "OP03-035.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-036",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] You may rest 1 of your {East Blue} type Characters: Set up to 1 of your [Kuro] cards as active.",
            "name": "Out-of-the-Bag",
            "images": "OP03-036.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-037",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] You may rest 1 of your {East Blue} type Characters: K.O. up to 1 of your opponent's rested Characters with a cost of 3 or less.",
            "name": "Tooth Attack",
            "images": "OP03-037.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-038",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] Rest up to 2 of your opponent's Characters with a cost of 2 or less.",
            "name": "Deathly Poison Gas Bomb MH5",
            "images": "OP03-038.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-039",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] Rest up to 1 of your opponent's Characters with a cost of 1 or less. Then, up to 1 of your Characters gains +1000 power during this turn.",
            "name": "One, Two, Jango",
            "images": "OP03-039.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-040",
            "rarity": "L",
            "kind": "LEADER",
            "text": "EffectWhen your deck is reduced to 0, you win the game instead of losing, according to the rules.[DON!! x1] When this Leader's attack deals damage to your opponent's Life, you may trash 1 card from the top of your deck.",
            "name": "Nami",
            "images": "OP03-040.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-040",
            "rarity": "L",
            "kind": "LEADER",
            "text": "EffectWhen your deck is reduced to 0, you win the game instead of losing, according to the rules.[DON!! x1] When this Leader's attack deals damage to your opponent's Life, you may trash 1 card from the top of your deck.",
            "name": "Nami",
            "images": "OP03-040_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-041",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)[DON!! x1] When this Character's attack deals damage to your opponent's Life, you may trash 7 cards from the top of your deck.",
            "name": "Usopp",
            "images": "OP03-041.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-041",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)[DON!! x1] When this Character's attack deals damage to your opponent's Life, you may trash 7 cards from the top of your deck.",
            "name": "Usopp",
            "images": "OP03-041_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-042",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Add up to 1 blue [Usopp] from your trash to your hand.",
            "name": "Usopp's Pirate Crew",
            "images": "OP03-042.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-043",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "EffectWhen you deal damage to your opponent's Life, you may trash 3 cards from the top of your deck. If you do, trash this Character.",
            "name": "Gaimon",
            "images": "OP03-043.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-044",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw 2 cards and trash 2 cards from your hand.",
            "name": "Kaya",
            "images": "OP03-044.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-045",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[Opponent's Turn] If you have 20 or less cards in your deck, this Character gains +3000 power.",
            "name": "Carne",
            "images": "OP03-045.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-046",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Genzo",
            "images": "OP03-046.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-047",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] When this Character's attack deals damage to your opponent's Life, you may trash 7 cards from the top of your deck.[On Play] Return up to 1 Character with a cost of 3 or less to the owner's hand, and you may trash 2 cards from the top of your deck.",
            "name": "Zeff",
            "images": "OP03-047.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-047",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] When this Character's attack deals damage to your opponent's Life, you may trash 7 cards from the top of your deck.[On Play] Return up to 1 Character with a cost of 3 or less to the owner's hand, and you may trash 2 cards from the top of your deck.",
            "name": "Zeff",
            "images": "OP03-047_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-048",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader is [Nami], return up to 1 of your opponent's Characters with a cost of 5 or less to the owner's hand.",
            "name": "Nojiko",
            "images": "OP03-048.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-049",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If you have 20 or less cards in your deck, return up to 1 Character with a cost of 3 or less to the owner's hand.",
            "name": "Patty",
            "images": "OP03-049.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-050",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On K.O.] You may trash 1 card from the top of your deck.",
            "name": "Boodle",
            "images": "OP03-050.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-051",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] When this Character's attack deals damage to your opponent's Life, you may trash 7 cards from the top of your deck.[On K.O.] You may trash 3 cards from the top of your deck.",
            "name": "Bell-mère",
            "images": "OP03-051.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-052",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Merry",
            "images": "OP03-052.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-053",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] If you have 20 or less cards in your deck, this Character gains +2000 power.",
            "name": "Yosaku & Johnny",
            "images": "OP03-053.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-054",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle. Then, you may trash 1 card from the top of your deck.",
            "name": "Usopp's Rubber Band of Doom!!!",
            "images": "OP03-054.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-055",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Counter] You may trash 1 card from your hand: Up to 1 of your Leader gains +4000 power during this battle. Then, you may trash 2 cards from the top of your deck.",
            "name": "Gum-Gum Giant Gavel",
            "images": "OP03-055.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-056",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] Draw 2 cards.",
            "name": "Sanji's Pilaf",
            "images": "OP03-056.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-057",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] Place up to 1 Character with a cost of 5 or less at the bottom of the owner's deck.",
            "name": "Three Thousand Worlds",
            "images": "OP03-057.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-058",
            "rarity": "L",
            "kind": "LEADER",
            "text": "EffectThis Leader cannot attack.[Activate: Main] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.) You may rest this Leader: Play up to 1 {Galley-La Company} type Character card with a cost of 5 or less from your hand.",
            "name": "Iceburg",
            "images": "OP03-058.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-058",
            "rarity": "L",
            "kind": "LEADER",
            "text": "EffectThis Leader cannot attack.[Activate: Main] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.) You may rest this Leader: Play up to 1 {Galley-La Company} type Character card with a cost of 5 or less from your hand.",
            "name": "Iceburg",
            "images": "OP03-058_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-059",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains [Banish] during this battle.(When this card deals damage, the target card is trashed without activating its Trigger.)",
            "name": "Kaku",
            "images": "OP03-059.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-060",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Draw 2 cards and trash 1 card from your hand.",
            "name": "Kalifa",
            "images": "OP03-060.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-061",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Kiwi & Mozu",
            "images": "OP03-061.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-062",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck; reveal up to 1 {Water Seven} type card other than [Kokoro] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Kokoro",
            "images": "OP03-062.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-063",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): If your Leader has the {Water Seven} type, draw 1 card.",
            "name": "Zambai",
            "images": "OP03-063.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-064",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] If your Leader has the {Galley-La Company} type, add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Tilestone",
            "images": "OP03-064.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-065",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Chimney & Gonbe",
            "images": "OP03-065.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-066",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] ➁ (You may rest the specified number of DON!! cards in your cost area.): Add up to 1 DON!! card from your DON!! deck and set it as active. Then, if you have 8 or more DON!! cards on your field, K.O. up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "Paulie",
            "images": "OP03-066.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-066",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] ➁ (You may rest the specified number of DON!! cards in your cost area.): Add up to 1 DON!! card from your DON!! deck and set it as active. Then, if you have 8 or more DON!! cards on your field, K.O. up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "Paulie",
            "images": "OP03-066_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-067",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] If your Leader has the {Galley-La Company} type, add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Peepley Lulu",
            "images": "OP03-067.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-068",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Banish] (When this card deals damage, the target card is trashed without activating its Trigger.)[On K.O.] If your Leader has the {Impel Down} type, add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Minozebra",
            "images": "OP03-068.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-069",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] If your Leader has the {Impel Down} type, draw 2 cards and trash 1 card from your hand.",
            "name": "Minorhinoceros",
            "images": "OP03-069.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-070",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.) You may trash 1 Character card with a cost of 5 from your hand: This Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Monkey.D.Luffy",
            "images": "OP03-070.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-071",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Rob Lucci",
            "images": "OP03-071.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-072",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Counter] You may trash 1 card from your hand: Up to 1 of your Leader or Character cards gains +3000 power during this battle.",
            "name": "Gum-Gum Jet Gatling",
            "images": "OP03-072.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-073",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): If your Leader has the {Water Seven} type, K.O. up to 1 of your opponent's Characters with a cost of 2 or less.",
            "name": "Hull Dismantler Slash",
            "images": "OP03-073.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-074",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Place up to 1 of your opponent's Characters with a cost of 4 or less at the bottom of the owner's deck.",
            "name": "Top Knot",
            "images": "OP03-074.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-075",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] You may rest this Stage: If your Leader is [Iceburg], add up to 1 DON!! card from your DON!! deck and rest it.",
            "name": "Galley-La Company",
            "images": "OP03-075.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-076",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] [Once Per Turn] You may trash 2 cards from your hand: When your opponent's Character is K.O.'d, set this Leader as active.",
            "name": "Rob Lucci",
            "images": "OP03-076.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-076",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[Your Turn] [Once Per Turn] You may trash 2 cards from your hand: When your opponent's Character is K.O.'d, set this Leader as active.",
            "name": "Rob Lucci",
            "images": "OP03-076_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-077",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x2] [When Attacking] ② (You may rest the specified number of DON!! cards in your cost area.) You may trash 1 card from your hand: If you have 1 or less Life cards, add up to 1 card from the top of your deck to the top of your Life cards.",
            "name": "Charlotte Linlin",
            "images": "OP03-077.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-077",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x2] [When Attacking] ② (You may rest the specified number of DON!! cards in your cost area.) You may trash 1 card from your hand: If you have 1 or less Life cards, add up to 1 card from the top of your deck to the top of your Life cards.",
            "name": "Charlotte Linlin",
            "images": "OP03-077_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-078",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] Give all of your opponent's Characters −3 cost.[On Play] If your opponent has 6 or more cards in their hand, trash 2 cards from your opponent's hand.",
            "name": "Issho",
            "images": "OP03-078.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-078",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [Your Turn] Give all of your opponent's Characters −3 cost.[On Play] If your opponent has 6 or more cards in their hand, trash 2 cards from your opponent's hand.",
            "name": "Issho",
            "images": "OP03-078_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-079",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] This Character cannot be K.O.'d in battle.",
            "name": "Vergo",
            "images": "OP03-079.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-080",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may place 2 cards with a type including \"CP\" from your trash at the bottom of your deck in any order: K.O. up to 1 of your opponent's Characters with a cost of 3 or less.",
            "name": "Kaku",
            "images": "OP03-080.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-080",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may place 2 cards with a type including \"CP\" from your trash at the bottom of your deck in any order: K.O. up to 1 of your opponent's Characters with a cost of 3 or less.",
            "name": "Kaku",
            "images": "OP03-080_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-081",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw 2 cards and trash 2 cards from your hand. Then, give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Kalifa",
            "images": "OP03-081.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-081",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw 2 cards and trash 2 cards from your hand. Then, give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Kalifa",
            "images": "OP03-081_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-082",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Kumadori",
            "images": "OP03-082.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-083",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 5 cards from the top of your deck and trash up to 2 cards. Then, place the rest at the bottom of your deck in any order.",
            "name": "Corgy",
            "images": "OP03-083.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-084",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Jerry",
            "images": "OP03-084.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-085",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Jabra",
            "images": "OP03-085.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-086",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader's type includes \"CP\", look at 3 cards from the top of your deck; reveal up to 1 card with a type including \"CP\" other than [Spandam] and add it to your hand. Then, trash the rest.",
            "name": "Spandam",
            "images": "OP03-086.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-086",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader's type includes \"CP\", look at 3 cards from the top of your deck; reveal up to 1 card with a type including \"CP\" other than [Spandam] and add it to your hand. Then, trash the rest.",
            "name": "Spandam",
            "images": "OP03-086_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-087",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Nero",
            "images": "OP03-087.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-088",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "EffectThis Character cannot be K.O.'d by effects.[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Fukurou",
            "images": "OP03-088.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-089",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 3 cards from the top of your deck; reveal up to 1 {Navy} type card other than [Brannew] and add it to your hand. Then, trash the rest.",
            "name": "Brannew",
            "images": "OP03-089.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-090",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] This Character gains [Blocker].(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On K.O.] Play up to 1 Character card with a type including \"CP\" and a cost of 4 or less from your trash rested.",
            "name": "Blueno",
            "images": "OP03-090.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-091",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Set the cost of up to 1 of your opponent's Characters with no base effect to 0 during this turn.",
            "name": "Helmeppo",
            "images": "OP03-091.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-092",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may place 2 cards with a type including \"CP\" from your trash at the bottom of your deck in any order: This Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Rob Lucci",
            "images": "OP03-092.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-092",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may place 2 cards with a type including \"CP\" from your trash at the bottom of your deck in any order: This Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Rob Lucci",
            "images": "OP03-092_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-093",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from your hand: If your Leader's type includes \"CP\", K.O. up to 1 of your opponent's Characters with a cost of 1 or less.",
            "name": "Wanze",
            "images": "OP03-093.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-094",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] If your Leader's type includes \"CP\", look at 5 cards from the top of your deck; play up to 1 Character card with a type including \"CP\" and a cost of 5 or less. Then, trash the rest.",
            "name": "Air Door",
            "images": "OP03-094.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-095",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] Give up to 2 of your opponent's Characters −2 cost during this turn.",
            "name": "Soap Sheep",
            "images": "OP03-095.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-096",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Main] K.O. up to 1 of your opponent's Characters with a cost of 0 or your opponent's Stages with a cost of 3 or less.",
            "name": "Tempest Kick Sky Slicer",
            "images": "OP03-096.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-097",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Counter] You may trash 1 card from your hand: Up to 1 of your Leader or Character cards gains +3000 power during this battle.",
            "name": "Six King Pistol",
            "images": "OP03-097.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-098",
            "rarity": "C",
            "kind": "STAGE",
            "text": "Effect[Activate: Main] You may rest this Stage: If your Leader's type includes \"CP\", give up to 1 of your opponent's Characters −2 cost during this turn.",
            "name": "Enies Lobby",
            "images": "OP03-098.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-099",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [When Attacking] Look at up to 1 card from the top of your or your opponent's Life cards, and place it at the top or bottom of the Life cards. Then, this Leader gains +1000 power during this battle.",
            "name": "Charlotte Katakuri",
            "images": "OP03-099.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-099",
            "rarity": "L",
            "kind": "LEADER",
            "text": "Effect[DON!! x1] [When Attacking] Look at up to 1 card from the top of your or your opponent's Life cards, and place it at the top or bottom of the Life cards. Then, this Leader gains +1000 power during this battle.",
            "name": "Charlotte Katakuri",
            "images": "OP03-099_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-100",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Kingbaum",
            "images": "OP03-100.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-101",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Camie",
            "images": "OP03-101.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-102",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x2] [When Attacking] You may add 1 card from the top or bottom of your Life cards to your hand: Add up to 1 card from the top of your deck to the top of your Life cards.",
            "name": "Sanji",
            "images": "OP03-102.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-103",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Bobbin the Disposer",
            "images": "OP03-103.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-104",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)[On Play] Look at up to 1 card from the top of your or your opponent's Life cards, and place it at the top or bottom of the Life cards.",
            "name": "Shirley",
            "images": "OP03-104.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-105",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] [When Attacking] You may trash 1 card with a [Trigger] from your hand: This Character gains +3000 power during this battle.",
            "name": "Charlotte Oven",
            "images": "OP03-105.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-106",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Charlotte Opera",
            "images": "OP03-106.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-107",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)",
            "name": "Charlotte Galette",
            "images": "OP03-107.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-108",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] If you have less Life cards than your opponent, this Character gains [Double Attack] and +1000 power.(This card deals 2 damage.)",
            "name": "Charlotte Cracker",
            "images": "OP03-108.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-108",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[DON!! x1] If you have less Life cards than your opponent, this Character gains [Double Attack] and +1000 power.(This card deals 2 damage.)",
            "name": "Charlotte Cracker",
            "images": "OP03-108_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-109",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card from the top or bottom of your Life cards: Add up to 1 card from the top of your deck to the top of your Life cards.",
            "name": "Charlotte Chiffon",
            "images": "OP03-109.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-110",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[When Attacking] You may add 1 card from the top or bottom of your Life cards to your hand: This Character gains +2000 power during this battle.",
            "name": "Charlotte Smoothie",
            "images": "OP03-110.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-111",
            "rarity": "C",
            "kind": "CHARACTER",
            "text": "Effect-",
            "name": "Charlotte Praline",
            "images": "OP03-111.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-112",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 4 cards from the top of your deck; reveal up to 1 [Sanji] or {Big Mom Pirates} type card other than [Charlotte Pudding] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Charlotte Pudding",
            "images": "OP03-112.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-112",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Look at 4 cards from the top of your deck; reveal up to 1 [Sanji] or {Big Mom Pirates} type card other than [Charlotte Pudding] and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Charlotte Pudding",
            "images": "OP03-112_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-113",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] Look at 3 cards from the top of your deck; reveal up to 1 {Big Mom Pirates} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Charlotte Perospero",
            "images": "OP03-113.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-113",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On K.O.] Look at 3 cards from the top of your deck; reveal up to 1 {Big Mom Pirates} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.",
            "name": "Charlotte Perospero",
            "images": "OP03-113_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-114",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader has the {Big Mom Pirates} type, add up to 1 card from the top of your deck to the top of your Life cards. Then, trash up to 1 card from the top of your opponent's Life cards.",
            "name": "Charlotte Linlin",
            "images": "OP03-114.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-114",
            "rarity": "SR",
            "kind": "CHARACTER",
            "text": "Effect[On Play] If your Leader has the {Big Mom Pirates} type, add up to 1 card from the top of your deck to the top of your Life cards. Then, trash up to 1 card from the top of your opponent's Life cards.",
            "name": "Charlotte Linlin",
            "images": "OP03-114_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-115",
            "rarity": "R",
            "kind": "CHARACTER",
            "text": "Effect[On Play] You may trash 1 card with a [Trigger] from your hand: K.O. up to 1 of your opponent's Characters with a cost of 1 or less.",
            "name": "Streusen",
            "images": "OP03-115.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-116",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Draw 3 cards and trash 2 cards from your hand.",
            "name": "Shirahoshi",
            "images": "OP03-116.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-117",
            "rarity": "UC",
            "kind": "CHARACTER",
            "text": "Effect[Activate: Main] You may rest this Character: Up to 1 of your [Charlotte Linlin] cards gains +1000 power until the start of your next turn.",
            "name": "Napoleon",
            "images": "OP03-117.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-118",
            "rarity": "UC",
            "kind": "EVENT",
            "text": "Effect[Counter] Up to 1 of your Leader or Character cards gains +5000 power during this battle.",
            "name": "Ikoku Sovereignty",
            "images": "OP03-118.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-119",
            "rarity": "R",
            "kind": "EVENT",
            "text": "Effect[Main] If you have less Life cards than your opponent, K.O. up to 1 of your opponent's Characters with a cost of 4 or less.",
            "name": "Buzz Cut Mochi",
            "images": "OP03-119.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-120",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] If your opponent has 4 or more Life cards, trash up to 1 card from the top of your opponent's Life cards.",
            "name": "Tropical Torment",
            "images": "OP03-120.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-121",
            "rarity": "C",
            "kind": "EVENT",
            "text": "Effect[Main] You may trash 1 card from the top of your Life cards: K.O. up to 1 of your opponent's Characters with a cost of 5 or less.",
            "name": "Thunder Bolt",
            "images": "OP03-121.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-122",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "EffectAlso treat this card's name as [Usopp] according to the rules.[On Play] Return up to 1 Character with a cost of 6 or less to the owner's hand. Then, draw 2 cards and trash 2 cards from your hand.",
            "name": "Sogeking",
            "images": "OP03-122.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-122",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "EffectAlso treat this card's name as [Usopp] according to the rules.[On Play] Return up to 1 Character with a cost of 6 or less to the owner's hand. Then, draw 2 cards and trash 2 cards from your hand.",
            "name": "Sogeking",
            "images": "OP03-122_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-122",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "EffectAlso treat this card's name as [Usopp] according to the rules.[On Play] Return up to 1 Character with a cost of 6 or less to the owner's hand. Then, draw 2 cards and trash 2 cards from your hand.",
            "name": "Sogeking",
            "images": "OP03-122_p2.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-123",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Add up to 1 Character with a cost of 8 or less to the top or bottom of the owner's Life cards face-up.",
            "name": "Charlotte Katakuri",
            "images": "OP03-123.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "OP03-123",
            "rarity": "SEC",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Add up to 1 Character with a cost of 8 or less to the top or bottom of the owner's Life cards face-up.",
            "name": "Charlotte Katakuri",
            "images": "OP03-123_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "ST01-012",
            "rarity": "SP CARD",
            "kind": "CHARACTER",
            "text": "Effect[Rush] (This card can attack on the turn in which it is played.)[DON!! x2] [When Attacking] Your opponent cannot activate [Blocker] during this battle.",
            "name": "Monkey.D.Luffy",
            "images": "ST01-012_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "ST03-009",
            "rarity": "SP CARD",
            "kind": "CHARACTER",
            "text": "Effect[On Play] Return up to 1 Character with a cost of 7 or less to the owner's hand.",
            "name": "Donquixote Doflamingo",
            "images": "ST03-009_p1.png",
            "collected": "false"
        },
        {
            "deck": "OP03",
            "card_code": "ST04-003",
            "rarity": "SP CARD",
            "kind": "CHARACTER",
            "text": "Effect[On Play] DON!! −5 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 6 or less. This Character gains [Rush] during this turn.(This card can attack on the turn in which it is played.)",
            "name": "Kaido",
            "images": "ST04-003_p1.png",
            "collected": "false"
        }
      ]
  
    
    title = 'OnePieceTracker';

    filters:string[] = []
    numberOfCardsInCollection= 0;

    
    sendStuff(event:any){
        event.filters = this.filters

        if(localStorage.getItem('cards') == null){
            localStorage.setItem('cards',JSON.stringify(this.cards))
        }

    }

    addToFilter(deck:string){
        let index = this.filters.indexOf(deck)
        if(!this.filters.includes(deck)){
            this.filters.push(deck)
        }else{
            this.filters.splice(index,1)
        this.filters.sort()
        }
    }

}