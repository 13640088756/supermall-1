module.exports = {
  plugins: {
    // ...
    'postcss-px-to-viewport': {
      // options
      viewportWidth: 375, //视窗的宽度， 对应的是设计搞的效果
      viewportHeight: 667, //视窗的高度，对应的是我们设计稿的高度
      unitPrecision: 5, // 指定 ‘px’转化为视窗单位值的小数位数
      viewportUnit: 'vw', //指定需要转换的视窗单位 ，建议使用 vw
      selectorBlackList: ['tab-bar','tab-bar-item'],

      minPixelValue: 1, //小于或者等于1px 不转化
      mediaQuery: false //允许再媒体查询中使用

    }
  }
}
