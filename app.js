console.log("Class 79 Class Mates Array");
var names = [];
function submit() {
    var displayArray = [];
    // For Loop
    for (let i = 1; i <= 4; i++) {
        var name_of_students = document.getElementById(i + "name").value;
        console.log(name_of_students);
        names.push(name_of_students);
        console.log(names);
    }
    var length = names.length;
    // Second For Loop
    for (let j = 0; j < length; j++) {
        displayArray.push("<h4> NAME - " + names[j] + "</h4>");
        // alert(displayArray);
        // console.log(displayArray);
        document.getElementById('names_with_comma').innerHTML = displayArray;
    }
    console.log(length);
    document.getElementById('btn').style.display = "none";
    document.getElementById('btn-sort').style.display = "inline-block";
    console.log(names);
    var removeCommas = displayArray.join(" ");
    console.log(removeCommas);
    document.getElementById('names-without-comma').innerHTML = removeCommas;
}
function sorting() {
    names.sort();
    console.log(names);
    for (let k = 0; k < names.length; k++) {
        var sortedArray = [];
        sortedArray.push("<h4> NAME - " + names[k] + "</h4>");
        console.log(sortedArray);
        var removeCommas = sortedArray.join(" ");
        // document.getElementById('names-without-comma').innerHTML = removeCommas;
        document.getElementById('names_with_comma').innerHTML = sortedArray;
        document.getElementById('names-without-comma').innerHTML = removeCommas;
    } 
}