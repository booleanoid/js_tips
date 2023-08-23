const obj = {
    kinds: "stone",
    status: "active",
    color: ["red"],
    weight: 1500,
    owner: {
        name: 'takeshi',
        age: 46,
    },
    getStatus(){
        return this.status;
    }

}
console.log(obj.kinds);

//push で配列に要素を追加
obj.color.push("blue");
console.log(obj.color);

//length は()は不要
console.log(obj.color.length);

//getStatusメソッド追加
console.log(obj.getStatus());

//オブジェクトの入れ子の表示
console.log(obj.owner.name);
