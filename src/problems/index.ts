import { logDayBorder, logDayPerformance } from '../utils'
import day1 from './day1'
import day2 from './day2'
import day3 from './day3'

const dayWrapper = async (day: number, dayFunction: () => Promise<void>) => {
  logDayBorder(day)

  const startTime = performance.now()

  await dayFunction()

  const endTime = performance.now()

  logDayPerformance(startTime, endTime)
  logDayBorder(day)
}

const problems = [day1, day2, day3]

const wrappedProblems = problems.map(
  (problem, index) => () => dayWrapper(index + 1, problem),
)

export default wrappedProblems
