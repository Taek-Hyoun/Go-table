var toAdd = document.createDocumentFragment();
var container = document.querySelector('.container');
var log = document.getElementById('log-box');

var c = document.querySelector('canvas');
        var ctx = c.getContext('2d');

(function () { //바둑판그리기, 바둑돌 289개 깔기.
    for (let i = 0; i < 289; i++) { // 처음 흑돌 1개는 정가운데에 깔려져있음.
        var newDiv = document.createElement('div');
        newDiv.className = 'aa ' + i;
        newDiv.setAttribute('onclick', `clicking(${i})`);
        toAdd.appendChild(newDiv);
    }
    for(let i = 0; i < 17; i++){//

        ctx.beginPath();
        if(i == 0){
            //horizon
            ctx.moveTo(0, 28.5555);
            ctx.lineTo(530, 28.5555);
            //vertical
            ctx.moveTo(28.5555, 0);
            ctx.lineTo(28.5555, 530);
        }else{      
            //horizon
            ctx.moveTo(0, i*29.4117 + 28.5555);
            ctx.lineTo(530, i*29.4117 + 28.5555);
            //vertical
            ctx.moveTo(i*29.4117 + 28.5555, 0);
            ctx.lineTo(i*29.4117 + 28.5555, 530);
        }
        ctx.stroke();
    }
    container.appendChild(toAdd);
})();

document.getElementsByClassName('aa 144')[0].style.backgroundColor = "black";

//여기까지의 코드는 289개의 스톤들을 깔고 바둑라인을 그리고 정가운데에 디폴트 블랙 스톤을 깔았다.

const stonePreviusLocation = [[144, 'black']]; //FILO

const stoneNextLocation = [];

var clicking = function (n) {
    let aa = document.getElementsByClassName('aa ' + n);
    let a = document.getElementsByClassName('aa ');
    var newDiv = document.createElement('div'); // 새로운 디브를 만든다.

    if (aa[0].style.backgroundColor !== 'black' && aa[0].style.backgroundColor !== "pink") {
        if (stonePreviusLocation[stonePreviusLocation.length - 1][1] == 'pink') {
            //마지막으로 놓인 돌이 백색돌일 때...
            stonePreviusLocation.push([n, 'black']);
            aa[0].style.backgroundColor = 'black'; //검은돌
            newDiv.className = 'log';
            newDiv.setAttribute('onclick', `makeActive(${n})`);
            newDiv.innerHTML = n + ' ' + 'black';
        } else {
            //마지막으로 놓인 돌이 깜장돌일 때...
            stonePreviusLocation.push([n, 'pink']);
            aa[0].style.backgroundColor = 'pink'; // 백색돌
            newDiv.className = 'log';
            newDiv.setAttribute('onclick', `makeActive(${n})`);
            newDiv.innerHTML = n + ' ' + 'pink';
        }

        toAdd.appendChild(newDiv);
        log.appendChild(toAdd);
    }
}
let a = document.getElementsByClassName('aa');

function prev(n) {
    let location;
    let color;

    next = stoneNextLocation.length;
    previus = stonePreviusLocation.length;

    if (n == -1) {
        if (previus !== 1 && previus < previus + 1) {
            location = stonePreviusLocation[previus - 1][0];
            color = stonePreviusLocation[previus - 1][1];
            stoneNextLocation.push([location, color]);
            stonePreviusLocation.pop();

            a[location].style.backgroundColor = "";
        }
    } else {
        if (next > 0 && next < next + 1) {
            location = stoneNextLocation[next - 1][0];
            color = stoneNextLocation[next - 1][1];
            a[location].style.backgroundColor = color;
            stoneNextLocation.pop();
        }
    }
}
function makeActive(n){
    a[n].style.backgroundColor = 'aqua';
}