function add (a: number, b: number): number {
  const result = a + b
  return result
}

function sub (value1: number, value2: number): number {
  const result = value1 - value2
  return result
}

function mult (value1: number, value2: number): number {
  const result = value1 * value2
  return result
}

function div (value1: number, value2: number): number {
  const result = value1 / value2
  return result
}

module.exports = {
  add,
  sub,
  mult,
  div
}
