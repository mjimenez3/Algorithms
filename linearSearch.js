let array = ["b", "a", "c", "a", "d", "a"];
let newArray = [];

function search(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            newArray.push(arr[i]);
        }
    } return newArray;
}
search(array, "a");
