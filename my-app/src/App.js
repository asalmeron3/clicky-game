// -------- Import necessary components and files ------//
  import React, {Component} from "react";
  import Card from "./components/card";
  import AddOne from "./components/addone";
  // import Titlebar from "./components/titlebar"
  import JPChars from "./JPcharacter.json";
  import "./App.css";
// -----------------------------------------------------//


// -------------- Constructor function for the Entire App -----------//

  class App extends Component {


    //Make a state within the constructon. This stae will be an object
    // with the different values and information needed for the app/DOM
    state = {
      myChars: JPChars,
      count: 0,
      highscore: 0,
      clickedOn:[],
      message: "Click on a picture to begin!"
    };

    //--------------------Increase Count Method -------------------//

      // Add a Method called "increaseCount". This method will be called
      // whenever a picture/button is clicked and determine if the user
      // will receive a point, continue the game, or if the game resets.
      increaseCount = event => {

        // set a variable to store the id of the image/button/div that
        // was clicked. This will be used for comparing future clicks
        var theId = event.target.id;

        // Check the current count stored in this contructor, under
        // the state object with the key "count". When 0, tell the
        // user to clikc a pic to begin
        if(this.state.count === 0){
          this.setState({message:"Click on a picture to begin!" });
          }

        // Check to see if the id that was clicked, is currently in the array
        // "clickedOn", if not...
        if (this.state.clickedOn.indexOf(theId) === -1){
          //add/CONCATitnate to the clickedOn array --> Do by setting the state
          this.setState({clickedOn: this.state.clickedOn.concat(theId)});
          // update the count to reflect the addition of a point
          this.setState({count: this.state.count + 1});
          // update the message in the state to tell the user to proceed
          this.setState({message: "Good! Keeping going and remember to not click pics twice"});

          // before continuing, check to see if the user has a higher score than the current
          // highscore. If so, update the highscore by one (1)
          if(this.state.highscore <= this.state.count){
              this.setState({highscore: this.state.highscore+1});
            }
        }

        // check to see if the user's count has reached 12 (the max score). If so...
        else if (this.state.count === 12){
          // update the message to let the user know they have the highest score...
          this.setState({message: "You win! You have scored the highest score! Click on any card to play again!"})
          // set the count back to zero (0) and empty the clickedOn array
          this.setState({count: 0});
          this.setState({clickedOn:[]});
          }


        // if the user did not click on a new/unclicked image..
        else{
          // set the count back to zero (0) and empty the clickedOn array
          this.setState({count: 0});
          this.setState({clickedOn:[]});
          // let the user know that they already clicked that image 
          // and that the game has been reset
          this.setState({message:"You Have already clicked on this. The game has reset." });
        }
      };
    // -------------------------------------------------------------//

    // ------------------ everydayImShufflin Method -----------------------//

      // This method taked in an array (originalArray) and an empty array (shuffled array)
      // and recursive removed a random value from the original, adds it to the
      // shuffledArray, and calls the function again on the shortened array
      everydayImShufflin(originalArray,shuffledArray){

        // add a condition to see if the original array has a length less than 1
        // if it does, you do not needto call the fxn again, simply return the 
        // shuffledArray
        if (originalArray.length < 1){
          return shuffledArray;
        }

        // If the array has not been shorten to length < 1,
        else{
          // make copy of the originalArray so that we can manipulate/update it
          let copyOriginal = originalArray;
          // randomly choose an index by using the arrays's current length
          let randomIndex = Math.floor(Math.random()*originalArray.length);
          // use the random index to get a value from the original array -->
          // this value will be an object from our json and should be added to
          // the shuffled array
          shuffledArray.push(originalArray[randomIndex]);
          //using splice, remove the random object from the copy of the original array
          copyOriginal.splice(randomIndex,1);

          // call the function recursively, using the new copy and the new shuffled array
          return this.everydayImShufflin(copyOriginal,shuffledArray)

        }
      }
    // -------------------------------------------------------------//


    // -------------------    Rendering    -----------------------//
      render() {
        // compose an original array that allows concatinating
        // the original list "JPchars" 
        let allThingsShuffled = [].concat(JPChars);
        // call the method "everydayImShufflin" using the above array
        // and an empty array. The empty array will be returned and be
        // stored/updated in the same array 
        allThingsShuffled = this.everydayImShufflin(allThingsShuffled,[]);
        
        return(
          {/* return one div. This div should include all the components*/},
          {/*that we want to display/have in the DOM */},
          <div>
            
            {/* / In the AddOne component, set the props associated the the */},
            {/* // state's count, highscore, and the message*/},
            <AddOne
              currentCount = {this.state.count}
              highScore = {this.state.highscore}
              message = {this.state.message}

            />
           
           {allThingsShuffled.map( oneChar => (
            // For each (using map) of the onjects/charactes in the shuffledArray,
            // set the props associated with the id, the name of the characterm
            // the image, and the increaseCount method in this constructon
               <Card
                 id = {oneChar.id}
                 key = {oneChar.id}
                 name = {oneChar.name}
                 image = {oneChar.image}
                 func1 = {this.increaseCount.bind(this)}
                // the increaseCount function should bind this Constructor
                                // that way the scope within the increaseCount method can
                                // include the Constructor whcih conswquently has the 
                                // the state object needed within the increaseCount method
                                // ... mouthfull...mindBending] 
               />
           ))}

          </div>
        );
      }
    // -------------------------------------------------------------//

  };
//--------------------------------------------------------------------//

// export the entire constructor "App" to use with ReactDOM in index.js
export default App;