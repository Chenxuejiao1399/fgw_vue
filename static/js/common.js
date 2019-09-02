const commonTools = {}

//commonTools.g_restUrl = 'http://farmerapi.companycheck.cn/api'
// commonTools.g_restUrl = 'http://192.168.1.29/api'

//设置cookie中存入的值
commonTools.setCookie = function (name, value, myDay) {
  var oDate = new Date()
  oDate.setTime(oDate.getTime() + (myDay * 60 * 1000)) // 单位是毫秒
  document.cookie = name + '=' + value + '; expires=' + oDate.toUTCString()
}

//取得cookie中存入的值
commonTools.getCookie = function (name) {
  // document.cookie获取当前网站的所有cookie
  var arr = document.cookie.split('; ')
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split('=')
    if (arr1[0] === name) {
      return arr1[1]
    }
  }
  return ''
}

//删除cookie存入的某个值
commonTools.deleteCookie = function (name, value) {
  var oDate = new Date()
  oDate.setTime(oDate.getTime() - 1);
  var cval = commonTools.getCookie(name);
  if (cval != null)
    document.cookie = name + '=' + cval + '; expires=' + oDate.toUTCString()
}

export {
  commonTools
}