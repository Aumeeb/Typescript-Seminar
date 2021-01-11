function add(a, b) {
  return a + b
}

window.addEventListener('load', function () {
  document.querySelector('button').addEventListener('click', function () {
    const inputA = document.querySelector('input')[0] // get instance of inputA
    const inputB = document.querySelector('input')[1] // get instance of inputB

    const result = document.getElementById('result') // get instance of Span

    result.innerHTML = add(+inputA.value, +inputB.value)
  })
})
