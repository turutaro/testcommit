'use strict';
{
    // //※section1

    // //要素の取得(複数要素)
    // function update() {
    //     // document.querySelector('h1').textContent = 'chanded!';
    //     // document.querySelector('#target').textContent = 'chanded!';
    //     document.getElementById('target').textContent = 'chanded!';
    //     // document.querySelectorAll('p')[1].textContent = 'chanded!';
    //     document.querySelectorAll('p').forEach((p, index) => {
    //         p.textContent = `${index}番目のpです！`;
    //     });
    // }  
    // setTimeout(update, 1000);

    // //階層関係からの取得
    // //親要素から子要素を呼び出す時
    // //.childNodes(子要素全て)
    // //.children(テキストnode以外の子要素全て)
    // //.firstChild(最初の子要素)
    // //.lastChild(最後の子要素)
    // //.firstElementChild(テキストnodeを除いた最初の子要素)
    // //.lastElementChild(テキストnodeを除いた最後の子要素)
    // //子要素から親(兄弟)要素を呼び出す時
    // //.parentNode(親要素)
    // //.previousSibling(ひとつ前の兄弟要素)
    // //.nextSibling(次の兄弟要素)
    // //.previous(next)ElementSibling(テキストnodeを除いた兄弟要素)

    // //EventListenerと属性操作
    // document.querySelector('button').addEventListener('click', () => {
    //     const targetNode = document.getElementById('target');
    //     targetNode.textContent = 'chanded!';
    //     targetNode.title = 'This is title!!';
    //     targetNode.style.color = 'red';
    //     targetNode.style.backgroundColor = 'skyblue';
    // });

    // //classNameの操作
        // document.querySelector('button').addEventListener('click', () => {
        //     const targetNode = document.getElementById('target');
        //     targetNode.className = 'my-color my-border';
    // });

    // //classList
    // document.querySelector('button').addEventListener('click', () => {
    //     const targetNode = document.getElementById('target');
        // targetNode.classList.add('my-color');
        // if (targetNode.classList.contains('my-color') === true) {
        //     targetNode.classList.remove('my-color');
        // } else {
        //     targetNode.classList.add('my-color');
        // }
        // targetNode.classList.toggle('my-color');
    // });

    // //カスタムデータ属性
    // document.querySelector('button').addEventListener('click', () => {
    //     const targetNode = document.getElementById('target');
    //     targetNode.textContent = targetNode.dataset.translaition;
    // });

    // //要素の追加
    // document.querySelector('button').addEventListener('click', () => {
    //     const item2 = document.createElement('li');
    //     item2.textContent = 'item 2';
    //     const ul = document.querySelector('ul');
    //     ul.appendChild(item2);
    // });

    // //要素の複製、挿入
    // document.querySelector('button').addEventListener('click', () => {
    //     const item0 = document.querySelectorAll('li')[0];
    //     const copy = item0.cloneNode(true);

    //     const ul = document.querySelector('ul');
    //     const item2 = document.querySelectorAll('li')[2];
    //     ul.insertBefore(copy, item2);
    // });

    // //要素の削除
    // document.querySelector('button').addEventListener('click', () => {
    //     const item1 = document.querySelectorAll('li')[1];

    //     item1.();
    //     // document.querySelector('ul').removeChild(item1);
    // });


    // //※section2

    // //input要素の操作
    // document.querySelector('button').addEventListener('click', () => {
    //     const li = document.createElement('li');
    //     const text = document.querySelector('input');
    //     li.textContent = text.value;
    //     document.querySelector('ul').appendChild(li);

    //     text.value = '';
    //     text.focus();
    // });

    // //セレクトボックスの操作
    // document.querySelector('button').addEventListener('click', () => {
    //     const li = document.createElement('li');
    //     const color = document.querySelector('select');
    //     li.textContent = `${color.value} - ${color.selectedIndex}`;
    //     document.querySelector('ul').appendChild(li);
    // });

    // //ラジオボタンの操作
    // document.querySelector('button').addEventListener('click', () => {
    // const colors = document.querySelectorAll('input');
    // let selectedColor;

    // colors.forEach(color => {
    //     if (color.checked === true) {
    //         selectedColor = color.value;
    //     }
    // });

    // if (typeof selectedColor === 'undefined') {
    //     alert('Not selected!');
    //     return;
    //   }
      
    // const li = document.createElement('li');
    // li.textContent = selectedColor;
    // document.querySelector('ul').appendChild(li);
    // });

    // //チェックボックスの操作
    // document.querySelector('button').addEventListener('click', () => {
    // const colors = document.querySelectorAll('input');
    // const selectedColor = [];

    // colors.forEach(color => {
    //     if (color.checked === true) {
    //         selectedColor.push(color.value);
    //     }
    // });

    // const li = document.createElement('li');
    // li.textContent = selectedColor.join(',');
    // document.querySelector('ul').appendChild(li)
    // });

    // //様々なイベント
    // document.querySelector('button').addEventListener('dblclick', () => {
    //     console.log('dobleclicked!');
    // });
    // document.addEventListener('mousemove', e => {
    //     console.log('moved');
    //     console.log(e.clientX,e.clientY);
    // });
    // document.addEventListener('keydown', e => {
    //     console.log(e.key);
    // });

    // //フォーム操作
    // const text = document.querySelector('textarea');
    // text.addEventListener('focus', () => {
    //     console.log('focus');
    // });
    // text.addEventListener('blur', () => {
    //     console.log('blur');
    // });
    // text.addEventListener('input', () => {
    //     console.log(text.value.length);
    // });
    // text.addEventListener('check', () => {
    //     console.log('checked');
    // });

    // //フォーム送信の操作
    // document.querySelector('form').addEventListener('submit', e => {
    //     e.preventDefault();
    //     console.log('submit');
    // });

    // //イベントの伝播
    // document.querySelector('ul').addEventListener('click', e => {
    //     if (e.target.nodeName === 'LI') {
    //         e.target.classList.toggle('done');
    //     }
    // });
}