'use strict'
{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const result = ['大吉', '中吉', '凶', '末吉'];
        const n = Math.floor(Math.random() * result.length);
        btn.textContent = result[n];
        // btn.textContent = [Math.floor(Math.random() * result.length)];

        //確率操作
        // const result = ['大吉', '大吉', '凶', '大吉'];
        // const n = Math.floor(Math.random() * result.length);
        // btn.textContent = result[n];
        
        // const n = Math.random();
        // if (n < 0.05) { //5%
        //     btn.textContent = '大吉';
        // } else if (n < 0.2) { //15%
        //     btn.textContent = '中吉';
        // } else { //80%
        //     btn.textContent = '凶';
        // }

        // switch (n) {
        //     case 0:
        //         btn.textContent = '大吉'
        //         break;
        //     case 1:
        //         btn.textContent = '中吉'
        //         break;
        //     case 2:
        //         btn.textContent = '凶'
        //         break;
        // }
    });
}