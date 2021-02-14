
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies 


// purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like

'usesrict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



// -------------------------------------------Seattle-------------------------------------------
let Seattle = {
    name: 'Seattle',
    mincust: 26,
    maxcust: 65,
    avgcookie: 6.3,
    array: [],
    CustomerPerHour: function () {
        this.try = randCustomerPerHour(this.mincust, this.maxcust) * this.avgcookie;
        this.try = Math.floor(this.try);

        this.array.push(this.try);


    },


}


function SeattleCookies() {




    // tiltle
    let parent = document.getElementById('parent');
    // console.log(parent);
    let title = document.createElement('h3');
    parent.appendChild(title);
    title.textContent = Seattle.name;

    // making list

    let unorderedList = document.createElement('ul');
    // console.log(unorderedList);
    // append child to parent
    parent.appendChild(unorderedList);


    let sum = 0;




    for (let i = 0; i < hours.length; i++) {

        let listItem = document.createElement('li');
        unorderedList.appendChild(listItem);
        Seattle.CustomerPerHour();
        listItem.textContent = hours[i] + ':  ' + Seattle.array[i] + ' cookies';
        sum = sum + Seattle.array[i];

    }

    let summation = document.createElement('h3');
    parent.appendChild(summation);
    summation.textContent = 'total= ' + sum;


}






// ----------------------------------------------------Tokyo--------------------------------------------


let Tokyo = {
    name: 'Tokyo',
    mincust: 3,
    maxcust: 24,
    avgcookie: 1.2,
    array: [],
    CustomerPerHour: function () {
        this.try = randCustomerPerHour(this.mincust, this.maxcust) * this.avgcookie;
        this.try = Math.floor(this.try);

        this.array.push(this.try);


    },


}

function Tokyocookies() {




    // tiltle
    let parent = document.getElementById('parent');
    // console.log(parent);
    let title = document.createElement('h3');
    parent.appendChild(title);
    title.textContent = Tokyo.name;

    // making list

    let unorderedList = document.createElement('ul');
    // console.log(unorderedList);
    // append child to parent
    parent.appendChild(unorderedList);


    let sum = 0;




    for (let i = 0; i < hours.length; i++) {

        let listItem = document.createElement('li');
        unorderedList.appendChild(listItem);
        Tokyo.CustomerPerHour();
        listItem.textContent = hours[i] + ':  ' + Tokyo.array[i] + ' cookies';
        sum = sum + Tokyo.array[i];

    }

    let summation = document.createElement('h3');
    parent.appendChild(summation);
    summation.textContent = 'total= ' + sum;


}


// ----------------------------------------------------------Dubai--------------------------
let Dubai = {
    name: 'Dubai',
    mincust: 11,
    maxcust: 38,
    avgcookie: 3.7,
    array: [],
    CustomerPerHour: function () {
        this.try = randCustomerPerHour(this.mincust, this.maxcust) * this.avgcookie;
        this.try = Math.floor(this.try);

        this.array.push(this.try);


    },


}


function DubaiCookies() {




    // tiltle
    let parent = document.getElementById('parent');
    // console.log(parent);
    let title = document.createElement('h3');
    parent.appendChild(title);
    title.textContent = Dubai.name;

    // making list

    let unorderedList = document.createElement('ul');
    // console.log(unorderedList);
    // append child to parent
    parent.appendChild(unorderedList);


    let sum = 0;




    for (let i = 0; i < hours.length; i++) {

        let listItem = document.createElement('li');
        unorderedList.appendChild(listItem);
        Dubai.CustomerPerHour();
        listItem.textContent = hours[i] + ':  ' + Dubai.array[i] + ' cookies';
        sum = sum + Dubai.array[i];

    }

    let summation = document.createElement('h3');
    parent.appendChild(summation);
    summation.textContent = 'total= ' + sum;


}

// ----------------------------------------------PARIS------------------------------

let paris = {
    name: 'paris',
    mincust: 20,
    maxcust: 38,
    avgcookie: 2.3,
    array: [],
    CustomerPerHour: function () {
        this.try = randCustomerPerHour(this.mincust, this.maxcust) * this.avgcookie;
        this.try = Math.floor(this.try);

        this.array.push(this.try);
        // 20	38	2.3

    },


}


function parisCookies() {




    // tiltle
    let parent = document.getElementById('parent');
    // console.log(parent);
    let title = document.createElement('h3');
    parent.appendChild(title);
    title.textContent = paris.name;

    // making list

    let unorderedList = document.createElement('ul');
    // console.log(unorderedList);
    // append child to parent
    parent.appendChild(unorderedList);


    let sum = 0;




    for (let i = 0; i < hours.length; i++) {

        let listItem = document.createElement('li');
        unorderedList.appendChild(listItem);
        paris.CustomerPerHour();
        listItem.textContent = hours[i] + ':  ' + paris.array[i] + ' cookies';
        sum = sum + paris.array[i];

    }

    let summation = document.createElement('h3');
    parent.appendChild(summation);
    summation.textContent = 'total= ' + sum;


}

// ----------------------------------------------------------LIMA--------------------------------------------
let lima = {
    name: 'lima',
    mincust: 2,
    maxcust: 16,
    avgcookie: 4.6,
    array: [],
    CustomerPerHour: function () {
        this.try = randCustomerPerHour(this.mincust, this.maxcust) * this.avgcookie;
        this.try = Math.floor(this.try);

        this.array.push(this.try);

    },


}


function limaCookies() {




    // tiltle
    let parent = document.getElementById('parent');
    // console.log(parent);
    let title = document.createElement('h3');
    parent.appendChild(title);
    title.textContent = lima.name;

    // making list

    let unorderedList = document.createElement('ul');
    // console.log(unorderedList);
    // append child to parent
    parent.appendChild(unorderedList);


    let sum = 0;




    for (let i = 0; i < hours.length; i++) {

        let listItem = document.createElement('li');
        unorderedList.appendChild(listItem);
        lima.CustomerPerHour();
        listItem.textContent = hours[i] + ':  ' + lima.array[i] + ' cookies';
        sum = sum + lima.array[i];

    }

    let summation = document.createElement('h3');
    parent.appendChild(summation);
    summation.textContent = 'total= ' + sum;


}





SeattleCookies();
Tokyocookies();
DubaiCookies();
parisCookies();
limaCookies();







// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
function randCustomerPerHour(min, max) {

    return customereachhour = Math.floor(Math.random() * (max - min + 1)) + min;

}









































// // give text content
// unorderedList.textContent='hello from javascript';

// // for(let i =0 ; i<hours.length;i++){
// //     console.log(hours[i]);

// //     // create element
// //     let listItem = document.createElement('li');
// //     // append to parent
// //     unorderedList.appendChild(listItem);

// //     // give text content
// // }


