'use strict';


class Node {
  constructor (data) {
    this.data=data;
    this.next=null;
  }



prepend(element) { // okay, works
   let newn = new Node(this.data);
   newn.next = this.next;
   this.next = newn;
   this.data = element;

}

  append(element) { //okay, works
    let pointer = this;
    while(pointer.next !== null) {
      pointer = pointer.next;
    }
    let nn = new Node(element);
    pointer.next = nn;
  }

  length () {//okay, works
    let p= this.next
    let counter = 1
    while (p !== null) {
      counter++;
      p = p.next
    }
    return counter
  }

  reverse() { //okay, works
  let newnode = new Node (this.data)
  let el = this
  while (el.next !== null) {
    newnode.prepend(el.next.data)
    el = el.next
  }
    return newnode;
  }

  get(index) {//ok
    let pointer = this;
    let currentIndex = 0;
    while(pointer.next !== null) {
      if(currentIndex === index) {
        return pointer.data
      }
      pointer = pointer.next;
      currentIndex++;
    }
  }
};



const list = new Node('A');
list.append ("B");
list.append ("C");
list.append ("D");
list.prepend ('0')
list.prepend ('2')


console.log(list.reverse())
