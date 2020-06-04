<template>
  <carousel class="carousel-screen">
    <carousel-item v-for="{src, href, title} in carouselContent" :key="title">
      <a :href="href" class="carousel-content bottom-shadow">
        <img
          class="carousel-content__image"
         :src="src"
         :alt="title">
        <span class="carousel-content__title">{{title}}</span>
      </a>
    </carousel-item>
    <slot></slot>
    <a class="more_topic" href="https://www.bilibili.com/blackboard/topic_list.html">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></a>
  </carousel>
</template>
<script>
import { Carousel, CarouselItem } from 'Components/common/Carousel'

export default {
  name: 'CarouselScreen',
  components: {
    Carousel,
    CarouselItem
  },
  data () {
    return {
      carouselContent: [
        { src: '/cdn/http://i0.hdslb.com/bfs/sycp/creative_img/202006/bdeb6ab6ced4e9a62bb2619998d27d6a.jpg@880w_388h_1c_95q', href: 'https://cm.bilibili.com/cm/api/fees/pc/sync/v2?msg=a%7C3200%2Cb%7Cbilibili%2Cc%7C0%2Cd%7C1%2Ce%7CCAAQABiAgKCpuKymkgUgACgAMCQ4gBlCHzE1OTExNDY4Mzg2NDBxMTcyYTIyYTcxYTIyNnEzOTZI8PT3vacuUgBaBuWxseilv2IG5Lit5Zu9aAFwAHiAgICAkBKAAQCIAZhkkgENMjE4LjI2LjU0LjIzNpoBhAxhbGw6Y3BjX2Nyb3dkX3RhcmdldCxlY3BtOmRlZmF1bHQsY3BjVGFnRmlsdGVyOnVuZGVmaW5lZCxwbGF5cGFnZWN0cjplbmFibGUsbm9fYWRfZmxvd19jb250cm9sOnVuZGVmaW5lZCxicnVzaF9kdXBsaWNhdGU6ZGVmYXVsdCxwY3RyX2NwbTpjcG0scGN0cl9jb25zdGFudDpkZnQscGN0cl92MjpmbV90ZHNod2Nsa18yLGR5bmFtaWNfZmxvd19jb250cm9sOnNwbGl0IHRoZSBmbG93IGJ5IG1pZCxmcmVxTGltaXQ6ZGVmYXVsdCxvdXRlckJlYXRJbm5lcjpkZWZhdWx0LG91dGVyUXVpdDpkZWZhdWx0LGZkc19ydHQ6ZGVmYXVsdCxjcGE6Y3ZyX3ByZXRyYWluLGluZGlzX1VWOnVuZGVmaW5lZCxoYXNoX2luZGlzX1VWOnVuZGVmaW5lZCxmZWVkc19yYW5kb21fcmVzdWx0OmRlZmF1bHQsZmxvd19yYXRpb19jaGVjazpyMyxiYXNlX2hhc2hfaW5kaXNfVVY6dW5kZWZpbmVkLGRtcF9hZ2VfZXhwOmRtcCxjb2xkX2Jvb3RfZXhwOmRlZmF1bHQsbnRoX2JydXNoX2V2ZW50OmRlZmF1bHQsbG93X3F0eV9jcmVhdGl2ZTpsb3dfcXR5LGZyZXFfc3R5bF9jYXJkOmRlZmF1bHQsZHVwX2FkX2NvbnRyb2w6ZGVmYXVsdCxicnVzaF9hZF9jb250cm9sOmRlZmF1bHQsbmVnYXRpdmVGZWRCYWNrOmRlZmF1bHQsZGVmYXVsdEFnZTpkZWZhdWx0LGV4cF9wZXJzb25hbF91cDpwZXJzb25hbHVwX2NvbnN0YW50LGZpbHRlck9wdDpvcGVuLGlubmVyX2VuaGFuY2U6b3BlbixmcmVxX2NvbV9wZHRfZXhwOnVuZGVmaW5lZCxjcmVhdGl2ZUdyYWRlU3RyYXRlZ3k6RVhQQSxmZWVkUmVjYWxsU3RyYXRlZ3k6Y29udGVudHVwXzE1MDBfdXNlcl9wcmVmZXIsZW5hYmxlUGFyYWxsZWw6dHJ1ZSxkeW5hbWljX3ByaWNpbmdfc3RyYXRlZ3k6Y29uc3RhbnQsYnVzaW5lc3NtYXJrX2V4cDpCLGxpbWl0X2FkeDpkZWZhdWx0LHBlcnNvbmFsX3VwX3BjdnI6YmFzZSxmbHlfY3BhOmZseV9leHBsb3JlLGR5bmFtaWNfbWF0ZXJpYWw6Y29uc3RhbnQsaDVfdmVyc2lvbjpOQSxkcGFfY3V0b2ZmOmRwYV9jdXRvZmZfY29uc3RhbnQsc3NwUGFyYWxsZWw6dHJ1ZV8xMzAscGVyZm9ybWFuY2VFeHBOYW1lOmRuZixzZW5zaXRpdmVGZWVkQnJ1c2g6dHdvQnJ1c2gscGVyc29uVXBQb3dkZXJSaXNpbmc6cG93ZGVyUmlzaW5nQixwbGF5cGFnZVNtYWxsQnVkZ2V0OmRlZmF1bHQsZmVlZFNtYWxsQnVkZ2V0Om9wZW4sc29ydEFkeDpzb3J0QWR4X3RydWUsdGltZUZyZXFFeHA6ZGVmYXVsdCxvY3B4Qm9udXM6b2NweEJvbnVzRXhwQSxzdXBwb3J0X2NvbnRlbnRfdXBfY3V0b2ZmOmNsb3NlX3N1cHBvcnRfY29udGVudF91cF9jdXRvZmYsY29udGVudF91cF9jdXRvZmY6Y29udGVudHVwX2Jhc2UscGVyc29uX3VwX2N1dG9mZjpwZXJzb251cF9keW5hbWljLGNvbnRlbnRVcFNtYWxsQnVkZ2V0OmRlZmF1bHQsb2NwbVR3b1N0YWdlUGN0clRocmVzaG9sZEV4cDpiYXNlLG9jcG1Ud29TdGFnZVBjdnJUaHJlc2hvbGRFeHA6ZXhwXzEsb2NwY1R3b1N0YWdlUGN2clRocmVzaG9sZEV4cDpleHBfMSxzZWFyY2hLZXlXb3JkOm5vRml4U2VhcmNoS2V5V09yZCxwbGF0Zm9ybTpkZWZhdWx0oAEAqAEAsgEg8JYTvPbKW42hW6UC3AOfjVq7isun9isCSK1hGa0dx1O6AcECaHR0cHM6Ly9hZC1iaWxpLWRhdGEuYmlsaWdhbWUuY29tL3YyL2FwaS9jbGljay9tb2JpbGVfc3luY19iaWxpP21pZD1fX01JRF9fJm9zPTMmaWRmYT1fX0lERkFfXyZidXZpZD1fX0JVVklEX18mYW5kcm9pZF9pZD1fX0FORFJPSURJRF9fJmltZWk9X19JTUVJX18mbWFjPV9fTUFDX18mZHVpZD1fX0RVSURfXyZpcD0yMTguMjYuNTQuMjM2JnJlcXVlc3RfaWQ9MTU5MTE0NjgzODY0MHExNzJhMjJhNzFhMjI2cTM5NiZ0cz1fX1RTX18mdWE9X19VQV9fJmFkX2NoYW5uZWxfaWQ9NSZhZF9mPTU4NWM4M2ViN2E4ZTQzMDRiNDQ1ODJlZWNkZTRiOTM3JmdhbWVfaWQ9MTgywgEA0gEA2AGRAeABAOgBAPABAPgBAIACAIgCALgCAMACAMgCANACANgCAOoCAPACq%2FQG%2BAIAiAMBkgMAqAMAsAMAuAMAwgMAyAMX0gNBeyIxIjoiMzcwNTg5NzIyMDY2MDI2NDk2IiwiMiI6IjM2IiwiNCI6IjkwIiwiNSI6IjI5MiIsIjYiOiIzNl8wIn0%3D%2Cf%7Cclick_sync_3%2Cg%7C1%2Ch%7C3%2Ci%7C22834699%2Cj%7C%2Ck%7C1591150977323%2Cl%7C%2Cm%7C1591146839271%2Cn%7C1%2Co%7C&ts=1591150977323', title: '独角兽和优酱都准备好了！' },
        { src: '/cdn/http://i0.hdslb.com/bfs/archive/3aa780c790c96a354a3fb467edeaa9552acf963c.jpg@880w_388h_1c_95q', href: 'https://www.bilibili.com/read/cv6181430?from=1002', title: '你喜欢的作品上榜了吗？' },
        { src: '/cdn/http://i0.hdslb.com/bfs/archive/7e3eec2863a8e848f3287c02026c44e75b73ec8c.jpg@880w_388h_1c_95q', href: 'https://www.bilibili.com/bangumi/play/ep118443', title: '阿米尔·汗主演高分励志电影' },
        { src: '/cdn/http://i0.hdslb.com/bfs/archive/e94cf1d5705addc62a299969988d3a489977f1ad.jpg@880w_388h_1c_95q', href: 'https://www.bilibili.com/read/cv6229728?from=1002', title: '真的是严肃讨论！' },
        { src: '/cdn/http://i0.hdslb.com/bfs/archive/28caa8096a7556e6dc3ad9b59747286f61232fd7.jpg@880w_388h_1c_95q', href: 'https://www.bilibili.com/blackboard/activity-food.html', title: '8万现金等你来拿！！！！' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.carousel-screen {
  .blocking(100%, 100%);
  &:hover .more_topic {
    opacity: 1;
  }
}
.more_topic {
  .p-absoluting(178px, 478px);
  padding: 4px 8px;
  background: rgba(0,0,0,.65);
  border-radius: 2px;
  color: @color-white;
  font-size: @font-size-small;
  z-index: 10;
  opacity: 0;
  transition: opacity .3s;
}
.carousel-content {
  .blocking(100%, 100%);
  position: relative;
  &__image {
    .blocking(100%, 100%);
  }

  &__title {
    .blocking(70%, auto);
    .p-absoluting(auto, 12px, 10px);
    color: @color-gray;
    .line-breaking();
    font-size: @font-size-normal;
    line-height: @font-size-normal;
    z-index: 10;
  }
}
</style>
