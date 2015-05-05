export default class Foo {
  constructor(){
  }

  set name( name ){
    this._name = name
  }

  get name(){
    return `My name is ${this._name}`;
  }
}
