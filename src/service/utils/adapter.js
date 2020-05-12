export default function indexDynamicAdapter ({ data: { cards } }) {
  return cards.map(({ desc, card }) => {
    const video = JSON.parse(card)
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
        aid: video.aid,
        attribute: video.attribute,
        cid: video.cid,
        copyright: video.copyright,
        duration: video.duration,
        pic: video.pic,
        pubdate: video.pubdate,
        title: video.title
      }
    }
  })
}
