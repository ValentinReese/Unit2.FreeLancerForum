// Arrays containing elements that will be used to randomly generate Freelancers
const names = ['Jack', 'Robin', 'Sam', 'Nick', 'Jen'];
const occupations = ['Doctor', 'Firefighter', 'Musician', 'Nurse', 'Cop'];
const startingPrices = [30, 50, 70, 80, 100,];
const allFreeLancers = 13;
let averageStartingPrice = [];

// Initial Array of Freelancers
const initialFreeLancerArray = [
  {
    name: 'Alice',
    occupation: 'Writer',
    startingPrice: 30,
  },

  {
    name: 'Bob',
    occupation: 'Teacher',
    startingPrice: 50,
  },

  {
    name: 'Carol',
    occupation: 'Programmer',
    startingPrice: 70,
  }
]

const addingFreeLancers = setInterval(randomFreeLancer, 3000);

render();

// Create function(s) to render initial list of Freelancers to webpage.
function render() {
  const name = document.querySelector("#name");
  const nameRender = initialFreeLancerArray.map((freelancer) => {
    const element = document.createElement("li");
    // element.classList.add(freelancer.name);
    element.innerHTML = freelancer.name;
    document.getElementById("name").appendChild(element);
    return element;
  });
  name.replaceChildren(...nameRender);

  const occupation = document.querySelector("#occupation");
  const occupationRender = initialFreeLancerArray.map((freelancer) => {
    const element = document.createElement("li");
    // element.classList.add(freelancer.occupation);
    element.innerHTML = freelancer.occupation;
    document.getElementById("occupation").appendChild(element);
    return element;
  });
  occupation.replaceChildren(...occupationRender);

  const startingPrice = document.querySelector("#price");
  const startingPriceRender = initialFreeLancerArray.map((freelancer) => {
    const element = document.createElement("li");
    // element.classList.add(freelancer.startingPrice);
    element.innerHTML = freelancer.startingPrice;
    document.getElementById("price").appendChild(element);
    return element;
  });
  startingPrice.replaceChildren(...startingPriceRender);

  const averagePrice = document.querySelector("#avgprice");
  const averagePriceRender = averageStartingPrice.map((average) => {
    const element = document.createElement("p");
    // I was trying to find a way to just show the total sum of starting prices, was unable to find the way in time
    // It just prints the array over and over again....
    // element.innerHTML = averageStartingPrice;
    document.getElementById("avgprice").appendChild(element);
    return element;
  })
  averagePrice.replaceChildren(...averagePriceRender);

}

function randomFreeLancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const startingPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)];

  initialFreeLancerArray.push({name, occupation, startingPrice});

  render();

  if (initialFreeLancerArray.length >= allFreeLancers) {
    clearInterval(addingFreeLancers);
  }

  sumStartingPrices();

  calculateAvgStartingPrice();
}

// This works... but i still can't calculate average
function sumStartingPrices() {
  let sum = initialFreeLancerArray.reduce(
    (acc, currentValue) => acc + currentValue.startingPrice,
    0,
  );
  averageStartingPrice.push(sum);
  console.log(sum);
}

console.log(averageStartingPrice);

// This keeps returning 'NaN' 
function calculateAvgStartingPrice() {
  let avg = sumStartingPrices / initialFreeLancerArray.length;
  return avg;
}

/*
  // ref name div
  const nameDiv = document.querySelector('.name-div');

  // ref occupation div
  const occupationDiv = document.querySelector('.occupation-div');

  // ref starting price div
  const startingPriceDiv = document.querySelector('price-div');

function renderName(freelancer) {
// Should render Name 
  // Create a new P element
  const name = document.createElement('p');

  // Add the Name key value to the P element
  name.append(freelancer.name);

  // Append the new p element to name-div
  nameDiv.append(name);
}

function renderOccupation(freelancer) {
  // Should render Occupation
}

function renderStartingPrice(freelancer) {
  // Should render Starting Price
}

// Create a new array of random objects to push to freelancer Array


// Create a function to render new Freelancers every 3 seconds
  // Use an interval

// Create a function to calculate average starting price of all freelancers
 // This number should be rendered to webpage
*/




 /* NEW AND IMPROVED CODE*/
/*
// Creating a Name heading (New h1 tag)
  const nameHeading = document.createElement('h1');

// Inserting text within the h1 tag
  const nameText = document.createTextNode('NAME');

// Appending child text to the heading
  nameHeading.appendChild(nameText);
*/