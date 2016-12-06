

var themes = [
  {
    id:1,
    name: '推荐',
    type: 'tj'
  },
  {
    id:1,
    name: '娱乐',
    type: 'yl'
  },
  {
    id:1,
    name: '热点',
    type: 'rd'
  },
  {
    id:1,
    name: '体育',
    type: 'ty'
  },
  {
    id:1,
    name: '财经',
    type: 'cj'
  },
  {
    id:1,
    name: '军事',
    type: 'js'
  },
  {
    id:1,
    name: '汽车',
    type: 'qc'
  },
  {
    id:1,
    name: '搞笑',
    type: 'gx'
  },
  {
    id:1,
    name: '时尚',
    type: 'ss'
  }

]

Page({
  data: {
    themes: themes,
    toView: 'tj',
    scrollTop: 100
  },
  tapName: function(e){
    
    console.log(e.target.dataset.type)
    this.setData({
      toView : e.target.dataset.type
    })

  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})