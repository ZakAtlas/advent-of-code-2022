import { promises as fsPromises } from 'fs'
import chalk from 'chalk'

export const readTxtFile = async (filename: string) => {
  const contents = await fsPromises.readFile(filename, 'utf-8')

  const arr = contents.split(/\r?\n/)

  return arr
}

export const logDayBorder = (day: number) =>
  console.log(
    `\n¸,ø¤º°\`°º¤ø,¸¸,ø¤º° ${chalk.bold.underline.redBright(
      `DAY ${day}`,
    )} °º¤ø,¸¸,ø¤º°\`°º¤ø,¸\n`,
  )

const INSIDE_PADDING = '        '

export const logPartAnswer = (part: number, answer: string | number) =>
  console.log(
    INSIDE_PADDING,
    chalk.underline.bold(`Part ${part} Answer`) + ':',
    answer,
  )

export const logDayPerformance = (start: number, end: number): void =>
  console.log(
    INSIDE_PADDING,
    chalk.bold.underline(`Execution Time`) + ':',
    `${((end - start) / 1000).toFixed(5)}`,
    chalk.greenBright(`seconds`),
  )
