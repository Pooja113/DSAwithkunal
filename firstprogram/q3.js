// Write a program to input principal, time, and rate (P, T, R) from the user and find Simple Interest.

var si = function () {
  const p = prompt("Principal");
  const r = prompt("Rate");
  const t = prompt("Time"); 
  const si = (p*r*t)/100;
  return si;
}

console.log(si())