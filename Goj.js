var toAdd = document.createDocumentFragment();
var container = document.querySelector('.container');

for (let i = 0; i < 289; i++) { // div를 324개 만듦 class는 324
    var newDiv = document.createElement('div');
    newDiv.className = 'aa ' + i;
    newDiv.setAttribute('onclick', `clicking(${i}, ${1})`);
    toAdd.appendChild(newDiv);
}
container.appendChild(toAdd);

const stonePreviusLocation = []; //FILO
const stoneNextLocation = [];

var clicking = function (n, k) {
    let aa = document.getElementsByClassName('aa ' + n);
    let a = document.getElementsByClassName('aa');

    if (k % 2 == 1) {
        stonePreviusLocation.push([n, 'black']);
        aa[0].style.backgroundColor = 'black'; //검은돌
    } else if (k % 2 == 0) {
        stonePreviusLocation.push([n, 'pink']);
        aa[0].style.backgroundColor = 'pink'; // 백색돌
    }

    if (k == 1) {
        for (let i = 0; i < a.length; i++) {
            a[i].setAttribute('onclick', `clicking(${i}, ${2})`);
        }
    } else if (k == 2) {
        for (let i = 0; i < a.length; i++) {
            a[i].setAttribute('onclick', `clicking(${i}, ${1})`);
        }
    }
}
function prev(n){
    let location;
    let color;
    let a = document.getElementsByClassName('aa');

    if(n == -1){
        location = stonePreviusLocation[stonePreviusLocation.length - 1][0];
        color = stonePreviusLocation[stonePreviusLocation.length - 1][1];
        stoneNextLocation.push([location, color]);
        stonePreviusLocation.pop();

        a[location].style.backgroundColor = "";
    }else{
        location = stoneNextLocation[stoneNextLocation.length - 1][0];
        color = stoneNextLocation[stoneNextLocation.length - 1][1];
        a[location].style.backgroundColor = color;
        stoneNextLocation.pop();
    }
}
