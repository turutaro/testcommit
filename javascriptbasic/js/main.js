'use strict';
{
// //if文(真偽値)
// const signal = 'black';

// if (signal === 'red') {
//     console.log('stop!');
// } else if (signal === 'yellow') {
//     console.log('caution');
// } else if (signal === 'blue') {
//     console.log('go');
// }

// //switch文(===が続く時の書き方)
// switch (signal) {
//     case 'red' :
//       console.log('stop');
//       break;
//     case 'yellow' :
//       console.log('coution');
//       break;
//     case 'blue' :
//     case 'green' :
//       console.log('go');
//       break;
//     default : 
//       console.log('wrong signal');
//       break;
// }

// //for文(ループ処理)
// for (let i = 1; i <= 10; i++) {
//     console.log('hello world' + i);
//     console.log(`hello ${i}`);
// }

// //while文(ループ処理)
// let hp = 100;

// while (hp > 0) {
//     console.log(`${hp} HP left!`);
//     hp -= 10;
// }

// let hp = -100;

// do {
//     console.log(`${hp} HP left!`);
//     hp -= 10;
// }while (hp > 0) 

// //ループ処理中にある値を飛ばしたい時
// for (let i = 1; i <= 10; i++) {
//     if (i === 4) {
//         continue;
//     }
//     console.log(i);
// }

// //ある値のときにループ処理を止めたい時
// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//         break;
//     }
//     console.log(i);
// }

// //引数
// const showad = (message) => {
//     console.log(`${message} てびち`);
// }

// console.log('なぁな');
// console.log('は');
// showad ('めっちゃ');
// console.log('いつでも');
// showad ('バチボコ');

// //返り値
// const sum = (a,b,c) => {
//     return a + b + c;
// };

// const total = sum (2,2,2) + sum (3,3,3);
// console.log(total);
// const tebichi = a => a * 2;
// console.log(tebichi(6));


// //配列とインデックス
// const scores = [80, 90, 40];
// console.log(scores[2]);
// scores[2] = 45;
// console.log(scores[2]);
// console.log(scores.length);


// //スプレッド構文(配列を展開する・代入)、配列内の要素数を増減させる時
// const otherScores = [20, 10];
// const scores = [80, 90, 70, 40,...otherScores];
// function score(a, b) {
//     console.log(a + b);
// }
// score(...otherScores);
// scores.push (50, 30);
// scores.shift ();
// scores.splice (1, 1, 40, 50);
// for  (let i = 0; i < 4; i++) {
//     console.log(`score: ${scores[i]}`);
// }
// for (let i = 0; i < scores.length; i++) {
//     console.log(`score: ${scores[i]}`);
// }

// //分割代入
// const scores = [10, 20, 30, 40];
// const [a, b, ...others] = scores;
// console.log(a);
// console.log(b);
// console.log(...others);
// let x = 1;
// let y = 2;
// [x, y] = [y, x];
// console.log(x);

// //forEach(配列の中身を順番に呼び出す)
// const scores = [10, 20, 30, 40];
// scores.forEach ( (score, index) => {
//     console.log(`score ${index}: ${score}`);
// });

// //map(ある配列の値を変更して新たな配列を作る時)
// const prices = [80, 180, 280];
// const updatePrices = prices.map ((price) => {
//   return price + 20;
// })
// console.log(updatePrices);


// //filter(配列の中の特定の値を取り出したい時)
// const numbers = [1, 4, 6, 9, 10];
// const evenNumbers = numbers.filter( number => {
//     if (number % 2 === 0) {
//        return true;
//     } else {
//         return false;
//     }
// });
// const evenNumbers = numbers.filter( number => number % 2 === 0);
//  console.log(evenNumbers);

// //オブジェクト(キーとプロパティ)
// const point = {
//     x : 100,
//     y : 180,
// };
// console.log(point.x);
// console.log(point['y']);
// point.z = 200;
// delete point.y;
// console.log(point);

// //レスト構文(指定しない値をまとめる)
// const otherPop = {
//     r: 4,
//     color: 'red',
// };
// const point = {
//     x : 100,
//     y : 180,
//     ...otherPop,
// };
// console.log(point);
// const {x, color, ...others} = point;
// console.log(x);
// console.log(color);
// console.log(otherPop);
// console.log(others);

// //Object.keys(オブジェクトを文字配列にする)
// const point = {
//      x : 100,
//      y : 180,
// };
// const keys = Object.keys (point);
// keys.forEach(key => {
//     console.log(`Key: ${key} Value: ${point[key]}`);
// });

// //単純なデータ型と複雑なデータの処理の違い
// let x = 1;
// let y = x;
// x = 5;
// console.log(x);
// console.log(y);
// let x = [1,2];
// let y = x;  let y = [...x];
// x[0] = 5;
// console.log(x);
// console.log(y);

// //文字列の操作
// const str = 'hello';

//     console.log(str.length);

//     // str.substring(開始位置, 終了位置);
//     console.log(str.substring(2, 4));

//   console.log(str[1]);

// //数値を文字列にする
// const d = [2019, 11, 14];
// // console.log(d.join('/'));
// // console.log(d.join(''));

// //文字列を数値にする
// const t = '17:08:24';
// // console.log(t.split(':'));
// const [hour, minute, second] = t.split(':');
// console.log(hour);
// console.log(minute);
// console.log(second);

// //数値の計算
// const scores = [10, 3, 9];
// let sum = 0;
// scores.forEach (score => {
//     sum += score;
// });
// const avg = sum / scores.length;
// console.log(sum);
// console.log(avg);
// console.log(Math.floor(avg));//小数点以下切り捨て
// console.log(Math.ceil(avg));//小数点切り上げ
// console.log(Math.round(avg));//小数点以下四捨五入
// console.log(Math.random());//０〜１をランダム表示
// console.log(avg.toFixed(3));//小数点以下指定桁表示
// console.log(Math.floor(Math.random() * 6) + 1);//ランダムな整数値

// //現在日時
// const d = new Date();
// console.log(d);
// console.log(`${d.getMonth() + 1} 月 ${d.getDate ()} 日`);
// console.log(d.getTime ());

// //日時操作
// const d = new Date(2019, 1);
//     d.setHours(10, 20, 30);
//     d.setMonth(9 + 1);
//     d.setDate(31);
//     d.setDate(d.getDate() + 3);
//     console.log(d);

// //alert,confirm(ダイアログ)
// const div = document.createElement('div');
// div.classList.add('box');
// alert('てびち');
// const answer = confirm('てびちしますか？');
// if (answer) {
//     div.textContent = 'てびちー！';
//     div.classList.add('tebiti');
//     console.log('てびちしました><');
// } else {
//     div.textContent = 'てびちしてよ〜；；';
//     console.log('てびちしてよ〜；；');
// }
// document.body.appendChild(div);

// //setInterval(指定した時間ごとに繰り返し実行)(前の処理が終わっていなくても次の処理をする)
// let i = 0;
// function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//     clearInterval(intervalId);
//     }
// }
// const intervalId = setInterval(showTime, 1000,);

// //setInterval練習
// let i = 0;
// const intervalId = setInterval(() => {
//     console.log('なぁあちゅき');
//     const div = document.createElement('div');
//     div.classList.add('box');
//     i++;
//     if (i === 1) {
//         div.textContent = 'たぁたは';
//         div.classList.add('tebiti');
//     }
//     if (i === 2) {
//         div.textContent = 'なぁなのことが';
//         div.classList.add('tebiti');
//     }
//     if (i === 3) {
//         div.textContent = 'だいすき！！';
//         div.classList.add('tebiti');
//     }
//     if (i > 2) {
//         clearInterval(intervalId);
//     }
//     document.body.appendChild(div);
// }, 2000);

// //setTimeout(指定した時間後に一度だけ実行)
// function showTime () {
//     console.log(new Date());
// }
// setTimeout(showTime,1000);

// //setTimeoutで繰り返し実行(ひとつずつ順番に処理する)
// let i = 0;
// function showTime () {
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime,1000);
//     i++;
//     if (i > 2) {
//         clearTimeout(timeoutId);
//     }
// }
// showTime();

// //例外処理(try)
// const name = 5;
// try {
//     console.log(name.toUpperCase());
// } catch (e) {
//     console.log(e);
// }

// console.log("finsh!!");

// //オブジェクトが複数ある時
// const posts = [
//     {
//         text: 'Javascriptの勉強中',
//         likeContents: 0,
//     },
//     {
//         text: 'プログラミング楽しい！',
//         likeContents: 0,
//     },
// ];

// function show(post) {
//     console.log(`${post.text} - ${post.likeContents}いいね`);
// }
// show(posts);

// //関数を要素にする
// const posts = [
//     {
//         text: 'Javascriptの勉強中',
//         likeContents: 0,
//         show() {
//             console.log(`${this.text} - ${this.likeContents}いいね`);
//         },
//     },
//     {
//         text: 'プログラミング楽しい！',
//         likeContents: 0,
//         show() {
//         console.log(`${this.text} - ${this.likeContents}いいね`);
//         },
//     },
// ];
// posts[0].show(posts);
// posts[1].show(posts);

// //クラスを作る(カプセル化&拡張)
// class Post {
//     constructor(text) {
//         this.text = text;
//         this.likeCount = 0;
//     }

//     show() {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//     }

//     like() {
//         this.likeCount++;
//         this.show();
//     }
// //静的メソッド ※静的メソッドではインスタンスを作らず直接クラスから呼び出すためthisが使えない
//     static showInfo() {
//         console.log('Post class version 1.0');
//     }
// }

// // class SponsoredPost {
// //     constructor(text,sponsor) {
// //         this.text = text;
// //         this.likeCount = 0;
// //         this.sponsor = sponsor;
// //     }

// //     show() {
// //         console.log(`${this.text} - ${this.likeCount}いいね`);
// //         console.log(`... sponsored by ${this.sponsor}`);
// //     }

// //     like() {
// //         this.likeCount++;
// //         this.show();
// //     }

// // }

// const posts = [
//         new Post('Javascriptの勉強中'),
//         new Post('プログラミング楽しい！'),
// //        new SponsoredPost('3分で動画をマスター','dotinstall'),
// ];

// posts[0].show();
// posts[1].like();
// Post.showInfo();
// //posts[2].like();

// //クラスの継承
// class Post {
//         constructor(text) {
//             this.text = text;
//             this.likeCount = 0;
//         }
    
//         show() {
//             console.log(`${this.text} - ${this.likeCount}いいね`);
//         }
    
//         like() {
//             this.likeCount++;
//             this.show();
//         }
//     //静的メソッド ※静的メソッドではインスタンスを作らず直接クラスから呼び出すためthisが使えない
//         static showInfo() {
//             console.log('Post class version 1.0');
//         }
//     }
    
//     class SponsoredPost extends Post {
//         constructor(text,sponsor) {
//             super(text);
//             this.sponsor = sponsor;
//         }
    
//         show() {
//             super.show();
//             console.log(`... sponsored by ${this.sponsor}`);
//         }
    
//     }
    
//     const posts = [
//             new Post('Javascriptの勉強中'),
//             new Post('プログラミング楽しい！'),
//            new SponsoredPost('3分で動画をマスター','dotinstall'),
//     ];
    
//     posts[0].show();
//     posts[1].like();
//     Post.showInfo();
//     posts[2].like();
} 