interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  position: string;
}

// 서로소 유니온 타입
interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "chovy",
  profile: {
    type: "gammer",
    skill: "leagueOfLegend",
  },
};

const studentUser: User<Student> = {
  name: "canyon",
  profile: {
    type: "atk",
    position: "jungle",
  },
};

const gotoSchool = (user: User<Student>) => {
  const position = user.profile.position;
  console.log(`${position}`);
};

console.log(gotoSchool(studentUser));
