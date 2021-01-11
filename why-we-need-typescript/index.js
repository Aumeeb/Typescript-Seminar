function add(a, b) {
  return a + b
}

window.addEventListener('load', function () {
  document.querySelector('button').addEventListener('click', function () {
    const inputA = document.getElementById('a') // get instance of inputA
    const inputB = document.getElementById('b') // get instance of inputB

    const result = document.getElementById('res') // get instance of Span

    result.innerHTML = add(inputA.value, inputB.value)
  })
})
