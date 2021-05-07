const age = 13
let guess = 0

while (guess !== age) {
  guess = prompt('What is my age?')

  guess = parseInt(guess)

  if (guess === age) {
    alert('You got it right! Do you want to play again (y/n)')
  } else if (guess < age) {
    alert('You guessed too small. Please try again.')
  } else if (guess > age) {
    alert('You guessed too big. Try again.')
  }
}
