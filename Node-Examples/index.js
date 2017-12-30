var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area : (x,y) => (x*y)
}
function solveReact(l, b) {
    console.log(rect.area(l, b));
    console.log(rect.perimeter(l, b));

}

solveReact(2, 3);
solveReact(0.6);
