console.log("heloo");

let num = 110;

for (let loop = 1; loop <= num; loop++) {
  console.log(loop);
}

let bool = true;

console.log("Boolean Value: ".bool);

//is prime question

let n = 47;
let flag = 1;

for (let i = 2; i * i <= n; i++) {
  if (n % i == 0) {
    flag = 0;
    break;
  }
}

if (flag == 1) {
  console.log("prime");
} else {
  console.log("not prime");
}
