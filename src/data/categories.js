import { generateRandomString } from '../setup/helpers'
let categories = []
const categoryNames = ['video', 'photo', 'vector']

for (let i = 0; i < categoryNames.length; i++) {
  categories.push({
    id: generateRandomString(10),
    name: categoryNames[i]
  })
}

export default categories