import { logPartAnswer, readTxtFile } from '../../utils'

const getPriority = (char: string) => {
  const offset = char.toUpperCase() === char ? 38 : 96

  return char.charCodeAt(0) - offset
}

const part1 = (input: string[]) => {
  const sum = input.reduce((sum, rucksack) => {
    const itemSet = new Set<string>()

    let duplicateItem = ''
    let i = 0

    for (; i < rucksack.length / 2; i++) {
      itemSet.add(rucksack[i])
    }

    for (; i < rucksack.length; i++) {
      if (itemSet.has(rucksack[i])) {
        duplicateItem = rucksack[i]
        break
      }
    }

    return (sum += getPriority(duplicateItem))
  }, 0)

  logPartAnswer(1, sum)
}

const part2 = (input: string[]) => {
  const groupArrayByThree = (input: string[]): string[][] => {
    const arrays = []

    for (let i = input.length - 1; i >= 0; i -= 3) {
      arrays.push([input.pop(), input.pop(), input.pop()])
    }

    return arrays
  }

  const groupedElves = groupArrayByThree(input)

  let totalSum = 0

  for (const elves of groupedElves) {
    const itemMap = new Map<string, { count: number; currentElf: string }>()
    let badgeItem = '-100'

    for (const elf of elves) {
      for (const item of elf) {
        const itemInMap = itemMap.get(item)

        if (itemInMap && itemInMap.count + 1 >= 3) {
          badgeItem = item
          break
        } else if (itemInMap && itemInMap.currentElf === elf) {
          console.log(item, itemInMap.currentElf, elf)
          continue
        } else if (itemInMap) {
          itemInMap.count++
        } else {
          itemMap.set(item, { count: 1, currentElf: elf })
        }
      }
    }

    console.log(badgeItem)
    totalSum += getPriority(badgeItem)
  }

  logPartAnswer(2, totalSum)
}

export default async () => {
  const input = await readTxtFile(__dirname + '/input.txt')

  part1(input)
  part2(input)
}
