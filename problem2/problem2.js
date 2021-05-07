/*
Part 1 

You are given a JSON file containing an array of JSON objects that represent people.
Each person has a role and a workplace.
You are tasked to create a new field for each person object that combines the role and workplace fields.

You do not have to save the file, just print it to the console.

EX:
Orginal:{
    name:'Elon Musk',
    ...
    role:'CEO',
    workplace:'Tesla'
}

New:{
    name:'Elon Musk',
    ...
    role:'CEO',
    workplace:'Tesla',
    title:'CEO at Tesla'
}
*/
function problem2_1(){
    //PUT YOUR CODE HERE
}
problem2_1()





/*
Part 2 

Add another field to each person called password that is the output of the 
asyncronous function "randomPasswordGenerator." 

You are given this function and do not need to code it. 

The function takes in a random string seed. Since you want to ensure each password
is different, make sure you input a string that is unique to each person
and can be recovered.

*/
async function problem2_2(){
    //PUT YOUR CODE HERE
}
problem2_2()


/*
Input = seed:string
Returns = int
*/
async function randomPasswordGenerator(seed){
    await new Promise(resolve => setTimeout(resolve, 100));
    return seed.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)
}
