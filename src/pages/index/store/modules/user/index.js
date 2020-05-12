import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    name: 'Nicholas-',
    sex: '男',
    face: 'http://i0.hdslb.com/bfs/face/1e4e803270680ed2b82a5d9f99955a150563c3f6.jpg',
    sign: '',
    rank: 10000,
    level: 5,
    jointime: 0,
    moral: 70,
    silence: 0,
    email_status: 1,
    tel_status: 1,
    identification: 1,
    vip: {
      type: 2,
      status: 1,
      due_date: 1600358400000,
      vip_pay_type: 1,
      theme_type: 0,
      label: {
        path: ''
      }
    },
    pendant: {
      pid: 996,
      name: '拉文克劳',
      image: 'http://i1.hdslb.com/bfs/face/971b69742c60b93225d38eb4c99fc382e2e5eb44.png',
      expire: 0,
      image_enhance: 'http://i1.hdslb.com/bfs/face/971b69742c60b93225d38eb4c99fc382e2e5eb44.png'
    },
    nameplate: {
      nid: 74,
      name: '大会员2018年度勋章',
      image: 'http://i0.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png',
      image_small: 'http://i0.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png',
      level: '稀有勋章',
      condition: '2018.6.26-7.8某一天是年度大会员'
    },
    official: {
      role: 0,
      title: '',
      desc: '',
      type: -1
    },
    birthday: 815414400,
    is_tourist: 0,
    is_fake_account: 0,
    pin_prompting: 0,
    is_deleted: 0,
    level_exp: {
      current_level: 5,
      current_min: 10800,
      current_exp: 26948,
      next_exp: 28800
    },
    coins: 22.8,
    following: 7,
    follower: 561,
    wallet: {
      bcoin_balance: 5,
      coupon_balance: 5,
      coupon_due_time: 0
    }
  },
  actions,
  mutations,
  getters
}
