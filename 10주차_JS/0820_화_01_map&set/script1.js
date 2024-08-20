// let numSet1 = new Set();

// console.log(numSet1);

// numSet1.add("one").add("two");

// console.log(numSet1);

// let numSet2 = new Set([1, 2, 3]);

// console.log(numSet2);

// let numSet3 = new Set([1, 2, 1, 3, 1, 5]);

// console.log(numSet3); // 배열은 중복된 값을 필터링 하지 못하지만, set 의 경우는 중복된 값을 필터링하여 보내준다.

const languages = new Set(["JS", "HTML", "CSS"]);

for (let languages of languages.keys()) {
  console.log(languages);
}
