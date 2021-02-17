
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies 


// purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like



// ------------------day2----------------
// Replace all of your object literals for the salmon cookie stand with a single constructor function that,
//  when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row
//  with a “Daily Location Total”.
'usesrict';

let hours = ['city', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let shopps=[Seattle,paris,Tokyo,Dubai,lima];
// console.log(shopps);

let Seattle = new shop('Seattle', 23, 65, 6.3);
let Tokyo = new shop('Tokyo', 3, 24, 1.2);
let Dubai = new shop('Dubai', 11, 38, 3.7);
let paris = new shop('Paris', 20, 38, 2.3);
let lima = new shop('Lima', 2, 16, 4.6);


let parent = document.getElementById('shops');
// console.log(parent);
let table = document.createElement('table');
parent.appendChild(table);

for (let i = 0; i < hours.length; i++) {

    let headrow = document.createElement('th');
    // headrow.textContent=this.name;
    table.appendChild(headrow);
    headrow.textContent = hours[i];


}






function shop(name, mincust, maxcust, avgcookie) {

    this.name = name;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgcookie = avgcookie;
    
    this.cookiesinhour = [];
    this.rowsummation=[];
    this.cellsummation=[];

}



shop.prototype.CustomerPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.try = random(this.mincust, this.maxcust) * this.avgcookie;
        this.try = Math.floor(this.try);

        this.cookiesinhour.push(this.try);
    }
    // console.log(this.cookiesinhour);


}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



shop.prototype.rowsum = function () {
    let sumValue = 0;

    
    for (let i = 0; i < table.rows.length; i++) {
        for(let x=0;x<hours.length;x++){

            sumValue = sumValue + parseInt(table.rows[i].cells[x].innerHTML);
            this.rowsummation.push(sumValue);

            
        }
        
        
        
        
    }
    
    console.log('sum is'+sumValue);
}


shop.prototype.lastsummation=function(){


}
shop.prototype.cellsum=function(){
    let cellsumVal=0;

            // for(let j=0;j<5;j++){
            for (let i = 0; i < table.rows.length; i++) {
                // for(let j=0;i<table.rows.length-10;j++){

                cellsumVal = cellsumVal + parseInt(table.rows[i].cells[0].innerHTML);
                
                
            // }
            
            
            
            
    
            
        }
        console.log('cellsum',cellsumVal);
}

shop.prototype.render = function () {

    this.CustomerPerHour();

    let shopname = document.createElement('tr');
    // headrow.textContent=this.name;
    table.appendChild(shopname);
    shopname.textContent = this.name;


    for (let i = 0; i < hours.length-1; i++) {
        let cook = document.createElement('td');
        shopname.appendChild(cook);
        cook.textContent = this.cookiesinhour[i];

    }
    
}

paris.render();
Seattle.render();
Tokyo.render();
lima.render();
Dubai.render();


let sumhour=document.createElement('tr');
table.appendChild(sumhour);
sumhour.textContent='total';



