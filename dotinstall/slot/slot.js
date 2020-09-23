'use strict' 
{
    class Panel {
        constructor() {
            const section = document.createElement('section');
            section.classList.add('panel');

            this.img = document.createElement('img');
            this.img.src = this.getRandomImage();

            this.timeoutId = undefined;

            this.stop = document.createElement('div');
            this.stop.textContent = 'STOP';
            this.stop.classList.add('stop', 'inactive');
            this.stop.addEventListener('click', () =>{
                if (this.stop.classList.contains('inactive')) {
                    return;
                }
                this.stop.classList.add('inactive');

                clearTimeout(this.timeoutId);

                panelsLeft--;

                if (panelsLeft === 0) {
                    spin.classList.remove('inactive');
                    panelsLeft = 3;
                    checkResult();
                }
            });

            section.appendChild(this.img);
            section.appendChild(this.stop);

            const main = document.querySelector('main');
            main.appendChild(section);
        }

        getStop() {
            return this.stop.click();
        }

        getRandomImage() {
            const images = [
                'img/seven.png',
                'img/bell.png',
                'img/cherry.png',
            ];
            return images[Math.floor(Math.random() * images.length)];
        }

        spin() {
            this.img.src = this.getRandomImage();
            this.timeoutId = setTimeout(() => {
                this.spin();
            },50);
        }

        isUnmatched(p1, p2) {
            return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
        }

        unmatch() {
            this.img.classList.add('unmatched');
        }

        matched(p1, p2) {
            return this.img.src === p1.img.src && this.img.src === p2.img.src;
        }

        activate() {
            this.img.classList.remove('unmatched');
            this.stop.classList.remove('inactive');
        }
    }

    function checkSrc(panel) {
        const getCoins = document.getElementById('get-coins');
        if (panel.img.src === 'file:///Users/tsuruokatakayoshi/Documents/dotinstall/slot/img/seven.png') {
            coins.textContent = nowCoins += 10;
            getCoins.textContent = 10;
        }
        if (panel.img.src === 'file:///Users/tsuruokatakayoshi/Documents/dotinstall/slot/img/bell.png') {
            coins.textContent = nowCoins += 5;
            getCoins.textContent = 5;
        }
        if (panel.img.src === 'file:///Users/tsuruokatakayoshi/Documents/dotinstall/slot/img/cherry.png') {
            coins.textContent = nowCoins += 3;
            getCoins.textContent = 3;
        }      
    }

    function checkResult() {
        if (panels[0].isUnmatched(panels[1], panels[2])) {
            panels[0].unmatch();
        }
        if (panels[1].isUnmatched(panels[0], panels[2])) {
            panels[1].unmatch();
        }
        if (panels[2].isUnmatched(panels[0], panels[1])) {
            panels[2].unmatch();
        } 
        if (panels[0].matched(panels[1], panels[2])) {
            clear.classList.remove('hidden');
            checkSrc(panels[0]);
        }
    }

    function charge() {
        const charge = confirm('コインをチャージしますか？');
        if (charge) {
            nowCoins = 30;
            coins.textContent = nowCoins;
            spin.classList.remove('inactive');
        } else {
            const div = document.createElement('div');
            div.textContent = 'GAME OVER';
            div.classList.add('gameover');
            const body = document.querySelector('body');
            body.appendChild(div);
        }
    }

    function useCoin() {
        coins.textContent = --nowCoins;
        i++;
        let timeoutId = setTimeout(() => {
            useCoin();
        },80);
        if (i === 3) {
            clearTimeout(timeoutId);
        }
        }

    const panels = [
        new Panel(),
        new Panel(),
        new Panel(),
    ];

    let panelsLeft = 3;
    
    const clear = document.getElementById('clear');

    let i = 0;
    let nowCoins = 30;
    const coins = document.getElementById('now-coins');
    coins.textContent = nowCoins;
    

    const spin = document.getElementById('spin');
    spin.addEventListener('click', () => {
        if (spin.classList.contains('inactive')) {
            return;
        }
        clear.classList.add('hidden');
        spin.classList.add('inactive');

        if (nowCoins < 3) {
            charge();
            return;
        }

        i = 0;
        useCoin();

        panels.forEach(panel => {
            panel.activate();
            panel.spin();
        });

        num = 0;
    });

    window.addEventListener('keydown', e => {
        if (e.keyCode == 13) {
            spin.click();
            num = 0;
        }
    });

    let num = 0;
    window.addEventListener('keydown', e => {
        if(num === 3) {
            return;
        }
        if(e.keyCode == 32) {
            panels[num].getStop();
            num++;
        }
    });
}