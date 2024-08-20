// let bag = new Map();

// bag.set("color", "red");

// console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

// myCup.set("type", "mini");
// myCup.set("purpose", "daily");

myCup.set("type", "mini").set("purpose", "daily");

console.log(myCup);

// 메서드 체이닝 ! !

console.log(myCup.get("color"));
console.log(myCup.size); // 가지고 있는 개수의 값을 가져옴
console.log(myCup.has("color")); // 키값이 존재한다면 true / 없다면 false를 반환한다.
console.log(myCup.delete("type")); // 특정 키값만 삭제, 제거

// console.log(myCup.clear()); // 모든 값을 삭제, 제거 _ 전체를 지우기에 인자값이 필요하지 않다.
// console.log(myCup);

//   keys , values , entries    반복을 가능하게.

console.log(myCup.keys()); // 키값들만 가져옴. (전부)
console.log(myCup.values()); // 벨류값만 가져옴. (전부)
console.log(myCup.entries()); // 다가져옴

for (let key of myCup.keys()) {
  console.log(key);
}
for (let key of myCup.values()) {
  console.log(key);
}
for (let key of myCup.entries()) {
  console.log(key);
}

// 배열만 반복문?
