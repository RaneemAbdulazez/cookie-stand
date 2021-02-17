'usesrict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let shops=[];
let cookiesinhour=[];

let Seattle = new shop('Seattle', 23, 65, 6.3);
let Tokyo = new shop('Tokyo', 3, 24, 1.2);
let Dubai = new shop('Dubai', 11, 38, 3.7);
let paris = new shop('Paris', 20, 38, 2.3);
let lima = new shop('Lima', 2, 16, 4.6);



let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);
//creat header
let headerRow=document.createElement('tr');
table.appendChild(headerRow);
let th1=document.createElement('th');
headerRow.appendChild(th1);
th1.textContent='city';
for(let i=0;i<hours.length;i++){
let th1=document.createElement('th');
headerRow.appendChild(th1);
th1.textContent=hours[i];
}


function shop(name, mincust, maxcust, avgcookie) {

    this.name = name;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgcookie = avgcookie;
    shops.push(this);
    

}

shop.prototype.CustomerPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.try = random(this.mincust, this.maxcust) * this.avgcookie;
        this.try = Math.floor(this.try);

        cookiesinhour.push(this.try);
    }
    console.log(cookiesinhour);

}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


shop.prototype.render=function(){
    this.CustomerPerHour();

    let shopname = document.createElement('tr');
    // headrow.textContent=this.name;
    table.appendChild(shopname);
    shopname.textContent = this.name;


    for (let i = 0; i < hours.length; i++) {
        let cook = document.createElement('td');
        .appendChild(cook);
        cook.textContent = this.cookiesinhour[i];

    }
    

    
}

Seattle.render();





