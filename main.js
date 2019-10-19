let traffic_light1 = document.querySelector('#light1');
let traffic_light2 = document.querySelector('#light2');
let interval = 35;
let waitingInterval = 1;

let states = {
    'traffic_light1_go': () => {
        function timer(start) {
            return function() {
                if (start < 1) {
                    traffic_light1.children[3].children[1].innerHTML = '';
                    traffic_light2.children[3].children[1].innerHTML = '';
                    clearInterval(timerGo);
                    states['waiting']('traffic_light1_go');
                    return;
                }
                traffic_light1.children[3].children[1].innerHTML = start;
                traffic_light2.children[3].children[1].innerHTML = start;
                start -= 1;
            }
        }
        for (let i = 0; i < traffic_light1.children.length-1; i++) {
            traffic_light1.children[i].style.backgroundColor = '#bbb';
            traffic_light2.children[i].style.backgroundColor = '#bbb';
        }
        traffic_light1.children[3].children[0].style.backgroundImage = "url('./img/go1.png')";
        traffic_light2.children[3].children[0].style.backgroundImage = "url('./img/stop.png')";
        traffic_light1.children[3].classList.remove('waiting');
        traffic_light2.children[3].classList.remove('waiting');
        traffic_light1.children[3].classList.add('go');
        traffic_light2.children[3].classList.add('stop');
        traffic_light1.children[2].style.backgroundColor = 'green';
        traffic_light2.children[0].style.backgroundColor = 'red';
        let counter = timer(interval);
        let timerGo = setInterval(counter, 1000);
    },
    'waiting': (state) => {
        function timer(start) {
            return function() {
                if (start < 1) {
                    traffic_light1.children[3].children[1].innerHTML = '';
                    traffic_light2.children[3].children[1].innerHTML = '';
                    clearInterval(timerGo);
                    state === 'traffic_light1_go'
                        ? states['traffic_light2_go']()
                        : states['traffic_light1_go']();
                    return;
                }
                start -= 1;
            }
        }
        for (let i = 0; i < traffic_light1.children.length-1; i++) {
            traffic_light1.children[i].style.backgroundColor = '#bbb';
            traffic_light2.children[i].style.backgroundColor = '#bbb';
        }
        traffic_light1.children[3].children[0].style.backgroundImage = "url('./img/stop.png')";
        traffic_light2.children[3].children[0].style.backgroundImage = "url('./img/stop.png')";
        traffic_light1.children[3].classList.remove('go');
        traffic_light1.children[3].classList.remove('stop');
        traffic_light2.children[3].classList.remove('stop');
        traffic_light2.children[3].classList.remove('go');
        traffic_light1.children[3].classList.add('waiting');
        traffic_light2.children[3].classList.add('waiting');
        traffic_light1.children[1].style.backgroundColor = 'yellow';
        traffic_light2.children[1].style.backgroundColor = 'yellow';
        let counter = timer(waitingInterval);
        let timerGo = setInterval(counter, 1000);
    },
    'traffic_light2_go': () => {
        function timer(start) {
            return function() {
                if (start < 1) {
                    traffic_light1.children[3].children[1].innerHTML = '';
                    traffic_light2.children[3].children[1].innerHTML = '';
                    clearInterval(timerGo);
                    states['waiting']('traffic_light2_go');
                    return;
                }
                traffic_light1.children[3].children[1].innerHTML = start;
                traffic_light2.children[3].children[1].innerHTML = start;
                start -= 1;
            }
        }
        for (let i = 0; i < traffic_light1.children.length-1; i++) {
            traffic_light1.children[i].style.backgroundColor = '#bbb';
            traffic_light2.children[i].style.backgroundColor = '#bbb';
        }
        traffic_light1.children[3].children[0].style.backgroundImage = "url('./img/stop.png')";
        traffic_light2.children[3].children[0].style.backgroundImage = "url('./img/go1.png')";
        traffic_light1.children[3].classList.remove('waiting');
        traffic_light2.children[3].classList.remove('waiting');
        traffic_light1.children[0].style.backgroundColor = 'red';
        traffic_light2.children[2].style.backgroundColor = 'green';
        traffic_light1.children[3].classList.add('stop');
        traffic_light2.children[3].classList.add('go');
        let counter = timer(interval);
        let timerGo = setInterval(counter, 1000);
    }
};

states['traffic_light1_go']();


