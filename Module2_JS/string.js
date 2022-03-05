let str = "It is My First JavaScript Class";

//String Length
console.log(str.length);

// String Replace
console.log(str.replace("is", "was"));

// String Char At
console.log(str.charAt(8));

//Escaping Literal Quotes in Strings

// When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

// const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

const myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line
console.log(myStr);
