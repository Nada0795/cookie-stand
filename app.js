'use strict';

let operationHours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];

function randomValue(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}



let cont = document.getElementById('container');
let table = document.createElement('table');
cont.appendChild(table);

let arrOfObjects = [];
function Combine(locationName, minHourlyCustomers, maxHourlyCustomers, avgCookie) {
    this.locationName = locationName;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookie = avgCookie;
    this.customerHour = [];
    this.cookieHour = [];
    this.total = 0;
    arrOfObjects.push(this);


}

    // Prototype

    Combine.prototype.calRandomNumberCus = function () {

        for (let i = 0; i < operationHours.length; i++) {
            this.customerHour.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers));

        }
    }



    Combine.prototype.calcRandomNumCookie = function () {
        for (let i = 0; i < operationHours.length; i++) {
            this.cookieHour.push(this.customerHour[i] * Math.ceil(this.avgCookie));
            this.total = this.total + this.cookieHour[i];
        }


    }
    function getHeaderRow() {

        let headerRow = document.createElement('tr');
        table.appendChild(headerRow);

        let emptyCell = document.createElement('th');
        headerRow.appendChild(emptyCell);

        for (let i = 0; i < operationHours.length; i++) {
            let th = document.createElement('th');
            headerRow.appendChild(th);
            th.textContent = operationHours[i];


        }
        let dailyLoc = document.createElement('th');
        headerRow.appendChild(dailyLoc);
        dailyLoc.textContent = 'DailyLocTotal';


    }

    // getHeaderRow();

    Combine.prototype.render = function () {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let firstCell = document.createElement('th');
        tr.appendChild(firstCell);
        firstCell.textContent = this.locationName;
        for (let i = 0; i < this.cookieHour.length; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = this.cookieHour[i];
        }

        let lastCell = document.createElement('th');
        tr.appendChild(lastCell);
        lastCell.textContent = this.total;

    }
    //     let locationName = document.createElement('h2');
    //             cont.appendChild(locationName);
    //             locationName.textContent = this.locationName;


    //         let unOrderlist=document.createElement('ul');
    //         cont.appendChild(unOrderlist);

    //         for (let i = 0 ; i < operationHours.length; i++){
    //         let listItems =document.createElement('li');
    //         unOrderlist.appendChild(listItems);
    //         listItems.textContent = `${operationHours[i]} : ${this.cookieHour[i]
    //          } cookies`;
    //          }

    //         let dailyTotal = document.createElement('li');
    //         unOrderlist.appendChild(dailyTotal);
    //         dailyTotal.textContent = `Total : ${this.total} cookies `;

    // }




    // instances

    let Seattle = new Combine('Seattle', 23, 65, 6.3);
    let Tokyo = new Combine('Tokyo', 3, 24, 1.2);
    let Dubai = new Combine('Dubai', 11, 38, 3.7);
    let Paris = new Combine('Paris', 20, 38, 2.3);
    let Lima = new Combine('Lima', 2, 16, 4.6);

    console.log(arrOfObjects);

    getHeaderRow();
    for (let i = 0; i < arrOfObjects.length; i++) {
        arrOfObjects[i].calRandomNumberCus();
        arrOfObjects[i].calcRandomNumCookie();
        arrOfObjects[i].render();
    }

    function footerRow() {
        let lastRow = document.createElement('tr');
        table.appendChild(lastRow);
        let firstCell = document.createElement('th');
        lastRow.appendChild(firstCell);
        firstCell.textContent = 'Totals';
        let megaTotal = 0;

        for (let i = 0; i < operationHours.length; i++) {
            let sum = 0;

            for (let j = 0; j < arrOfObjects.length; j++) {
                sum += arrOfObjects[j].cookieHour[i]; 
            }

            // sum = Seattle.cookieHour[i] + Tokyo.
            // cookieHour[i] + Paris.cookieHour[i] + Dubai.cookieHour[i] +
            // Lima.cookieHour[i];

            let td = document.createElement('td');
            lastRow.appendChild(td);
            td.textContent = sum;
            megaTotal = megaTotal + sum;

        }
        let totals = document.createElement('th');
        lastRow.appendChild(totals);
        totals.textContent = megaTotal;
    }

    footerRow();

    // Seattle.calRandomNumberCus();
    // Seattle.calcRandomNumCookie ();
    // Seattle.render();

    // Tokyo.calRandomNumberCus();
    // Tokyo.calcRandomNumCookie ();
    // Tokyo.render();


    // Dubai.calRandomNumberCus();
    // Dubai.calcRandomNumCookie ();
    // Dubai.render();


    // Paris.calRandomNumberCus();
    // Paris.calcRandomNumCookie ();
    // Paris.render();


    // Lima.render();
    // Lima.calRandomNumberCus();
    // Lima.calcRandomNumCookie ();
=======
                // let cookieHour = [];
                // let customerHour = [];
                function Combine (locationName,minHourlyCustomers,maxHourlyCustomers,avgCookie,customerHour,cookieHour){
                this.locationName = locationName;
                this.minHourlyCustomers = minHourlyCustomers;
                this.maxHourlyCustomers = maxHourlyCustomers;
                this.avgCookie = avgCookie;
                this.customerHour= customerHour;
                this.cookieHour= cookieHour;

                // customerHour.push(this);
                // cookieHour.push(this);
            

                // console.log(this)
            }

            // Prototype

            Combine.prototype.calRandomNumberCus = function(){

                for (let i=0; i< operationHours.length ;i++){
                            this.customerHour.push(randomValue(this.minHourlyCustomers,this.maxHourlyCustomers));

            }
        }



        Combine.prototype.calcRandomNumCookie = function(){
            for(let i =0 ; i < operationHours.length;i++){
                        this.cookieHour.push(this.customerHour[i] * Math.ceil(this.avgCookie));
                        this.total = this.total + this.cookieHour[i];
                        }


        }
        Combine.prototype.render = function(){

            let locationName = document.createElement('h2');
                    cont.appendChild(locationName);
                    locationName.textContent = this.locationName;
                
                
                let unOrderlist=document.createElement('ul');
                cont.appendChild(unOrderlist);
                
                for (let i = 0 ; i < operationHours.length; i++){
                let listItems =document.createElement('li');
                unOrderlist.appendChild(listItems);
                listItems.textContent = `${operationHours[i]} : ${this.cookieHour[i]
                 } cookies`;
                 }
                
                let dailyTotal = document.createElement('li');
                unOrderlist.appendChild(dailyTotal);
                dailyTotal.textContent = `Total : ${this.total} cookies `;
                Lima.calRandomNumberCus();
                Lima.calcRandomNumCookie ();
                Lima.render();


