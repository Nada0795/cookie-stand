'use strict';

let operationHours=['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM'];

let cont =document.getElementById('container');

function randomValue(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Seattle
// 23	65	6.3
const Seattle = {

locationName: 'Seattle',
minHourlyCustomers : 23 ,
maxHourlyCustomers : 65 ,
avgCookie : 6.3,
customerHour : [],
cookieHour : [],
total:0,

calRandomNumberCus : function(){
    for (let i=0; i< operationHours.length ;i++){
this.customerHour.push(randomValue(this.minHourlyCustomers,this.maxHourlyCustomers));
    }
    },
    
calcRandomNumCookie : function(){
for(let i =0 ; i < operationHours.length;i++){
this.cookieHour.push(this.customerHour[i] * Math.ceil(this.avgCookie));
this.total = this.total + this.cookieHour[i];
}
},

render:function(){
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


}
};


Seattle.calRandomNumberCus();
Seattle.calcRandomNumCookie();
Seattle.render();
console.log(Seattle);



//Tokyo
// 3	24	1.2
const Tokyo = {

    locationName: 'Tokyo',
    minHourlyCustomers : 3 ,
    maxHourlyCustomers : 24 ,
    avgCookie : 1.2,
    customerHour : [],
    cookieHour : [],
    total:0,
    
    calRandomNumberCus : function(){
        for (let i=0; i< operationHours.length ;i++){
    this.customerHour.push(randomValue(this.minHourlyCustomers,this.maxHourlyCustomers));
        }
        },
        
    calcRandomNumCookie : function(){
    for(let i =0 ; i < operationHours.length;i++){
    this.cookieHour.push(this.customerHour[i] * Math.ceil(this.avgCookie));
    this.total = this.total + this.cookieHour[i];
    }
    },
    
    render:function(){
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
    
    
    }
    };
    
    
    Tokyo.calRandomNumberCus();
    Tokyo.calcRandomNumCookie();
    Tokyo.render();
    console.log(Tokyo);
    


    // Dubai	11	38	3.7

    const Dubai = {

        locationName: 'Dubai',
        minHourlyCustomers : 11 ,
        maxHourlyCustomers : 38 ,
        avgCookie : 3.7,
        customerHour : [],
        cookieHour : [],
        total:0,
        
        calRandomNumberCus : function(){
            for (let i=0; i< operationHours.length ;i++){
        this.customerHour.push(randomValue(this.minHourlyCustomers,this.maxHourlyCustomers));
            }
            },
            
        calcRandomNumCookie : function(){
        for(let i =0 ; i < operationHours.length;i++){
        this.cookieHour.push(this.customerHour[i] * Math.ceil(this.avgCookie));
        this.total = this.total + this.cookieHour[i];
        }
        },
        
        render:function(){
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
        
        
        }
        };
        
        
        Dubai.calRandomNumberCus();
        Dubai.calcRandomNumCookie();
        Dubai.render();
        console.log(Dubai);


        // Paris	20	38	2.3

        const Paris = {

            locationName: 'Paris',
            minHourlyCustomers : 20 ,
            maxHourlyCustomers : 38 ,
            avgCookie : 2.3,
            customerHour : [],
            cookieHour : [],
            total:0,
            
            calRandomNumberCus : function(){
                for (let i=0; i< operationHours.length ;i++){
            this.customerHour.push(randomValue(this.minHourlyCustomers,this.maxHourlyCustomers));
                }
                },
                
            calcRandomNumCookie : function(){
            for(let i =0 ; i < operationHours.length;i++){
            this.cookieHour.push(this.customerHour[i] * Math.ceil(this.avgCookie));
            this.total = this.total + this.cookieHour[i];
            }
            },
            
            render:function(){
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
            
            
            }
            };
            
            
            Paris.calRandomNumberCus();
            Paris.calcRandomNumCookie();
            Paris.render();
            console.log(Paris);



            // Lima	2	16	4.6


            const Lima = {

                locationName: 'Lima',
                minHourlyCustomers : 2 ,
                maxHourlyCustomers : 16 ,
                avgCookie : 4.6,
                customerHour : [],
                cookieHour : [],
                total:0,
                
                calRandomNumberCus : function(){
                    for (let i=0; i< operationHours.length ;i++){
                this.customerHour.push(randomValue(this.minHourlyCustomers,this.maxHourlyCustomers));
                    }
                    },
                    
                calcRandomNumCookie : function(){
                for(let i =0 ; i < operationHours.length;i++){
                this.cookieHour.push(this.customerHour[i] * Math.ceil(this.avgCookie));
                this.total = this.total + this.cookieHour[i];
                }
                },
                
                render:function(){
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
                

                let div = document.createElement('div');
                cont.appendChild(div);
                
                }
                };
                
                
                Lima.calRandomNumberCus();
                Lima.calcRandomNumCookie();
                Lima.render();
                console.log(Lima);



                // table

            let table = document.createElement('table');
                div.appendChild(table);

                let firstrow = document.createElement('tr');
                table.appendChild(firstrow);


                let th = document.createElement('th');
                firstrow.appendChild(th);

                th.textContent = '6:00am';
              
                let th2 = document.createElement('th');
                firstrow.appendChild(th2);
                th2.textContent = '7:00am';


                let th3 = document.createElement('th');
                firstrow.appendChild(th3);
                th3.textContent = '8:00am';

                let th4 = document.createElement('th');
                firstrow.appendChild(th4);
                th4.textContent = '9:00am';

                let th5 = document.createElement('th');
                firstrow.appendChild(th5);
                th5.textContent = '10:00am';

                let th6 = document.createElement('th');
                firstrow.appendChild(th6);
                th6.textContent = '11:00am';

                let th7 = document.createElement('th');
                firstrow.appendChild(th7);
                th7.textContent = '12:00pm';


                let th8 = document.createElement('th');
                firstrow.appendChild(th8);
                th8.textContent = '1:00pm';

                let th9 = document.createElement('th');
                firstrow.appendChild(th9);
                th9.textContent = '2:00pm';

                let th10 = document.createElement('th');
                firstrow.appendChild(th10);
                th10.textContent = '3:00pm';

                let th11 = document.createElement('th');
                firstrow.appendChild(th11);
                th11.textContent = '4:00pm';

                let th12 = document.createElement('th');
                firstrow.appendChild(th12);
                th12.textContent = '5:00pm';

                let th13 = document.createElement('th');
                firstrow.appendChild(th13);
                th13.textContent = '6:00pm';

                let th14 = document.createElement('th');
                firstrow.appendChild(th14);
                th14.textContent = '7:00pm';

                let th15 = document.createElement('th');
                firstrow.appendChild(th15);
                th15.textContent = 'Daily Location Total';


                // second row

                let secondRow = document.createElement('tr');
                table.appendChild(secondRow);


                let td = document.createElement('td');
                secondRow.appendChild(td);

                td.textContent = '';
              
                let td2 = document.createElement('td');
                secondRow.appendChild(td2);
                td2.textContent = '';


                let td3 = document.createElement('td');
                secondRow.appendChild(td3);
                td3.textContent = '';

                let td4 = document.createElement('td');
                secondRow.appendChild(td4);
                td4.textContent = '';

                let td5 = document.createElement('td');
                secondRow.appendChild(td5);
                td5.textContent = '';

                let td6 = document.createElement('td');
                secondRow.appendChild(td6);
                td6.textContent = '';

                let td7 = document.createElement('td');
                secondRow.appendChild(td7);
                td7.textContent = '';


                let td8 = document.createElement('td');
                secondRow.appendChild(td8);
                td8.textContent = '';

                let td9 = document.createElement('td');
                secondRow.appendChild(td9);
                td9.textContent = '';

                let td10 = document.createElement('td');
                secondRow.appendChild(td10);
                td10.textContent = '';

                let td11 = document.createElement('td');
                secondRow.appendChild(td11);
                td11.textContent = '';

                let td12 = document.createElement('td');
                secondRow.appendChild(td12);
                td12.textContent = '';

                let td13 = document.createElement('td');
                secondRow.appendChild(td13);
                td13.textContent = '';

                let td14 = document.createElement('td');
                secondRow.appendChild(td14);
                td14.textContent = '';

                let td15 = document.createElement('td');
                secondRow.appendChild(td15);
                td15.textContent = '';

                
               

               
                
               
                
                
                
                
                
                
                
             
                
                
