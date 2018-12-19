import {findKeyByProp1D, filterObjectByProp1D} from './tool';
let today = new Date();
const itemStore = {
  0: {
    name: "Pencil",
    status: "lost",
    comment: "0",
    imageURL: "http://placekitten.com/200/200?image=1",
    dateAdded: today,
    _id: "A73ffd87-fb27-45a0-800c-65a23833e3dd"
  },
  1: {
    name: "Eraser",
    status: "found",
    comment: "1",
    imageURL: "http://placekitten.com/200/200?image=1",
    dateAdded: today,
    _id: "B73ffd87-fb27-45a0-800c-65a23833e3dd"
  },
  2: {
    name: "Good Phone",
    status: "aunctioned",
    comment: "2",
    imageURL: "http://placekitten.com/200/200?image=1",
    dateAdded: today,
    _id: "C73ffd87-fb27-45a0-800c-65a23833e3dd"
  },
  3: {
    name: "Bio exam notes",
    status: "lost",
    comment: "3",
    imageURL: "http://placekitten.com/200/200?image=1",
    dateAdded: today,
    _id: "D73ffd87-fb27-45a0-800c-65a23833e3dd"
  },
  4: {
    name: "Physics exam notes",
    status: "lost",
    comment: "4",
    imageURL: "http://placekitten.com/200/200?image=1",
    dateAdded: today,
    _id: "Ee07b173-5097-4dd9-a175-34c6bbe839d1"
  }
}

export default class FakeServer {
  constructor() {
    this.itemStore = itemStore;
  }

  fetchAllItems() {
    return filterObjectByProp1D("status", "deleted", this.itemStore)
  }

  addItem(data) {
    this.itemStore = {
      ...this.itemStore,
      data
    };

    return data;
  }

  updateItem(data, id) {
    let key = findKeyByProp1D("_id", id, this.itemStore);

    this.itemStore = {
      ...this.itemStore,
      [key[0]]: {
        name: data.name || this.itemStore[key].name,
        status: data.status || this.itemStore[key].status,
        comment: data.comment || this.itemStore[key].comment,
        imageURL: data.imageURL || this.itemStore[key].imageURL,
        dateAdded: this.itemStore[key].dateAdded,
        _id: this.itemStore[key]._id
      }
    }

    return this.itemStore[key[0]];
  }

  deleteItem(id) {
    let key = findKeyByProp1D("_id", id, this.itemStore)[0];
    this.itemStore[key].status = "deleted";

    return this.itemStore[key];
  }
}
