import Vue from 'vue'
import SvgIcon from 'Components/common/SvgIcon/SvgIcon'

Vue.component('svg-icon', SvgIcon)

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext)

// import all svg
const req = require.context('.', true, /\.svg$/)
requireAll(req)
