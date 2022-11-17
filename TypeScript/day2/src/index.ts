// let a: number =10;
// let b;

// function render (document: any){
//     return document;
// }

// const json = '{"a":10, "b=11.2"}';
// const result = JSON.parse(json);
// console.log(result);

// let skills: string[] = [];

// skills[0]="hi";
// skills[1]="bye";

// let ser = [1,2,3];
// let doubleit = ser.map(e=>e*2);
// console.log(doubleit);


// let skill:[string,number];

// skill= ["Java",5];


enum Month {
    Jan,
    Feb,
    Match,
    April,
    May,
    Jun,
    July,
}

function isitsummer (month:Month){
    let isummer : boolean;
    switch(month){
        case Month.Jun:
        case Month.July:
            isummer=true;
            break;
        default:
            isummer = false;
            break;
        
        }
        return isummer;
}

console.log(isitsummer(4))