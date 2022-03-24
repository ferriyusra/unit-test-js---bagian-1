function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

describe("pow", function () {

    // ...

    it("untuk n negative hasilnya NaN", function () {
        assert.isNaN(pow(2, -1));
    });

    it("untuk n non-integer hasilnya NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });

});

// describe("test", function () {

//     before(() => alert("Testing started – before all tests"));
//     after(() => alert("Testing finished – after all tests"));

//     beforeEach(() => alert("Before a test – enter a test"));
//     afterEach(() => alert("After a test – exit a test"));

//     it('test 1', () => alert(1));
//     it('test 2', () => alert(2));

// });

// describe("pow", function () {

//     function makeTest(x) {
//         let expected = x * x * x;

//         it(`${x} in the power 3 is ${expected}`, function () {
//             assert.equal(pow(x, 3), expected)
//         });

//     }

//     for (let x = 1; x <= 5; x++) {
//         makeTest(x);
//     }

// });

// describe("pow", function () {

//     it("2 raised to power 3 is 8", function () {
//         assert.equal(pow(2, 3), 8);
//     });

//     it("3 raised to power 4 is 81", function () {
//         assert.equal(pow(3, 4), 81);
//     })

// })