
var downArr = [
	{	
		id: 1,
		image: '',
		name: '测试adasdad',
		updateAt: '2010-12-12 12:12',
		size: '12312',
		isDetail: false
	},
	{	
		id: 2,
		image: '',
		name: '测试adasdad1232131',
		updateAt: '2010-12-12 12:12',
		size: '1111',
		isDetail: false
	},
	{	
		id: 3,
		image: '',
		name: 'ERDaafdssdfsdaaWWWW',
		updateAt: '2010-12-12 12:12',
		size: '2131',
		isDetail: false
	},
	{	
		id: 4,
		image: '',
		name: '测试adasdad',
		updateAt: '2010-12-12 12:12',
		size: '111',
		isDetail: false
	}
]

Page({  
  data: {  
    tabArr: {  
      curHdIndex: 0,  
      curBdIndex: 0  
    },
    downArr: downArr
  },  
  tabFun: function(e){  

    //获取触发事件组件的dataset属性  
    var _datasetId=e.target.dataset.id
    console.log("----"+_datasetId+"----")
    
    var _obj={}
    
    _obj.curHdIndex = _datasetId
    _obj.curBdIndex = _datasetId

    this.setData({  
      tabArr: _obj  
    });

  },  
  
  onLoad: function( options ) {  
  	console.log(options)
  }

});  