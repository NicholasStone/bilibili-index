export default {
  category: s => s.category,
  sectionData: s => name => s[name],
  // 所有频道的 section key 值
  allSection: s => s.sections
}
