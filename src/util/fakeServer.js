const itemStore = {
  0: {
    name: "Pencil",
    status: "lost",
    comment: "Found under table",
    imageURL: "http://placekitten.com/200/200?image=1",
    dateAdded: new Date(),
    _id: "e73ffd87-fb27-45a0-800c-65a23833e3dd"
  },
  1: {
    name: "Eraser",
    status: "found",
    comment: "Found on the ground, surrounded by eraser shavings :(",
    imageURL: "http://placekitten.com/200/200?image=2",
    dateAdded: new Date(),
    _id: "e73ffd87-fb27-45a0-800c-65a23833e3dd"
  },
  2: {
    name: "Good Phone",
    status: "aunctioned",
    comment: "Found on the bus. No claim in four months.",
    imageURL: "http://placekitten.com/200/200?image=3",
    dateAdded: new Date(),
    _id: "e73ffd87-fb27-45a0-800c-65a23833e3dd"
  },
  3: {
    name: "Bio exam notes",
    status: "lost",
    comment: "Found near the library entrance two days before biology exam",
    imageURL: "http://placekitten.com/200/200?image=4",
    dateAdded: new Date(),
    _id: "e73ffd87-fb27-45a0-800c-65a23833e3dd"
  },
  4: {
    name: "Physics exam notes",
    status: "lost",
    comment: "Found near the library entrance two days before physics exam",
    imageURL: "http://placekitten.com/200/200?image=5",
    dateAdded: new Date(),
    _id: "ce07b173-5097-4dd9-a175-34c6bbe839d1"
  }
}

export default class FakeServer {
  constructor() {
    this.itemStore = itemStore;
  }

  fetchAllItems() {
    return this.itemStore;
  }

  addItem(data) {
    this.itemStore = {
      ...this.itemStore,
      data
    };

    return data;
  }

  updateItem(data) {

  }
}
