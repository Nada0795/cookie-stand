'use strict';

let operationHours=['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM'];

let cont =document.getElementById('container');

function randomValue(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

