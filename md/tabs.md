# wxApp-baiduyun
## tabsadada

看了网上的一篇文章写了一个tabs,详细看代码。

```
 // wxml

<view class="tabs">
        <view class="inline tab-head" bindtap="tabFun">

            <view class="{{tabArr.curHdIndex=='0'? 'active' : ''}} down" data-id="0">
                下载列表
            </view>

            <view class="{{tabArr.curHdIndex=='1'? 'down active' : ''}} upload" data-id="1">
                上传列表
            </view>

            <view class="{{tabArr.curHdIndex=='2'? 'down active' : ''}} save" data-id="2">
                保存到相册
            </view>

        </view>

        <view class="tab-content">

            <view class="tab-item {{tabArr.curBdIndex=='0'? 'active' : ''}}">
					下载列表内容
            </view>
            
            <view class="tab-item {{tabArr.curBdIndex=='1'? 'active' : ''}}">
                上传列表内容
            </view>  

            <view class="tab-item {{tabArr.curBdIndex=='2'? 'active' : ''}}">
                 保存到相册内容
            </view>  

        </view>
    </view>
    // js 
    
    
    Page( {  
		  data: {  
		    tabArr: {  
		      curHdIndex: 0,  
		      curBdIndex: 0  
		    },  
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
		
		// wxss
		.tab-head .active{
			border-bottom: 1px solid blue;
		}
		
		.tab-content .tab-item{
			display: none;
		}
		
		.tab-content .active{
			display: block;
		}

    
```




