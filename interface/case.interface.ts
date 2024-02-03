export default interface Case {
  title: string;
  description: string;
  name: string;
  gender: "Male" | "Female" | string;
  age: number;
  phoneNumber: string;
  email: string;
  address: string;
  pinCode: string;
  timeOfCrime: Date;
  suspect?: string;
}
