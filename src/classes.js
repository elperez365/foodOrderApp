export class Customer {
  constructor(name, email, street, postalCode, city) {
    this.name = name;
    this.email = email;
    this.street = street;
    this["postal-code"] = postalCode;
    this.city = city;
  }
}

export class Order {
  constructor(id, items, total, date, customer) {
    this.id = id;
    this.items = items;
    this.total = total;
    this.date = date;
    this.customer = customer;
  }
}
