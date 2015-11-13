technologies used, the approach taken, installation instructions, unsolved problems, etc.
# SQUAD STORM ## SKEEEEERMISH COMBAT
### FYI - It is NOT incomplete! Far from what I plan, in fact.

## Installation Instructions:
### [VIEW SQUAD STORM][http://martin-ryan.github.io/game/game.html]

## Technologies used:
* Javascript
  * Constructors, Components, Arrays etc. All but APIs.
* HTML
* CSS - Truly what got me stuck the most. BUT, I figured out a TON in the last few days and it's much less of an issue now. I still don't like how some things work but it's better. I'd like to spend some times with a CSS pro and get instruction on best practices. For example, using JS to create and modify all the tags, props etc instead of hardcoding anything into the HTML or CSS page.
* JQuery - Used this quite heavily, a beautiful tool for building elegant code.
* Structured/Organized code files. I broke my code into logical chunks, for the most part. After a day of working in my new org I did keep rethinking and figuring out better ways to org things. Something I'll be doing in the next week.

## The Approach Taken:

I spent Monday evening trying to figure out how to build a 5 player game, not on the same machine. Basically there was no way to do it without using a server (as you know!) so I scrapped the project and started fresh on Tuesday.

Building things out Tuesday morning I accomplished a lot of underlying game code, movement and placement math etc etc. But I realized with it being a turn based strategy game there was a need for a LOT of user feedback and decisions. So I changed from a game systems building priority to an experiential/user interaface priority. I logged the experience step by step in Trello for complex needs, finding it VERY helpful. Starting with a player select then re-usable/modifiable popup overlay, instructions screen, unit deployment, actions deck (which is an actual stack of divs/cards that can be shuffled and dealt), and finally a player hand where the cards are transfered to on draw and activated when clicked to use.

I'm at the point where I need to code the unit movement, attack/defend (dice roll vs dice roll) and grenade usage. Then work out win conditions. I would say about 50% of the MVP is complete.

Finally, I have big plans for the visuals in this game. I'm going to create different types of squads to choose on the player select screen with unique stats and strategy style. Squads/units will take advantage of the different actions cards in different ways to give them each a unique flavor.

## Unsolved Problems:
* responsive design - I'd like to eventually go back and build in more flexibility to the game. I decided not to UNTIL I finish the movement system as I'm exactly sure how dependant on X,Y coordinates it will be...and if by having a more fluid layout it will create a ton of bugs.
* By the time I'm done I want each system to be completely modular. I want to be able to pick up the Message/Alert/Overlay system and plug it into the next game I build with zero integration beyond loading files.
