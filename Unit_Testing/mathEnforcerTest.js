const mathEnforcer = require('./04.mathEnforcer');
const { assert, expect } = require('chai');

describe ('Math Enforcer', () => {
    describe ('Add Five', () => {
        it('returns undefined if parameter is not a number', () => {
            assert.equal(mathEnforcer.addFive('a'), undefined);
        })

        it('adds 5 and return a result if the parameter is a number', () => {
            assert.equal(mathEnforcer.addFive(1), 6);
        })

        it('adss five with a flloating point number', () => {
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.01);
        })

        it('adss five with a negative number', () => {
            assert.equal(mathEnforcer.addFive(-1), 4);
        })
    })

    describe ('Subtract ten', () => {
        it('returns undefined if parameter is not a number', () => {
            assert.equal(mathEnforcer.subtractTen('a'), undefined);
        })

        it('subtract 10 and return a result if the parameter is a number', () => {
            assert.equal(mathEnforcer.subtractTen(11), 1);
        })

        it('subtract 10 for floating point numbers', () => {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
        })

        it('subtract 10 for negative numbers', () => {
            assert.equal(mathEnforcer.subtractTen(-1), -11);
        })
    })

    describe ('Sum two numbers', () => {
        it('returns undefined if parameter one is not a number', () => {
            assert.equal(mathEnforcer.sum('a', 2), undefined);
        })

        it('returns undefined if parameter two is not a number', () => {
            assert.equal(mathEnforcer.sum(1, 'a'), undefined);
        })

        it('sum the numbers if both are positive', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
        })

        it('sum the numbers if one is negative', () => {
            assert.equal(mathEnforcer.sum(1, -1), 0);
        })

        it('sum the numbers if one is floating', () => {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
        })
    })
})