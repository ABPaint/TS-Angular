let str:string = "Hello World!";
let reverse:string = '';

function reversed(a:string){
for (let i:number =str.length ; i>=0; i--){
    reverse = reverse + str.charAt(i); 
}}

reversed(str)
console.log(reverse)