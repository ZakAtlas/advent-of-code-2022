import problems from './problems'

import { logBorder, logDayPerformance } from './utils'

const dayWrapper = async (day: number, dayFunction: () => Promise<void>) => {
  logBorder(day)

  const startTime = performance.now()

  await dayFunction()

  const endTime = performance.now()

  logDayPerformance(startTime, endTime)
  logBorder(day)
}

const main = async () => {
  //await dayWrapper(1, day1);
  // await dayWrapper(2, day2)
  await dayWrapper(3, problems[2])
}

main()
