import { generateRandomString, generateRandomInt, generateRandomDate } from '../setup/helpers'
import authors from './authors'
import categories from './categories'

const tagList = ['image', 'vector', 'free', 'photo', 'video']

function generateTag (index) {
  let tags = []
  if (index === 9) {
    tags.push('video')
  } else {
    tags.push('image')
  }
  return tags
}

function generateImage(index) {
  if (index === 9) {
    return '/' + (index + 1) + '.gif'
  }
  return '/' + (index + 1) + '.jpg'
}

const titles = [
  'ABC Logo',
  'Lake Wallpaper',
  'Abstract Modern Icons',
  'Peanut Packaging Concept',
  'Cyberpunk Theme Images',
  'VA Logo Design',
  'Laptop Sticker Concept',
  'Green Themed Landscape',
  'Print-ready Cutting Sticker Template',
  'Octagon Shaped Tunnel'
]

const status = [
  'approved', 'published', 'draft', 'rejected', 'pending'
]

let products = []
for (let i = 0; i < titles.length; i++) {
  products.push({
  _id: generateRandomString(6),
  title: titles[i],
  image: '/img/products/templates/' + generateImage(i),
  tags: generateTag(i),
  description: 'Id est irure velit enim eu aute adipisicing reprehenderit officia cillum sint. Eiusmod ut incididunt incididunt est do aliquip occaecat ex eiusmod laboris quis. Dolor esse elit sit do enim irure officia laborum nulla sit cillum. Aute id nostrud enim fugiat ea consectetur esse tempor nisi dolor laborum. Sunt Lorem esse reprehenderit consectetur nisi non eiusmod quis est quis elit minim et ea.\r\nOfficia ea occaecat eiusmod quis ut reprehenderit do consectetur excepteur anim. Enim in Lorem aute ut proident amet culpa dolor. Voluptate dolore sit aute dolore ad reprehenderit ad exercitation velit exercitation cupidatat labore ad elit.\r\n',
  author: authors[generateRandomInt(0, authors.length - 1)],
  price: generateRandomInt(100, 1000) * 1000,
  total_views: generateRandomInt(500 - 50),
  total_likes: generateRandomInt(50 - 10),
  created_at: generateRandomDate(new Date(2017, 1, 1), new Date(2019, 9, 1)),
  status: status[generateRandomInt(0, status.length - 1)]
  })
}
export default JSON.parse(JSON.stringify(products))