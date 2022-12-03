import { promises as fsPromises } from 'fs'

export const readTxtFile = async (filename: string) => {
  const contents = await fsPromises.readFile(filename, 'utf-8')

  const arr = contents.split(/\r?\n/)

  return arr
}

export const logPartAnswer = (part: number, answer: string | number) =>
  console.log(`Part ${part} Answer: ${answer}`)

export const logDayBorder = (day: number) =>
  console.log(`\n¸,ø¤º°\`°º¤ø,¸¸,ø¤º° DAY ${day} °º¤ø,¸¸,ø¤º°\`°º¤ø,¸\n`)

export const logDayPerformance = (start: number, end: number): void =>
  console.log(`Execution Time: ${((end - start) / 1000).toFixed(5)} seconds`)
