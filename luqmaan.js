// Calculate Factorial:
// This function calculates the factorial of a given integer.

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  // console.log(factorial(5));
  
  // Generate Fibonacci Sequence:
  // This snippet generates a Fibonacci sequence up to a specified number of terms.
  
  function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  }
  // console.log(fibonacci(8));
  
  // Title Case a Sentence:
  // This code converts the first letter of each word in a sentence to uppercase.
  
  function titleCase(sentence) {
    return sentence
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  // console.log(titleCase("the quick brown fox"));
  
  // Convert Fahrenheit to Celsius:
  // This snippet converts temperature from Fahrenheit to Celsius.
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  // console.log(fahrenheitToCelsius(32));
  // console.log(fahrenheitToCelsius(68));
  
  // Check for Anagram:
  // This function checks if two strings are anagrams of each other.
  
  function isAnagram(str1, str2) {
      const normalize = (str) =>
        str.toLowerCase().replace(/[\W_]/g, "").split("").sort().join("");
      return normalize(str1) === normalize(str2);
  }
  // console.log(isAnagram("listen", "silent"));
  // console.log(isAnagram("hello", "world"));