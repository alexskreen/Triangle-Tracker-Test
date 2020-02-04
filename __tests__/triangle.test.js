import { Triangle } from './../src/triangle.js';

describe ('Triangle', () => {
    test ('should correctly create a triangle object with three lengths', () => {
        var triangle = new Triangle(2,4,5);
        expect(triangle.side1).toEqual(2);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).toEqual(5);
    });
    test ('should correctly identify if 3 lengths do not make a triangle', () => {
        var notTriangle = new Triangle(3,9,22);
        expect(notTriangle.checkType()).toEqual("not a triangle");
    });
});
