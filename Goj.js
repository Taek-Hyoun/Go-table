var toAdd = document.createDocumentFragment();
        var container = document.querySelector('.container');
        for (let i = 0; i < 289; i++) { // div를 324개 만듦 class는 324
            var newDiv = document.createElement('div');
            newDiv.className = 'aa ' + i;
            newDiv.setAttribute('onclick', `clicking(${i}, ${1})`);
            toAdd.appendChild(newDiv);
        }
        container.appendChild(toAdd);

        var clicking = function (n, k) {
            let aa = document.getElementsByClassName('aa ' + n);
            let a = document.getElementsByClassName('aa');
            if (k % 2 == 1) {
                aa[0].style.backgroundColor = 'black';
            } else {
                aa[0].style.backgroundColor = 'pink';
            }
            if(k == 1){
                for(let i = 0; i < a.length; i++){
                    a[i].setAttribute('onclick', `clicking(${i}, ${2})`);
                }
            }else if(k == 2){
                for(let i = 0; i < a.length; i++){
                    a[i].setAttribute('onclick', `clicking(${i}, ${1})`);
                }
            }
        }