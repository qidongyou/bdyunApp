var grids = [
	{
		id: 1,
		title: '照片备份',
		image: ''
	},
	{
		id: 2,
		title: '视频备份',
		image: ''
	},
	{
		id: 3,
		title: '通讯录同步',
		image: ''
	},
	{
		id: 4,
		title: '回收站',
		image: ''
	},
	{
		id: 5,
		title: '云冲印',
		image: ''
	},
	{
		id: 6,
		title: '分享动态',
		image: ''
	},
	{
		id: 7,
		title: '百度钱包',
		image: ''
	},
	{
		id: 8,
		title: '闪电互传',
		image: ''
	},
	{
		id: 9,
		title: '我的会员',
		image: ''
	},
	{
		id: 8,
		title: '个性主题',
		image: ''
	},
	{
		id: 8,
		title: '敬请期待',
		image: ''
	}

]



Page({
  
  	data: {
    	logs: [],
    	grids: grids
  	},

  	onLoad: function () {
    	console.log('init more index page')
    	console.log(this.data);
  	}
})
