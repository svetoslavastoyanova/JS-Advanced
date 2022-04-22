const library = require('./ex');
const { assert } = require('chai');
const { calcPriceOfBook } = require('./ex');

describe("library", function() {
    describe("calcPriceOfBook", function() {        
        it("returns error", function() {
            assert.throw(() => library.calcPriceOfBook(1, 1980), 'Invalid input');
        });
        it("returns error", function() {
            assert.throw(() => library.calcPriceOfBook('me', 'me'), 'Invalid input');
        });
        it("returns error", function() {
            assert.throw(() => library.calcPriceOfBook(1, '1'), 'Invalid input');
        });
        
    
        it('returns correctly', function() {
            assert.equal(library.calcPriceOfBook('me', 1700), 'Price of me is 10.00');
        })
        it('returns correctly', function() {
            assert.equal(library.calcPriceOfBook('me', 2000), 'Price of me is 20.00');
        })
        it('returns correctly', function() {
            assert.equal(library.calcPriceOfBook('me', 1980), 'Price of me is 10.00');
        })
        
     });
     
     describe("findBook", function() {        
        it("returns error", function() {
            assert.throw(() => library.findBook([], 'me'), "No books currently available");
        });
        it('returns correctly', function(){
            assert.equal(library.findBook(['me', 'you'], 'me'), "We found the book you want." )
        })
        it('returns correctly', function(){
            assert.equal(library.findBook(['me', 'you'], 'I'), "The book you are looking for is not here!" )
        })
     });
     
     describe("arrangeTheBooks", function() {        
        it("returns error", function() {
            assert.throw(() => library.arrangeTheBooks('a'), "Invalid input");
        });

        it("returns error", function() {
            assert.throw(() => library.arrangeTheBooks('1'), "Invalid input");
        });

        it("returns error", function() {
            assert.throw(() => library.arrangeTheBooks(-1), "Invalid input");
        });

        it('returns correctly', function(){
            let countShelves = 5;
            let availableSpace = countShelves * 8;
            assert.equal(library.arrangeTheBooks(30), "Great job, the books are arranged.")
        })

        it('returns correctly', function(){
            let countShelves = 5;
            let availableSpace = countShelves * 8;
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.")
        })

        it('returns correctly', function(){
            let countShelves = 1;
            let availableSpace = countShelves * 8;
            assert.equal(library.arrangeTheBooks(50), "Insufficient space, more shelves need to be purchased.")
        })
        
     });     
});