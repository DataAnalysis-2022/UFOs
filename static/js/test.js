const myArray = [{id: 1, name:'pipi'}, {id: 2, name:'popo'}];
const id = 2;

const variableOne = myArray.filter(item => item.id === id);
console.log(variableOne[0].id);
console.log(variableOne[0].name);


let arr=[{id:1,title:'A', status:true}, {id:3,title:'B',status:true}, {id:2, title:'xys', status:true}];
//find where title=B
let x = arr.filter((a)=>{if(a.title=='B'){return a}});
console.log(x[0]); //[{id:3,title:'B',status:true}]


var heroes = [
	{name: "Batman", franchise: "DC"},
	{name: "Ironman", franchise: "Marvel"},
	{name: "Thor", franchise: "Marvel"},
	{name: "Superman", franchise: "DC"}
];

//var marvelHeroes =  heroes.filter(function(hero) {
//	return hero.franchise == "Marvel";
//});

var marvelHeroes =  heroes.filter((hero) => {
	return hero.franchise == "Marvel";
});

console.log(marvelHeroes[0]);
console.log(marvelHeroes[1]);

var filters =[];
var inputText =1;
if(inputText !== undefined){
    filters["a"].push("12");
  }
  else {
    filters =[];
  }