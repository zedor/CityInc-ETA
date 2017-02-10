# CityInc-ETA

ETA calculator/display for CityInc.se idle incremental game

[Preview](http://i.imgur.com/a7KcmhS.png)

##### Usage

* Copy the contents of the script.js 
*	Open the console in the browser tab where you have the game open.
  * For Chrome press ctrl+shift+j to open the console.
  * For FireFox press ctrl+shift+k to open the console.
  * For Internet Explorer press f12 then press ctrl+2 to open the console.
* Paste in the entire contents of this script and press enter to activate it.
  * Press ctrl+enter if you are using Internet Explorer.
* Look at the ETA's
* For citizen gain ETA you have two options
  * Enter number of wanted citizens and press [%] button to show the ETA and the % of current citizens the number equates to
  * Enter wanted percentage (without % sign) and press the [123] button to show the ETA and the number of citizens it equates to

##### What it does
* Shows approximate ETA for:
  * Next building goals
  * Upgrades tab
  * City upgrades tab
  * Citizen gain

##### What it doesn't do
* Doesn't play the game for you
* Doesn't take cycles into account - values will be way off for long bank cycles!!

##### Known Issues
* ETA is way off!
  * This is most probably due to the cycle mechanic of the buildings and how the ETA is calculated.
  * If your building on a long cycle holds the majority of the income per second, even if the cycle has a few seconds left to completion, the ETA is not taking that into account.
  * ETA calculation is a simple formula: (targetCost - currentMoney)/income
  * I most probably won't be changing this as your bank cycle diminishes to 9s after ~10 or less resets.