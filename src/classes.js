export class Consumer {
  constructor(name, email, street, postalCode, city) {
    this.name = name;
    this.email = email;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
  }
}

export class Order {
  constructor(id, items, total, date, consumer) {
    this.id = id;
    this.items = items;
    this.total = total;
    this.date = date;
    this.consumer = consumer;
  }
}
