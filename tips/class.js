const obj = {
    kinds: "stone",
    status: "active",
    color: ["red"],
    weight: 1500,
}
console.log(obj.kinds);

//push で配列に要素を追加
obj.color.push("blue");
console.log(obj.color);

//length は()は不要
console.log(obj.color.length);
