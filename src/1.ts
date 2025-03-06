let num = Math.floor(Math.random() * 10);
let sum = 0;
for (var i = 0; i < num; i++) {
    var x = Math.floor(Math.random() * 10);
    sum += x;
}
alert("The sum is " + sum);
