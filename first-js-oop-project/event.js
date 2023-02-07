/* 

Mandatory fields 
Event Name
Where - Online or In-site
Hours
Chapter 
Number of tickets - 50 

*/


//Creating the class
class Event{
  constructor(name, place, hours, chapter){
    this.name = name;
    this.place = place;
    this.hours = hours;
    this.chapter = chapter;                //  0, 1, 2, 3, 4
    this.availableTickets = new Array(); // [              ]
  }
}

//Create my first instance 
// let womenCodeFirstEvent = new Event("Understanding the Web Content Accessibility Guidelines", "Online", "5:00 PM - 6:00 PM PST", "WWCode Boulder/Denver");

//console.log(womenCodeFirstEvent);
// womenCodeFirstEvent.availableTickets.push("Tanya", "Mifrah", "Raquel");
//console.log(womenCodeFirstEvent);


// create a new Event instance/obj from each element in the array and return an array of total events
function createInstance(array){
  let hours = "TBD";
  let places = "TBD";
  let chapters = "TBD";
  let results = [];

  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    let tempInstances = new Event(name, places, hours, chapters);
    results.push(tempInstances);
  }
  return results;
}

// array input for my function createInstance()
let names = ["Job search", "Networking", "Basic Data Structures", "Traslation", "Happy Hour"];
let inputHTML = createInstance(names);
console.log(inputHTML);


// create the HTML elements needed to display our code, using DOM methods
document.addEventListener('DOMContentLoaded', () => {
  let html = "";
  // for each Event object, we want to add all of the properties to the html as list items
  inputHTML.forEach((item) => {
    html += `<li>${item.name}</li><ul><li>${item.hours}</li><li>${item.place}</li><li>${item.chapter}</li><li>${item.availableTickets}</li></ul>`;

  });
  document.querySelector('#event').innerHTML = html;
});