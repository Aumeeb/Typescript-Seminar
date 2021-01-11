function add(a, b) {
    if (isNaN(a) || isNaN(b))
        return 0;
    return a + b;
    // Todo
}
window.addEventListener('load', function () {
    var _a;
    (_a = document.getElementById('addBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var inputA = document.getElementById('a'); // Get instance of inputA
        var inputB = document.getElementById('b'); // Get instance of inputB
        var result = document.getElementById('res'); // get instance of Span
        // Todo
        result.innerHTML = add(+inputA.value, +inputB.value).toString();
    });
});
