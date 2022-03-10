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

// Quoting Strings with Single Quotes
// String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

// const doubleQuoteStr = "This is a string";
// const singleQuoteStr = 'This is also a string';
// The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

// const conversation = 'Finn exclaims to Jake, "Algebraic!"';
// However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

// const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
// const badStr = 'Finn responds, "Let's go!"';
// Here badStr will throw an error.

// In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

// Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.

const myStrnew = '<a href="http://www.example.com" target="_blank">Link</a>';

let href = '<a href="https://google.com" target_blank>Links New</a>';
console.log(href);
