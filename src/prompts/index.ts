import inquirer from 'inquirer'

export const getProblemInput = async (numberOfProblems: number) => {
  const prompt = inquirer.createPromptModule()

  const questionKey = 'Question Prompt'

  const answer = await prompt([
    {
      name: questionKey,
      message: `Select a problem from 1 - ${numberOfProblems}.`,
      askAnswered: true,
      validate: (input) => {
        const parsedInput = parseInt(input) as number

        if (isNaN(parsedInput)) {
          return `Please input a number.`
        }

        if (parsedInput < 1 || parsedInput > numberOfProblems) {
          return `Number has to be from 1 - ${numberOfProblems}.`
        }

        return true
      },
    },
  ])

  return answer[questionKey] - 1
}

export const getAgainInput = async () => {
  const prompt = inquirer.createPromptModule()

  const questionKey = 'Again Prompt'

  const answer = await prompt([
    {
      name: questionKey,
      message: `Do you want to go again? Enter 'y' or 'n'.`,
      validate: (input) => {
        if (input !== 'y' && input !== 'n') {
          return `Please enter 'y' or 'n'.`
        }
        return true
      },
    },
  ])

  return answer[questionKey]
}
