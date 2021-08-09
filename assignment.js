/* Problem-1: Convert sher to mon */
function seerToMon(seer){
    if(!seer||isNaN(seer)|| seer<0 || seer===true){ //input validation check. Boolean input not allow
        return 'Please enter valid input'
    }
    else{
        let mon = seer/40; //1 Mon equal to 40 ser
    return mon; //result
    }
}
// console.log(seerToMon());

// Problem-2: Calculate the total sales
function totalSales(numOfTShirt,numOfPant,numOfShoose){
    const singleTShirtPrice = 100;
    const singlePantPrice = 200;
    const singleShoosePrice = 500;
    if(isNaN(numOfTShirt)||isNaN(numOfPant)||isNaN(numOfShoose) || numOfPant<0|| numOfTShirt<0 || numOfShoose<0 || numOfPant===true || numOfTShirt===true||numOfShoose===true ||!numOfPant||!numOfShoose||!numOfTShirt){
        return 'Please enter valid input'; //input validation check
    }
    else{
        const totalSale = (numOfTShirt*singleTShirtPrice)+(numOfPant*singlePantPrice)+(numOfShoose*singleShoosePrice); //calculate total salse
    return totalSale; //result
    }
}

// console.log(totalSales(2,1,-1));

// Problem-3: Calculate delivery charge
function deliveryCost(numOfTShirt){
    if(isNaN(numOfTShirt)||numOfTShirt<0 || numOfTShirt=== true||!numOfTShirt){
        return "Hey Guys! Please enter a valid input"
    }
    else{
const first100DeliveryCost = 100*100;
    const second100DeliveryCost = 100*80;
    if(numOfTShirt<=100){                       //for first 100 pice t-Shirt
        const totalDeliveryCost = 100*numOfTShirt;
        return totalDeliveryCost;  //result
    }
    else if(numOfTShirt<=200 ){                 //for 101 to 200 pice t-Shirt
        const restTShirt = numOfTShirt - 100;
        totalDeliveryCost = first100DeliveryCost+(restTShirt*80);
        return totalDeliveryCost; //result
    }
    else if(numOfTShirt>200){                   //for 201 to more pice t-Shirt
        restTShirt = numOfTShirt - 200;
        totalDeliveryCost = first100DeliveryCost+ second100DeliveryCost +(restTShirt*50);
        return totalDeliveryCost;  //result
    }
    }
    
}
// console.log(deliveryCost())

// Problem-4: Find perfect friend

const friends = ["Abdullah","Abdul karim","Mohammad","Alim","Rafiq","Shafiq","Liton","Komol"] //list of friends

function perfectFriend(friends){
    if(!friends||friends==''){
        return "Please enter the list of friends"
    }
    else{
        for(const friend of friends){  // apply loop on array
            if(friend.length == 5){
                return friend;   //result
            }
        }  
     }
}
console.log(perfectFriend('bappy'))