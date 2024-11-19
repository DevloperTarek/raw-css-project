
let x =5;

let y = 6;
x = y;
y = 7;
console.log(x);
console.log(y);

let a = ['js','php'];
let b = ['html',"css"];
a = b

b.push('Go');
console.log(a);
console.log(b);

let fruit = ['mango','kola','pora','sona','sona','kola'];
let res = fruit.findIndex((e)=> {
     e === 'pora' || e === 'sona'
});
console.log(res);
let resF = fruit.filter((f)=> f === 'sona' || f === 'kola');
console.log(resF);

let num = [1,2,3,4,5,6];
let result = num.reduce((total,current)=> total + current, 0);
console.log(result);
for(numbers of num){
     console.log(numbers);
}
let objt = {
     name: 'tarek',
     year: 2024,
     author:"Robin"
}
for(resOfOb in objt){
     console.log(objt[resOfOb]);
}