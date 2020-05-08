function x() {
    return true
}

x.a = 20;
x.y = () => 2;

function foo(x) {
    if (x()) {
        return x.a / x.y();
    } else {
        return x.a() / x.y;
    }
}

console.log(foo(x));