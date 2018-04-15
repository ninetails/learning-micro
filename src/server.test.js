const micro = require('micro')
const listen = require('test-listen')
const request = require('request-promise')

describe('test', () => {
  it('should test async', async () => {
    expect.assertions(1)

    const service = micro(async (req, res) => {
      micro.send(res, 200, {
        test: 'woot'
      })
    })

    const url = await listen(service)
    const body = await request(url)

    expect(JSON.parse(body).test).toBe('woot')
    service.close()
  })
})
