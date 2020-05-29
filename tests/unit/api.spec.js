import requestOptions from 'Network/api'
import request from 'Network/request'
import section, { ENTERTAINMENT } from 'Index/config/section'

test('request-option', () => {
  const options = {
    params: {
      rid: 123,
      ps: 12
    }
  }
  expect(requestOptions('video.recommend.index_section', options))
    .toEqual({
      url: 'https://api.bilibili.com/x/web-interface/dynamic/region',
      method: 'GET',
      params: {
        rid: 123,
        ps: 12
      }
    })
}, 60000)

it('section-data-request', async () => {
  for (const s in section) {
    expect.assertions(1)
    await expect(
      request('video.recommend.index_section', { params: { rid: section[s], ps: 12 } })
    ).resolves.toHaveProperty('code', 0)
  }
}, 30000)
