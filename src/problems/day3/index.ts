import { logPartAnswer, readTxtFile } from '../../utils'

const getPriority = (char: string) => {
  const offset = char.toUpperCase() === char ? 38 : 96

  return char.charCodeAt(0) - offset
}

const part1 = (input: string[]) => {
  const sum = input.reduce((sum, rucksack) => {
    const itemSet = new Set<string>()

    let duplicateItem = ''
    for (const item of rucksack) {
      if (itemSet.has(item)) {
        duplicateItem = item
        break
      }

      itemSet.add(item)
    }

    console.log(duplicateItem)
    return (sum += getPriority(duplicateItem))
  }, 0)

  logPartAnswer(1, sum)
}

const part2 = (input: string[]) => {
  // input.forEach((rucksack) => {
  //   console.log(rucksack[0], getPriority(rucksack[0]))
  // })
}

export default async () => {
  const input = await readTxtFile(__dirname + '/input.txt')

  part1(input)
  // part2(input)
}
