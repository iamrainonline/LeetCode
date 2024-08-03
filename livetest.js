class Nodex {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    this.head = new Nodex(data, this.head);
  }
}

const ll = new LinkedList();

ll.insertFirst("babic");
ll.insertFirst("cristi");
ll.insertFirst("george");
// console.log(ll);
