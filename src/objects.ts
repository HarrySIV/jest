class Person {
  id: number;
  name: string;
  constructor(id = 0, name = 'Harry') {
    (this.id = id), (this.name = name);
  }
  greeting() {
    console.log(`Hello, ${this.name}. ID: ${this.id}`);
  }
}
