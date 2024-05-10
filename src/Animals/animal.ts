class Animal {
  constructor(name: string, sort: string) {
    this.name = name;
    this.sort = sort;
  }
  name: string;
  sort: string;
}

class Tiger extends Animal {}

export default { Animal, Tiger };
