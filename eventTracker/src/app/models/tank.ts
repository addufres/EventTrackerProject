export class Tank {
  id: number;
  price: number;
  gallons: number;
  distance: number;
  constructor(id?: number, price?: number, gallons?: number, distance?: number) {
    this.id = id;
    this.price = price;
    this.gallons = gallons;
    this.distance = distance;
  }
}
