// Version 3

/*
1.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://randomuser.me/api?results=5
- Makes use of async/await syntax
- Display the "name", "email" and "city" of the first person inside an unordered list.
*/

async function fetchAPI() {
    const url = "https:randomuser.me/api?results=5";
    const response = await fetch(url);
    const data =  await response.json();
    console.log(data.results[0].name);
    console.log(data.results[0].email);
    console.log(data.results[0].location.city);


    return data;     
  }
  fetchAPI();

/*
2. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
*/

/*
3.
a) Create a class, called Car, that includes:
- A constructor method
- "model", "color", "seats" properties
- 1 additional method, called "getModel", which returns the model

b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/


// class Car {
//     constructor(name) {
//       this._name = name;
//       this._color = color;
//       this._seats = this.seats;
//     }


class fourLegs {
    constructor(name) {
      this._name = name;
      this._color = color;      
    }

}

class Car extends fourLegs {
    constructor(name) {
        super(name);
        this._seats = this.seats;
      }

      get color() {
        return this._color;
      }  
        
  } 
  class Animals extends fourLegs {
    constructor(name) {
        super(name);
        this._eats = this.eats;
      }        
  } 

  const honda = new Car('Honda');
  /* cars and animals must have some common and same properties. Then we need to define another class named 
  animals.
  Since objects must contain related data and code, representingg information abut
   the thing we try to model, we need an upper level  which 
   contains the properties and methods that the animaals and cars classes share like name or color.   */

/*
4.
Write a function that:
- Takes in an array of strings as an argument
- Sorts the array alphabetically
- Adds

Example: ["Zebra", "Cookie", "Flower"]
Expected output: ["Cookies", "Flowers", "Zebras"]

Make use of the following array:
*/
const fruits = ['Strawberry', 'Apple', 'Tangerine', 'Banana', 'Melon', 'Pear'];
fruits.sort();
console.log(fruits);



/*
5.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!")
- Creates an empty <img> and add it to the document.
- When the button is clicked, inserts an image URL into the <img> tag and remove the button
- Uses the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/
const body = document.querySelector('body');
console.log(body);

window.onload = function clickAndGo() {
    const imgButton = document.createElement('button');
    body.appendChild(imgButton);
    imgButton.onclick = () => {
        const img = document.createElement('img');
        img.src = ('https://avatars3.githubusercontent.com/u/20858568?s=200&v=4');
        body.appendChild(img);
        imgButton.style.display = "none";
    }    
}

/* 
6. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less. 
*/
/* 
Api is the interface which gives the user the data  requested. It could be obtained mostly as json format
whic is compatible with js object(it behaves like an object) So when we fetch the data using a special api url 
we can make use of it in our projects. 

LEts say we want to make a section which includes HYF contributors rerpository:
we firstly need to fetch the data using github api which has the adress of the related repository. Then 
we can select just like selecting an object property from the json formatted  HYF contributors repo.
When we just write the exact prperty adresses, it can be used for multiple values of that property dynamically.
*/