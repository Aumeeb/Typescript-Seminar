function add(a, b) {
  return a + b
}
window.addEventListener('load', function () {
  document.querySelector('button').addEventListener('click', function () {

    var inputA = document.getElementById('a') // get instance of inputA
    var inputB = document.getElementById('b') // get instance of inputB
    var result = document.getElementById('res') // get instance of Span
    
    result.innerHTML = add(inputA.value, inputB.value)
  })
})
