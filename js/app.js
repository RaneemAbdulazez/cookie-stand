'usestrict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let shops = [];


let Seattle = new shop('Seattle', 23, 65, 6.3);
let Tokyo = new shop('Tokyo', 3, 24, 1.2);
let Dubai = new shop('Dubai', 11, 38, 3.7);
let paris = new shop('Paris', 20, 38, 2.3);
let lima = new shop('Lima', 2, 16, 4.6);


function shop(name, mincust, maxcust, avgcookie) {
    this.name = name;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgcookie = avgcookie;
    shops.push(this);
    customerPerHuour = [];
    cookiesPerHour = [];
    summation = 0;
    summation1 = 0;

}

// console.log(Dubai.mincust);



// arrays 
shop.prototype.costperHour = function () {

    for (let x = 0; x < hours.length; x++) {
        this.cost = random(this.mincust, this.maxcust);
        customerPerHuour.push(this.cost);
        cookiesPerHour[x] = Math.floor(this.cost * this.avgcookie);
        // console.log('thiscost',this.cost);

    }
    console.log(cookiesPerHour);
}
function random(min, max) {
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log('rand',rand);
    return rand;
}




//creat totals function

shop.prototype.total = function () {
    let sum = 0;
    for (let i = 0; i < hours.length; i++) {

        sum += cookiesPerHour[i];

    }
    summation = sum;
    // console.log('sum', sum);
    return sum;

}


//creat hourly totals 


shop.prototype.hourlytotals = function () {

    for (let i = 0; i < shops.length; i++) {
        let sum1 = 0;
        for (let j = 0; j < hours.length;) {
            sum1 += cookiesPerHour[i];
        }
        summation1 = sum1;
        console.log('sum2', summation1);
        return sum1;
    }



}







//creat the table tag

let parent = document.getElementById('shops');
let table = document.createElement('table');
parent.appendChild(table);


//create table first cell 'city'

let headrow = document.createElement('th');
parent.appendChild(headrow);
headrow.textContent = 'city';


//creat the hours head row
for (let i = 0; i < hours.length; i++) {
    let firstrow = document.createElement('th');
    parent.appendChild(firstrow);
    firstrow.textContent = hours[i];


}

//creat total cell 

let headrow1 = document.createElement('th');
parent.appendChild(headrow1);
headrow1.textContent = 'total';

//creat total2 cell 

let headrow3 = document.createElement('tr');
parent.appendChild(headrow1);
headrow1.textContent = 'hourlytotal';


//create the cities row

shop.prototype.render = function () {
    this.costperHour();
    let shopname = document.createElement('tr');
    // headrow.textContent=this.name;
    parent.appendChild(shopname);
    shopname.textContent = this.name;


    //creat the cookies row
    for (let i = 0; i < hours.length; i++) {
        let td1 = document.createElement('td');
        shopname.appendChild(td1);
        td1.textContent = cookiesPerHour[i];
    }

    // total 

    this.total();
    let tot = document.createElement('td');
    shopname.appendChild(tot);
    tot.textContent = summation;

    //total 2
    this.hourlytotals();
    let tot2 = document.createElement('tr');
    // headrow.textContent=this.name;
    parent.appendChild(tot2);
    shopname.textContent = this.summation1;

}










Dubai.render();
paris.render();
lima.render();
Tokyo.render();
Seattle.render();


