// 저장공간

// setItem(key, value) key매칭 -> 밸류값 저장
// getItem(key)
// removeItem(key)
// clear() 모든 데이터 리셋

let students = ["kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students));

let localData;
if (localStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"));

localData.push("choi");

console.log(localData);
