export class User{
  mail: string;
  firstname: string;
  lastname: string;
  password: string;

  constructor(mail: string, firstname: string, lastname: string, password: string){
      this.mail = mail;
      this.firstname = firstname;
      this.lastname = lastname;
      this.password = password;
  }
}
