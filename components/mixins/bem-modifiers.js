export function getModifiers (component, element) {
  let array = element.length > 0 ? component[element + 'Modifiers'] : component.blockModifiers
  if (!array) {
    return ''
  }
  return array.map((value) => component.bem(element) + '--' + value).join(' ')
}

export default {
  props: {
    blockModifiers: {
      type: Array,
      default: null
    }
  },
  computed: {
    blockClass: function () {
      return getModifiers(this, '')
    }
  }
}
