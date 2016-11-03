it('add(a,  adds two numbers and returns the result', function() {
  function add(a, b){
  return a+b
  }


it('subtract(a,  subtracts b from a and returns the result', function() {
  function subtract(a, b){
    return a-b
  }


it('multiply(a,  multiplies two numbers and returns the result', function() {
  function multiply(a, b){
    return a*b
  }


it('divide(a,  divides a by b and returns the result', function() {
  function divide(a,b){
    return a / b
  }


it('inc(n) increments n and returns the result', function() {
  inc(a))+ 1) 


it('dec(n) decrements n and returns the result', function() {
  dec(a))- 1)


describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    makeInt(a.toString())).toEqual(a)


  it('assumes base 10', function() {
    makeInt('0x2328')).toEqual(0)


  it('returns NaN as appropriate', function() {
    isNaN(makeInt('sldkjflksjf'))).toEqual(true)



describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    preserveDecimal('2.222')).toEqual(2.222)


  it('returns NaN as appropriate', function() {
    isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
