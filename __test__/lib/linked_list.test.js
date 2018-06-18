'use strict';

let LinkedList = require('../../lib/linked_list.js');

describe('linked list methods', () => {

  it('constructor() creates a null list', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('append() adds value to end of list', () => {
    let list = new LinkedList ();
    let initialValue = 'first';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'second';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherNewOne = 'third';
    list.append(anotherNewOne);
  });

  it('prepend() adds value to begining of list and resets head', () => {
    let list = new LinkedList ();
    let initialValue = 'first';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'second';
    list.prepend(newValue);
    expect(list.head.value).toEqual(newValue);
  });

  it('prepend() adds value to begining of list and resets head', () => {
    let list = new LinkedList ();
    let initialValue = 'first';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'second';
    list.prepend(newValue);
    expect(list.head.value).toEqual(newValue);
  });

  it('remove() removes head', () => {
    let list = new LinkedList ();
    let initialValue = 'first';
    let newValue = 'second';

    list.append(initialValue);
    list.append(newValue);

    list.remove(initialValue);
    expect(list.head.value).toEqual(newValue);
  });

  it('remove() removes item in list', () => {
    let list = new LinkedList ();
    let initialValue = 'first';
    let newValue = 'second';
    let otherValue = 'third';

    list.append(initialValue);
    list.append(newValue);
    list.append(otherValue);

    list.remove(newValue);
    expect(list.head.value).toEqual(initialValue);
  });

  it('reverse() reverses the linked list', () => {
    let list = new LinkedList ();
    let initialValue = 'first';
    let newValue = 'second';
    let anotherOne = 'third';
    list.append(initialValue);
    list.append(newValue);
    list.append(anotherOne);

    list.reverse();
    expect(list.head.value).toEqual(anotherOne);
    console.log(list.head.value);
  });

});