let list = []
// let id = 0
let max = 0
let button = document.querySelector("addtask")

atask.onclick = function() {
    max++
    // console.log(max)
    if (max >= 10) {
        alert('Достгнут максимум')
    }
    else{
        var val = document.getElementById('inptask').value;
        list.push({val})
        console.log(list)
    }
}
   
play.onclick = function() {
    let random = Math.round(Math.random()*10)
    let task = list[random].val
    document.getElementById('output').innerHTML = task;
};

clear.onclick = function() {
    for (let sum = 0; sum < max; sum++) {
        list.pop()
    }
    console.log(list)
    document.getElementById('output').innerHTML = "Список пуст";
};