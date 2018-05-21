'use-strict'

const Node = require('../../lib/node.js');

describe('Node Module', () => {

    it('constructor()', () => { 
        let value = 'something';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });
});