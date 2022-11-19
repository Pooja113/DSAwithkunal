const users = [
  {firstName: "Pooja", lastName: "Paul", age: 30},
  {firstName: "Aman", lastName: "Pal", age: 20},
  {firstName: "Deepa", lastName: "Paul", age: 23},
  {firstName: "Anu", lastName: "Paul", age: 35},
];

const reduceHW = users.reduce((acc,curr)=>{
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc
},[])


console.log(reduceHW)  