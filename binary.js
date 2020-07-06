// const my_array = [3,1,4,3,8,6,1,0];
const my_array = [4, 3, 4, 4, 1, 5, 7, 1, 0];
// const my_array = [3,4,1,1,125,0];
// const my_array = [2,5,1,0];
// const my_array = [3,6,2,4,4,6,1,1,4,5,1,0];
// const my_array = [1,1,1,1,3,0];
const flags = [];

function main(my_array) {
  const starter = my_array[0]; // 4
  const root_num = my_array[starter]; // 1
  for (var i = 0; i < my_array.length; i++) {
    flags.push(false);
  }

  const nodeResult = node(starter, 0);
  console.log("nodeResult: ", nodeResult);

  if (nodeResult) {
    console.log("SOLVED!!!");
    return;
  }
}

function node(index, prev_index) {
  if (index <= 0) {
    return false;
  }

  if (flags[index] === false) {
    flags[index] = true;
  } else {
    return false;
  }

  if (my_array[index] == 0) {
    return true;
  } else {
    if (index + my_array[index] < my_array.length) {
      return node(index + my_array[index], index);
    }
    return node(prev_index - my_array[prev_index], prev_index);
  }
}

function goLeft(left_index) {
  console.log("left called with left_index ", left_index);
  if (left_index <= 0) {
    return false;
  }

  const new_index = left_index - my_array[left_index];

  if (new_index <= 0) {
    console.log("new index less than 0 in goLeft");
    return false;
  }

  node(new_index);
}

function goRight(right_index) {
  console.log("right called");
  // exceeding
  if (right_index >= my_array.length) {
    console.log("goRight false return");
    return false;
  }

  // Finanlly, found it
  if (my_array[right_index] === 0) {
    console.log("goRight true return");
    return true;
  }

  const new_index = my_array[right_index] + right_index; // 5 + 5
  if (new_index >= my_array.length) {
    return false;
  }
  console.log("goRight calling node");
  node(new_index);
}

main(my_array);
