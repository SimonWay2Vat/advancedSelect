export function isTagInArray(tags: Array<any>, selectedTag) {
  for (const tag of tags) {
    if (tag.id === selectedTag.id) return true
  }


  return false
}


export function getTagIndex(tags: Array<any>, selectedTag) {
  for (let i = 0; i <  tags.length; i++) {
    const tag = tags[i]

    if (tag.id === selectedTag.id) return i
  }
}


export function getTagIndexByLabel(tags: Array<any>, label) {
  for (let i = 0; i <  tags.length; i++) {
    const tag = tags[i]

    if (tag.label === selectedTag.label) return i
  }
}
