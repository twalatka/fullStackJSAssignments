export const greeting = 'Hello World'; //Assign the greeting message to 'Hello World'.
export const characterAt = greeting.charAt(3); //Create and export a variable export const characterAt = ??? that retrieves the 4th charater in the greeting variable.
export const greetingArray = greeting.split(""); //Create and export a variable export const greetingArray = ??? that converts the hello world to an array ([ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ])
export const begins = (str, char) => {
        return (str.charAt(0) === char); //Create and export a variable begins(str, char) that creates a function that returns true if the string begins with the specified char, case sensitive
        export const beginsInsensitive = (str, char) => {
                return (str.charAt(0).toLowerCase() === char.toLowerCase()); //Create and export a variable beginsInsensitive(str, char) that creates a function that retuns true if the string begins with a specified char without looking at case