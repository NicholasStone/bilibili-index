export default {
  categories: s => s.category.sort((a, b) => a.order - b.order),
  category: s => index => s[index],
  // 所有频道的 section key 值
  allSection: s => s.sections
}
