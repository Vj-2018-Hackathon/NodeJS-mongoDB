module.exports = (l, b, callback) => {
    if (l <= 0 || b <= 0) {
        setTimeout(() => callback(new Error('err with rect values l='+ l+ 'and b='+ b+ 'and values should be greater than zero'), null),
            2000);
 
    }
    else {
        setTimeout(() => callback(null,
            {
                perimeter: (l,b) => (2 * (l+b)),
                area: (l,b) => (l*b)
            }
        ),2000);

        
    }

};