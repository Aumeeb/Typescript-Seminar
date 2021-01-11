function add(a, b) {
  // Todo
}
window.addEventListener('load', function () {
  document.getElementById('addBtn').addEventListener('click', function () {
    var inputA = document.getElementById('a') // Get instance of inputA
    var inputB = document.getElementById('b') // Get instance of inputB

    var result = document.getElementById('res') // get instance of Span

    // Todo
    result.innerHTML = add(inputA.value, inputB.value)
  })
})
