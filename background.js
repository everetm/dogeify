//doge
(function($) {
	
    var self = $.doge = new function(){};
	
    $.extend(self, {
        dogeImgs : [
		'http://25.media.tumblr.com/34ffbdc315ab04ea43bf0657ca40582c/tumblr_mrzj6fmCDl1szim6vo1_400.jpg',
		'http://img.gawkerassets.com/img/195no2sf462e4jpg/ku-xlarge.jpg',
		'http://img.gawkerassets.com/img/195npu3bvfagipng/ku-medium.png',
		'http://img.gawkerassets.com/img/195nsx6rld7oygif/ku-medium.gif',
		'http://img.gawkerassets.com/img/195np8fyr3zw4jpg/ku-medium.jpg',
		'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg',
		'http://i.imgur.com/xhPaqKy.jpg',
		'http://images1.sw-cdn.net/model/picture/674x501_1496035_1716790_1390960862.jpg',
		'http://d310a9hpolx59w.cloudfront.net/product_photos/8386651/doge_20store_original.jpg',
		'http://i.imgur.com/q7VKiiK.gif',
		'http://2prowriting.files.wordpress.com/2013/12/doge-athlete.jpg',
		'http://24.media.tumblr.com/96919db8f22694170e85609491008230/tumblr_mtt0bmFOTZ1qjetuoo1_500.jpg',
		'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/',
		'http://0.tqn.com/d/humor/1/0/H/T/-/-/doge-sun-meme.jpg',
		'http://i1.kym-cdn.com/photos/images/original/000/582/000/00e.jpg',
		'http://memecrunch.com/meme/19C6X/safi-is-the-best-doge/image.png',
		'http://i.imgur.com/fPid2uG.png',
		'http://i.imgur.com/nDezmHE.gif',
		'http://i.imgur.com/aOPBNh6.gif',
		'http://i.imgur.com/5377upA.gif',
		'http://i.imgur.com/u0nbyuy.gif',
		'http://i.imgur.com/wYEjJpT.gif',
		'http://i.imgur.com/zUboE6Z.jpg',
		'http://asset-4.soup.io/asset/5379/5295_4038.jpeg',
		'http://0-media-cdn.foolz.us/ffuuka/board/foolz/image/1380/99/13809938714183.gif',
		'http://i.imgur.com/q63xk2Q.jpg',
		'http://i.imgur.com/1L57bjg.jpg',
		'http://media-cache-ak0.pinimg.com/236x/1b/97/1e/1b971e906c9f42f3da460f5d02fad2cb.jpg'
        ],
        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //if image is already replaced it skips
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//if the image loaded
					if(h > 0 && w > 0)
					{
						//replacing
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//replacing when loading
						$(item).load(function(){
							//NO CODE CRASHING LOOP PL0X
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });
			
            //REPLACE ALL THE THINGS
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        }
    });

    //run on jquery 
    $(function(){
        self.handleImages(self.dogeImgs, 3000);
    });
})(jQuery);

 