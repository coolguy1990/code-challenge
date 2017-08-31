// Write a program that uses console.log to print
// all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// For numbers which are multiples of both three and five print “FizzBuzz”.


// complexity: O (n)
function fizbuzz(n) {
  for(let i = 0; i < n; i++) {
    if (i % 5 && i % 3) {
      console.log('FizzBuzz');
    } else if (i % 5) {
      console.log('Buzz');
    } else if (i % 3) {
      console.log('Fizz');
    }
  }
}

fizbuzz(100);
