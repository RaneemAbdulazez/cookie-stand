"usestrict";

let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
let shops = [];
let tot = [];
let Meg = 0;

let parent = document.getElementById("shops");

function shop(name, mincust, maxcust, avgcookie) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgcookie = avgcookie;
  this.customerPerHuour = [];
  this.cookiesPerHour = [];
  this.summation = 0;

  console.log(this);
  this.costperHour(); //ask about

  shops.push(this);
}

shop.prototype.costperHour = function () {
  for (let x = 0; x < hours.length; x++) {
    this.cost = random(this.mincust, this.maxcust);
    this.customerPerHuour.push(this.cost);
    this.cookiesPerHour[x] = Math.floor(this.cost * this.avgcookie);
    // console.log( this.name,this.cookiesPerHour[x]);
  }
};
function random(min, max) {
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  // console.log('rand',rand);
  return rand;
}

//creat totals function

shop.prototype.total = function () {
  let sum = 0;
  for (let i = 0; i < hours.length; i++) {
    sum += this.cookiesPerHour[i];
  }
  // console.log(this.name,'sum', sum);
  this.summation = sum;
  // console.log();
  return sum;
};

//create total2 function
totalHours = function () {
  let megaTotal = 0;
  // console.log(hours);
  for (let i = 0; i < hours.length; i++) {
    let total = 0;
    for (let j = 0; j < shops.length; j++) {
      // console.log(shops);

      // console.log(this.cookiesPerHour);
      // console.log(cookiesPerHour[i]);
      // console.log(shops[j].cookiesPerHour[i]);
      console.log(shops[j].cookiesPerHour[i]);

      total += shops[j].cookiesPerHour[i];
      // tot=total;
      megaTotal += shops[j].cookiesPerHour[i];
      // console.log(shops[j].totalColom);
    }

    console.log("--------");
    console.log(total);
    tot.push(total);
    // console.log('tot'+tot);
  }
  // console.log(megaTotal);
  Meg = megaTotal;
  return;
};

//creat the table tag

let table = document.createElement("table");
parent.appendChild(table);

//create table first cell 'city'

let headrow = document.createElement("th");
parent.appendChild(headrow);
headrow.textContent = "city";

//creat the hours head row
for (let i = 0; i < hours.length; i++) {
  let firstrow = document.createElement("th");
  parent.appendChild(firstrow);
  firstrow.textContent = hours[i];
}

//creat hourlytotal cell

let headrow1 = document.createElement("th");
let headrow3 = document.createElement("tr");
parent.appendChild(headrow1);
headrow1.textContent = "hourlytotal";

//create the cities row

shop.prototype.render = function () {
  let shopname = document.createElement("tr");
  // headrow.textContent=this.name;
  parent.appendChild(shopname);
  let td0 = document.createElement("td");
  shopname.appendChild(td0);
  td0.textContent = this.name;

  //creat the cookies row
  for (let i = 0; i < hours.length; i++) {
    let td1 = document.createElement("td");
    shopname.appendChild(td1);
    td1.textContent = this.cookiesPerHour[i];
  }

  // total

  this.total();
  let tot = document.createElement("td");
  shopname.appendChild(tot);
  tot.textContent = this.summation;
};

let Seattle = new shop("Seattle", 23, 65, 6.3);
let Tokyo = new shop("Tokyo", 3, 24, 1.2);
let Dubai = new shop("Dubai", 11, 38, 3.7);
let paris = new shop("Paris", 20, 38, 2.3);
let lima = new shop("Lima", 2, 16, 4.6);

for (let i = 0; i < shops.length; i++) {
  // shops[i].costperHour();
  shops[i].render();
}

//total2
totalHours();
let tot2 = document.createElement("tr");
// headrow.textContent=this.name;
parent.appendChild(tot2);
let td4 = document.createElement("td");
tot2.appendChild(td4);
td4.textContent = "total";

for (let i = 0; i < hours.length; i++) {
  let td1 = document.createElement("td");
  tot2.appendChild(td1);
  td1.textContent = tot[i];
}

let td2 = document.createElement("td");
tot2.appendChild(td2);
td2.textContent = Meg;
