export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  function Node(value) {
    this.value = value;
    this.next = null;
  }

  if (!array) {
    throw new Error('Creating list from undefined array');
  }
  if (!array.length) {
    throw new Error('Creating list from empty array');
  }

  const linkList = new Node(array[0]);
  for (let idx = 1; idx < array.length; idx += 1) {
    const node = new Node(array[idx]);
    let p = linkList;
    while (p.next != null) {
      p = p.next;
    }
    p.next = node;
  }
  return linkList;
}
