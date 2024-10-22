/*
let num : number = 10_34;
let your_name : string = "vishvamitra";

console.log(num , your_name);



let age : any = 20;
console.log(typeof(age) , age);



let arr : any[] = ["vishva" , 45 , true];

arr.forEach((val)=>{
    console.log(val);
});

arr = ["vishvamitr" , "vishvamite"]; // we can update it further if you want.. 

arr.forEach((e)=>{
    console.log(e);
})




let arr : [number , string] = [34 , "vishvamitra"];
console.log(arr);

arr.push("vushf");
arr.push(34);
console.log(arr);

let arr1 : [number , string] = [45 , "vishvaitra"];
arr1.push(34);
console.log(arr1);



// enum type in typescript..
enum Direction {up , down , left , right};
let move : Direction = Direction.up;

console.log(move);





// functions in typescript...

// function to calculate incom tax in india...
function calculateTax(income : number) : number { // here income is for whole year..
    if(income < 300_000) return 0;
    const t = Math.floor(income / 300_000) - 1; // total income divided into parts..
    console.log(t);
    let total : number = 0; // initially total income...
    let i = 5; // for every round tax % increase by 5..
    for(let j : number = 1; j <= t; j++) {
        total = total + 300_000 * (i / 100);
        i = i + 5;
    };
    console.log("final tax deduction.." , i);
    console.log("Income left fter all tax.." , (inc ome - ((t + 1) * 300_000)));
    const xx : number = ((income - ((t + 1) * 300_000)) * (i / 100));
    console.log(xx);
    total = total + xx;
    return total;
};

const tax : number = calculateTax(600_087);
console.log(tax);





// objects in typescript...
const Person : {name : string , age : number , gender? : string} = {
    name : "Vishvamitra",
    age : 34
};

console.log(Person);






// type in typescripts...
type Person = {
    readonly name : string, // this properly cannot be changes..
    age : number,
    gender? : string
};

const Vishvamitra : Person = {
    name : "Vishvamitra",
    age : 34
};
Vishvamitra['age'] = 45;
console.log(Vishvamitra);

*/


// type chaining in typescript...

type Customer = {
    name : string,
};

function getCustomer(id : number) : Customer | null {
    if(id === 0) return null;
    return {
        name : "Vishvaitra Kumar Singh"
    };
};

console.log(getCustomer(0));
console.log(getCustomer(4));