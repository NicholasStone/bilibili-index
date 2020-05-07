export default {
  data () {
    return {
      hover: ''
    }
  },
  methods: {
    showDialog (el) {
      return this.hover === el
    },
    handleMouseEnter (el) {
      this.hover = el
    },
    handleMouseLeave () {
      this.hover = ''
    }
  }
}
