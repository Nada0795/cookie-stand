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
                
                
                }
                };
                
                
                Lima.calRandomNumberCus();
                Lima.calcRandomNumCookie();
                Lima.render();
                console.log(Lima);