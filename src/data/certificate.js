import { v4 as uuid } from "uuid";

const certificateData = [
  {
    id: uuid(),
    img: "https://media-exp1.licdn.com/dms/image/C560BAQGAaKUlU_c3Pw/company-logo_200_200/0/1607090848566?e=2147483647&v=beta&t=nBTvQczcLMi8-iJApfJ1sPVHQ3PjT10UBlIT6wROIbc",
    name: "Frontend Development Bootcamp",
    org: "NeoG BootCamp",
    learning: 'HTML, CSS, JavaScript, ReactJs, Redux'
  },
  {
    id: uuid(),
    img: "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png",
    name: "The Data Science Course 2022",
    org: "365 Careers",
    learning: 'Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning'
  },
];

export { certificateData };
