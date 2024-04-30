/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

/*
  Pseudocode:
  Let list = empty string
  Loop through the conceptList array
    If the current index is not the last index
      Add the value in that current index to the list string and add a comma
    Else
      Add the value in that current index to the list string
    End If
  End Loop
  Return the list string
  
*/
const joinList = function(conceptList) {
  let list = "";
  for (let i = 0; i < conceptList.length; i++) {
    if (i !== conceptList.length - 1) {
      list += conceptList[i] + ", ";
    } else {
      list += conceptList[i];
    }
  }
  return list;
};

// Test / Driver Code below...
const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving",
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
