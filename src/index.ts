import problems from './problems'
import * as Prompt from './prompts'

const runProgram = async () => {
  const numberOfProblems = problems.length

  let again = 'y'

  while (again === 'y') {
    console.clear()

    const problemIndex = await Prompt.getProblemInput(numberOfProblems)

    await problems[problemIndex]()

    again = await Prompt.getAgainInput()
  }
}

const main = async () => {
  if (process.argv[2] !== 'debug') {
    runProgram()
  } else {
    const debugArgProblem = process.argv[3]

    if (!debugArgProblem) {
      throw new Error('Please enter a problem number argument.')
    }

    await problems[debugArgProblem]()
  }
}

main()
