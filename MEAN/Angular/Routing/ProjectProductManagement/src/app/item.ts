export class Item {
  id: number;
  name: string;
  price: string;
  image: string;

  constructor() {
  }

  SetInfo(_id: number, _name: string, _price: string, _image: string){
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.image = _image;
  }
}
