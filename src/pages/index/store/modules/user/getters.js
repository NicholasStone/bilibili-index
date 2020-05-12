export default {
  username: s => s.username,
  avatar: (s, getters) => {
    return {
      face: s.face,
      decoration: s.pendant.image,
      vip: getters.vipType,
      official: s.official.role
    }
  },
  exp: s => s.level_exp.current_exp,
  level: s => s.level,
  vipType: s => s.vip.type,
  vip: s => s.vip,
  coin: s => s.coins,
  bCoin: s => s.wallet.bcoin_balance,
  following: s => s.following,
  followers: s => s.follower,
  verifying: s => {
    return {
      email: s.email_status,
      tel: s.tel_status,
      identification: s.identification
    }
  }
}
