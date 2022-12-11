import { logPartAnswer, readTxtFile } from '../../utils'

const part1 = (input: string[]) => {
  let highestTotalCal = 0
  let currentTotalCal = 0

  for (const foodItem of input) {
    if (foodItem === '') {
      if (currentTotalCal > highestTotalCal) {
        highestTotalCal = currentTotalCal
      }

      currentTotalCal = 0
      continue
    }

    currentTotalCal += +foodItem
  }

  logPartAnswer(1, highestTotalCal)
}

const part2 = (input: string[]) => {
  const highestTotals = [0, 0, 0]

  let currentTotal = 0

  for (const foodItem of input) {
    if (foodItem !== '') {
      currentTotal += +foodItem
      continue
    }

    highestTotals.every((hightestTotal, index) => {
      if (+currentTotal > hightestTotal) {
        if (index !== highestTotals.length - 1) {
          highestTotals[index + 1] = highestTotals[index]
        }

        highestTotals[index] = +currentTotal

        return false
      }

      return true
    })

    currentTotal = 0
  }

  const highestTotal = highestTotals.reduce((prev, curr) => (prev += curr))

  logPartAnswer(2, highestTotal)
}

export default async () => {
  const input = await readTxtFile(__dirname + '/input.txt')

  part1(input)
  part2(input)
}
