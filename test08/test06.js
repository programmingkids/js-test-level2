/*
実行結果
Hello, I am Alice
I am 18 years old
*/

// オブジェクトの定義は変更してはいけません
var person = {
    name : "Alice",
    age: 18,
    sayHello : function() {
        console.log("Hello, I am " + this.name);
    },
    sayAge : function() {
        console.log("I am " + this.age + " years old");
    },
};

// 「sayHello」メソッドと「sayAge」メソッドを呼び出す処理を作成

