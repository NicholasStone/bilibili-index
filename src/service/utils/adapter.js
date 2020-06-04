export default function indexDynamicAdapter ({ cards }) {
  return cards.map(({ desc, card }) => {
    return {
      dynamic_id: desc.dynamic_id,
      timestamp: desc.timestamp,
      bvid: desc.bvid,
      uploader: {
        uid: desc.user_profile.info.uid,
        name: desc.user_profile.info.uname,
        face: desc.user_profile.info.face,
        official_verify: desc.user_profile.card.official_verify.type,
        vipType: desc.user_profile.vipType
      },
      video: {
        aid: card.aid,
        attribute: card.attribute,
        cid: card.cid,
        copyright: card.copyright,
        duration: card.duration,
        pic: card.pic,
        pubdate: card.pubdate,
        title: card.title
      }
    }
  })
}
