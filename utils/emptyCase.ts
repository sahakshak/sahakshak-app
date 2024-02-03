import Case from "../interface/case.interface";

const emptyCase: Case = {
  title: "",
  description: "",
  name: "",
  gender: "",
  age: 0,
  phoneNumber: "",
  email: "",
  address: "",
  pinCode: "",
  timeOfCrime: new Date(),
  suspect: "",
};

export { emptyCase };
