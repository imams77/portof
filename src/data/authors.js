import { generateRandomString } from '../setup/helpers';

const names = ['John Doe', 'Jane Doe', 'Sue Davies', 'Peter Parker'];
let authors = []
for (let i = 0; i < names.length; i++) {
  authors.push({
    id: generateRandomString(8),
    name: names[i]
  })
}

export default authors