
/**
 * 两个集合是否有交集
 * @param {Set} set 集合
 * @param {Set} subset 另外一个集合
 */
export function isSuperset (set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false
    }
  }
  return true
}

/**
 * 合并两个集合
 * @param {Set} setA
 * @param {Set} setB
 */
export function union (setA, setB) {
  const _union = new Set(setA)
  for (const elem of setB) {
    _union.add(elem)
  }
  return _union
}

/**
 * 交集
 * @param {Set} setA
 * @param {Set} setB
 */
export function intersection (setA, setB) {
  const _intersection = new Set()
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem)
    }
  }
  return _intersection
}

/**
 * 去掉交集后合并两个集合
 * @param {Set} setA
 * @param {Set} setB
 */
export function symmetricDifference (setA, setB) {
  const _difference = new Set(setA)
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem)
    } else {
      _difference.add(elem)
    }
  }
  return _difference
}

/**
 * 删除集合A中与B的集合
 * @param {Set} setA
 * @param {Set} setB
 */
export function difference (setA, setB) {
  const _difference = new Set(setA)
  for (const elem of setB) {
    _difference.delete(elem)
  }
  return _difference
}
