const request = require('supertest')
const initApp = require('../src/app')

const app = initApp()

describe('test app', () => {
  test('it should return 200 ok', () => {
    return request(app.handler)
      .get('/')
      .expect('Content-Type', 'application/json;charset=utf-8')
      .expect(200)
  })
})
