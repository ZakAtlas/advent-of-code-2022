import { logPartAnswer, readTxtFile } from '../../utils'

enum Shape {
  'ROCK' = 1,
  'PAPER' = 2,
  'SCISSOR' = 3,
}

enum PlaceScore {
  WIN = 6,
  TIE = 3,
  LOSE = 0,
}

const winMap = new Map([
  [Shape.ROCK, Shape.SCISSOR],
  [Shape.PAPER, Shape.ROCK],
  [Shape.SCISSOR, Shape.PAPER],
])

const loseMap = new Map([
  [Shape.ROCK, Shape.PAPER],
  [Shape.PAPER, Shape.SCISSOR],
  [Shape.SCISSOR, Shape.ROCK],
])

const part1 = (input: string[]) => {
  const decodeShape = new Map([
    ['A', Shape.ROCK],
    ['B', Shape.PAPER],
    ['C', Shape.SCISSOR],
    ['X', Shape.ROCK],
    ['Y', Shape.PAPER],
    ['Z', Shape.SCISSOR],
  ])

  const totalScore = input.reduce((totalScore, gameInput) => {
    const opponentShape = decodeShape.get(gameInput[0]) as Shape
    const myShape = decodeShape.get(gameInput[2]) as Shape

    const winningShape = loseMap.get(opponentShape)

    if (myShape === winningShape) {
      return (totalScore += myShape + PlaceScore.WIN)
    }

    if (myShape === opponentShape) {
      return (totalScore += myShape + PlaceScore.TIE)
    }

    return (totalScore += myShape + PlaceScore.LOSE)
  }, 0)

  logPartAnswer(1, totalScore)
}

const part2 = (input: string[]) => {
  const decodeShape = new Map([
    ['A', Shape.ROCK],
    ['B', Shape.PAPER],
    ['C', Shape.SCISSOR],
  ])

  const decodeScore = new Map([
    ['X', PlaceScore.LOSE],
    ['Y', PlaceScore.TIE],
    ['Z', PlaceScore.WIN],
  ])

  const totalScore = input.reduce((totalScore, gameInput) => {
    const opponentShape = decodeShape.get(gameInput[0]) as Shape
    const neededScore = decodeScore.get(gameInput[2]) as PlaceScore

    const winShape = loseMap.get(opponentShape) as Shape
    const loseShape = winMap.get(opponentShape) as Shape

    if (neededScore === PlaceScore.WIN)
      return (totalScore += PlaceScore.WIN + winShape)

    if (neededScore === PlaceScore.TIE)
      return (totalScore += PlaceScore.TIE + opponentShape)

    return (totalScore += PlaceScore.LOSE + loseShape)
  }, 0)

  logPartAnswer(2, totalScore)
}

export default async () => {
  const input = await readTxtFile(__dirname + '/input.txt')

  part1(input)
  part2(input)
}
