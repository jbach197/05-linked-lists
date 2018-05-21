'use strict';

let LinkedList = require('../../lib/linked_list.js');

describe('linked list', () => {

    it('constructor()', () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    });

    it('append()', () => {
        let list = new LinkedList ();
        let initialValue = 'first';
        list.append(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let newValue = 'second';
        list.append(newValue);
        expect(list.head.value).toEqual(initialValue);

        let anotherNewOne = 'third';
        list.append(anotherNewOne);
    })

})