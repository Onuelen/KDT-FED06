class Student {
  // Field => 인스턴스 객체의 킬 역할
  // private name;
  // protected age;
  // public grade;

  // 생성자 함수 => field에 매칭될 값을 찾아오는 역할
  constructor(private name: string, protected age: number, public grade: number) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

// 메서드
study() {
  console.log("공부열심히");
  
}

introduce() {
  console.log(`안녕하세요! ${this.name} 입니다.`);
  
}

const studentB = new Student("David", 20, 2);

console.log(studentB);
console.log(studentB.introduce());

class StudentDeveloper extends Student {
  favoritSkill;

  constructor(name: string, age, number, grade, number, favoritSkill: string) {
    super(name, age, grade);
    this.favoritSkill = favoritSkill,
  }

  func() {
    // this.name
    this.age;
  }

  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 합니다!`);
    
  }
}

const studentC = new StudentDeveloper("Ronaldo", 40,2,"TS")
console.log(`hi ${this.name} 입니다`);

