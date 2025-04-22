export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const randomNumbers = [...Array(10)].map(() => Math.floor(Math.random() * 10));

export const colors = [
  { id: 1, name: "red" },
  { id: 2, name: "green" },
  { id: 3, name: "blue" },
  { id: 4, name: "yellow" },
  { id: 5, name: "orange" },
  { id: 6, name: "purple" },
  { id: 7, name: "black" },
  { id: 8, name: "white" },
  { id: 9, name: "brown" },
  { id: 10, name: "gray" }
];

export const students = [
  {
    id: 1,
    first_name: "Leah",
    last_name: "Rowntree",
    age: 18,
    username: "LeahRowntree",
    password: "Password1",
    email: "lrowntree0@washingtonpost.com",
    gender: "Genderqueer"
  },
  {
    id: 2,
    first_name: "Dotti",
    last_name: "McClaren",
    age: 19,
    username: "DottiMcClaren",
    password: "Passwor",
    email: "dmcclaren1@wired.com",
    gender: "Female"
  },
  {
    id: 3,
    first_name: "Opaline",
    last_name: "Heald",
    age: 16,
    username: "OpalineHeald",
    password: "Password3",
    email: "oheald2@dagondesign.com",
    gender: "Female"
  },
  {
    id: 4,
    first_name: "Ondrea",
    last_name: "Bony",
    age: 17,
    username: "OndreaBony",
    password: "OndreaBony12345",
    email: "obony3@scribd.com",
    gender: "Female"
  },
  {
    id: 5,
    first_name: "Heath",
    last_name: "Zorzin",
    age: 65,
    username: "HeathZorzin",
    password: "Password5",
    email: "hzorzin4@ed.gov",
    gender: "Male"
  }
];
