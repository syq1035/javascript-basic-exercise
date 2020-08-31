export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (string && (typeof string)) {
    if (prediction) {
      for (let i = 0; i < string.length; i += 1) {
        if (prediction(string[i])) {
          return i;
        }
      }
      return string.indexOf(prediction.c);
    }
    return string.length;
  }

  return 0;
}
