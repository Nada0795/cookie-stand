'use strict';

let sArr=['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM']
function randomValue(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Seattle

let Seattle = {

Location : 'Seattle',
min : 23 ,
max : 65 ,
AvgCookie : 6.3
cookiePerHour : [],
totCookie : null ,

ranHour : function(){
let ranHour = randomValue(this.min,this.max)
return ranHour;
},

cookieAmount : function(){
for(let i=0 ; i<14 ; i++){

    let cPerHour = this.ranHour()*this.AvgCookie;
    this.cookiePerHour.push(math.floor(cookiePerHour));
    console.log(this.cookiePerHour);
}

},

cookTotal : function(){
for (let i =0 ; i<this.cookiePerHour.length ; i++){
this.totCookie=this.totCookie+this.cookiePerHour [i];
}

this.cookiePerHour.push(this.totCookie);

},

renderCook : function(){
let h2=golbeVar.appendchild(document.createElement('h2'));
h2.textcontent =this.location;


let ul=golbeVar.appendchild(document.createElement('ul'));
for (i=0 ; i<sArr.length;i++){
    let li=document.createElement('li'));
    ul.appendchild(li);
    li.textContent='${sArr[i]} ${this.cookiePerHour[i]}';
}



},
Seattle.cookieAmount();
Seattle.cookTotal();
Seattle.renderCook();




//Tokyo
let Tokyo = {

    Location : 'Tokyo',
    min : 3 ,
    max : 24 ,
    AvgCookie : 1.2
    cookiePerHour : [],
    totCookie : null ,
    
    ranHour : function(){
    let ranHour = randomValue(this.min,this.max)
    return ranHour;
    },
    
    cookieAmount : function(){
    for(let i=0 ; i<14 ; i++){
    
        let cPerHour = this.ranHour()*this.AvgCookie;
        this.cookiePerHour.push(math.floor(cookiePerHour));
        console.log(this.cookiePerHour);
    }
    
    },
    
    cookTotal : function(){
    for (let i =0 ; i<this.cookiePerHour.length ; i++){
    this.totCookie=this.totCookie+this.cookiePerHour [i];
    }
    
    this.cookiePerHour.push(this.totCookie);
    
    },
    
    renderCook : function(){
    let h2=golbeVar.appendchild(document.createElement('h2'));
    h2.textcontent =this.location;
    
    
    let ul=golbeVar.appendchild(document.createElement('ul'));
    for (i=0 ; i<sArr.length;i++){
        let li=document.createElement('li'));
        ul.appendchild(li);
        li.textContent='${sArr[i]} ${this.cookiePerHour[i]}';
    }
    
    
    
    },
    Seattle.cookieAmount();
    Seattle.cookTotal();
    Seattle.renderCook();
    


    // Dubai
    let Dubai = {

        Location : 'Dubai',
        min : 11 ,
        max : 38 ,
        AvgCookie : 3.7
        cookiePerHour : [],
        totCookie : null ,
        
        ranHour : function(){
        let ranHour = randomValue(this.min,this.max)
        return ranHour;
        },
        
        cookieAmount : function(){
        for(let i=0 ; i<14 ; i++){
        
            let cPerHour = this.ranHour()*this.AvgCookie;
            this.cookiePerHour.push(math.floor(cookiePerHour));
            console.log(this.cookiePerHour);
        }
        
        },
        
        cookTotal : function(){
        for (let i =0 ; i<this.cookiePerHour.length ; i++){
        this.totCookie=this.totCookie+this.cookiePerHour [i];
        }
        
        this.cookiePerHour.push(this.totCookie);
        
        },
        
        renderCook : function(){
        let h2=golbeVar.appendchild(document.createElement('h2'));
        h2.textcontent =this.location;
        
        
        let ul=golbeVar.appendchild(document.createElement('ul'));
        for (i=0 ; i<sArr.length;i++){
            let li=document.createElement('li'));
            ul.appendchild(li);
            li.textContent='${sArr[i]} ${this.cookiePerHour[i]}';
        }
        
        
        
        },
        Seattle.cookieAmount();
        Seattle.cookTotal();
        Seattle.renderCook();
        


        // Paris

        let Paris= {

            Location : 'Paris',
            min : 20 ,
            max : 38 ,
            AvgCookie : 2.3
            cookiePerHour : [],
            totCookie : null ,
            
            ranHour : function(){
            let ranHour = randomValue(this.min,this.max)
            return ranHour;
            },
            
            cookieAmount : function(){
            for(let i=0 ; i<14 ; i++){
            
                let cPerHour = this.ranHour()*this.AvgCookie;
                this.cookiePerHour.push(math.floor(cookiePerHour));
                console.log(this.cookiePerHour);
            }
            
            },
            
            cookTotal : function(){
            for (let i =0 ; i<this.cookiePerHour.length ; i++){
            this.totCookie=this.totCookie+this.cookiePerHour [i];
            }
            
            this.cookiePerHour.push(this.totCookie);
            
            },
            
            renderCook : function(){
            let h2=golbeVar.appendchild(document.createElement('h2'));
            h2.textcontent =this.location;
            
            
            let ul=golbeVar.appendchild(document.createElement('ul'));
            for (i=0 ; i<sArr.length;i++){
                let li=document.createElement('li'));
                ul.appendchild(li);
                li.textContent='${sArr[i]} ${this.cookiePerHour[i]}';
            }
            
            
            
            },
            Seattle.cookieAmount();
            Seattle.cookTotal();
            Seattle.renderCook();
            

            // Lima

            let Lima= {

                Location : 'Lima',
                min : 2 ,
                max : 16 ,
                AvgCookie : 4.6
                cookiePerHour : [],
                totCookie : null ,
                
                ranHour : function(){
                let ranHour = randomValue(this.min,this.max)
                return ranHour;
                },
                
                cookieAmount : function(){
                for(let i=0 ; i<14 ; i++){
                
                    let cPerHour = this.ranHour()*this.AvgCookie;
                    this.cookiePerHour.push(math.floor(cookiePerHour));
                    console.log(this.cookiePerHour);
                }
                
                },
                
                cookTotal : function(){
                for (let i =0 ; i<this.cookiePerHour.length ; i++){
                this.totCookie=this.totCookie+this.cookiePerHour [i];
                }
                
                this.cookiePerHour.push(this.totCookie);
                
                },
                
                renderCook : function(){
                let h2=golbeVar.appendchild(document.createElement('h2'));
                h2.textcontent =this.location;
                
                
                let ul=golbeVar.appendchild(document.createElement('ul'));
                for (i=0 ; i<sArr.length;i++){
                    let li=document.createElement('li'));
                    ul.appendchild(li);
                    li.textContent='${sArr[i]} ${this.cookiePerHour[i]}';
                }
                
                
                
                },
                Seattle.cookieAmount();
                Seattle.cookTotal();
                Seattle.renderCook();