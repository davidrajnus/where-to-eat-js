function addRestaurantListener(){
  //create an element to put the result in the end
  divCenter = document.getElementsByClassName('center');
  paragraph = document.createElement('p');
  paragraph.setAttribute("id", "result");
  paragraph.innerHTML = "";
  divCenter[0].appendChild(paragraph);


  
  function startRandom(){
  	//Array of the choices we would like to randomise through
  	array = ["Nasi Kukus", "KFC", "McD", "BK", "Jaipur", "Fish & Chips"]
  	//Assuming there was already content in the result area, we put back to
  	//an empty string
  	paragraph = document.getElementById('result');
  	paragraph.innerHTML = "";

  	//We will use final_input to display a result in the circle
  	final_input = document.getElementById("restaurant");

  	//A loop that iterates the randomise function
  	interval_id = setInterval(function() {
  		rand_num = Math.floor(Math.random()*array.length);
  		console.log(rand_num)
  		//Display the random restaurant
  		final_input.innerHTML = array[rand_num]

  	},300)

  }

  function chooseRestaurant(){
  	//Stops the loop
  	clearInterval(interval_id);
  	center = document.getElementsByClassName("center");
  	restaurant = final_input.textContent;
  	result = document.getElementById('result')
  	//Displays the result with an additional string
  	result.innerHTML = "Great! Let's go to " + restaurant;

  }
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn = document.getElementById('start-random-button');
  startBtn.addEventListener("click", startRandom)

  getBtn = document.getElementById('get-restaurant-button');
  getBtn.addEventListener("click", chooseRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);