# clicky-game

### Description
```
React application where 12 images are shuffled on each click. To get the highest score, you must click on each image only ONCE. Clicking on an image twice, will cause you score to drop back to zero. Good luck with the memory challenge!
```

- - -
#### "Components"
	* There are three components that this application tries to use. Each component has it individual js file with associated props needed for the DOM, CSS, and is exported to be used in the App.

	The components include:

		1. card : This components sets up the html/container for each image on the page. The image is wrapped in a div and that is wrapped in a button. The props passed to this component include the information from our JPcharacter.json file; name, image url, and the id.

		2. addOne : This component set up the html/container that will show the user the current score, the highest score, and provide messages/instructions.

		3. Titlebar: Thie componenet is entended to be a fixed navigation bar that will display the message/instructions to the user.

- - -
### "App"
	* The App is the constructor function needed to store the state data for the DOM as well as the methods needed to change the scores and to randomize the images.

	The constructor include:

		1. state : This is an object with the score, highscore, an array of the images' information needed for the components, the message, and an empty array for shuffling the original list of images.

		2. increaseCount: This method will be called whenever a picture/button is clicked and determine if the user will receive a point, continue the game, or if the game resets.

		3. everydayImShufflin: This method takes in two arrays, makes a copy of the first, recursive removes a random value from the copy array, adds the value to the second array, and calls the function again on the copy of the array and the updated second array. Once the copy of the array reaches a length of zero, all values have been randomized in the second array and the function will return the second array.
- - -

### Notes
  * This function uses React, ReactDOM, components,.

- - -

### System Requirements

You will need the following:
  * Node_modules
  * React
  * ReactDOM
  * react-scripts
  
- - -

### Creator: Arturo Salmeron
**Date: January 11, 2017**