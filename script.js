// Create an Initial array of Freelancers.
// Each Freelancer should have a Name, Occupation, and Starting Price.
const freelancerArray = [
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

// Create function(s) to render initial list of Freelancers to webpage.

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





 /* NEW AND IMPROVED CODE*/

// Creating a Name heading (New h1 tag)
  const nameHeading = document.createElement('h1');

// Inserting text within the h1 tag
  const nameText = document.createTextNode('NAME');

// Appending child text to the heading
  nameHeading.appendChild(nameText);