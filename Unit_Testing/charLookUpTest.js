const lookupChar = require('./03.charLookUp');
const { assert } = require('chai');

describe ('Testing chars', () => {
    it ('returns undefined if input is not a string', () =>{
        assert.equal(lookupChar(2, 1), undefined);
    })

    it ('returns undefined if second parameter is not a number', () =>{
        assert.equal(lookupChar('abc', 'a'), undefined);
    })

    it ('returns incorrect index if index is out of range', () =>{
        assert.equal(lookupChar('a', 1), 'Incorrect index');
    })

    it ('returns incorrect index if index is negative number', () =>{
        assert.equal(lookupChar('a', -1), 'Incorrect index');
    })

    it ('returns specified index if both parameters are correct', () =>{
        assert.equal(lookupChar('abc', 1), 'b');
    })

    it ('returns undefined if index is a float number', () =>{
        assert.equal(lookupChar('abc', 1.1), undefined);
    })

})