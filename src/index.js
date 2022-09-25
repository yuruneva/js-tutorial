/**
 * const,letの変数宣言
 * 中身を変えられないconstを使うことが一般的
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // varは再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// // leｔ val2 = "letを再宣言”;

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "test",
//   age: 20
// };
// val4.name = "test2";
// val4.address = "Kyoto";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "name1";
// const age = "22";
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// // 従来の関数
// function func1(str) {
//   return str;
// }
// // 変数に関数を代入する方法
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // 引数が1つの場合()を省略できる。
// // {}内が単一式で終わる場合、{}とreturnを省略できる。
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func２です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "name2",
//   age: 22
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile2 = ["name3", 22];
// const message3 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile2;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello();
// sayHello("ユーザ");

/**
 * スプレッド構文 ... （順番に処理をする）
 */
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; //この書き方をすると参照が引き継がれてしまう

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "山本"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// // 新しい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// // 二つ目の引数には順番が0から入る
// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${nameArr[index]}です。`)
// );

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 参考演算子
 */

// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です。";
// };
// console.log(checkSum(50, 40));

/**
 * ||, &&
 */
// // || は左側がfalseなら右側を返す
// const num = false;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
