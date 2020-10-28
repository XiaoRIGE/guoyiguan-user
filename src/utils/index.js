
export function throttle (func, wait) {
  let timeout
  return function () {
    const that = this
    const args = arguments

    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(that, args)
      }, wait)
    }
  }
}

/**
 * 利用 document.title 做新消息提示
 * @export
 * @param {Number} count
 */
export function titleNotify (count) {
  const hasNewMessage = count > 0
  if (hasNewMessage) {
    if (document.title.search(/\((.*?)\)/) >= 0) {
      document.title = document.title.replace(/\((.*?)\)/, `(${count > 99 ? '99+' : count})`)
    } else {
      document.title = `(${count})${document.title}`
    }
  } else {
    document.title = document.title.replace(/\((.*?)\)/, '')
  }
}

// 生成随机验证码
export function getRandomNum () {
  var code = ''
  var codeLength = 4 // 验证码的长度
  var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // 随机数
  for (let i = 0; i < codeLength; i++) { // 循环操作
    const index = Math.floor(Math.random() * 36) // 取得随机数的索引（0~35）
    code += random[index] // 根据索引取得随机数加到code上
  }
  return code
}
