样式改自free css template的subordinate，内容模块改自iNove,在后台添加了添加了广告模块，方便各位为网站添加广告代码，具体效果请移步www.debuglife.tk ，谢谢支持
change log： 
1.删除一些只和我个人有关自定义的链接，如about，resume，rss，使用者可以自己加上和自己对应的东西，有任何问题可到我的网站留言提问 
2.在日志页面，添加了分享到人人等sns的按钮:，具体效果请点进文章里面，在标题下即可看到 
3. 可以添加自定义模块，如广告模块，about模块等，点这里了解如何添加。 
4.页面添加分页导航，代替原来简单的上一页下一页。 
5.日志页自动在日志后添加版权声明。 

把侧边栏广告删除或替换成你想要的东西的方法：

打开template目录下的sidebar.html，找到<div id="shared items" class="widget widget_blogwidget">，大概在133行
将以下代码删除或者替换（如替换成你想要分享的google reader，或者twitter侧边栏，或者替他的）即可：
<!-- <h2>My Shared items </h2> -->
				You can delelte following or replace it with your ads,see detail in readme.txt.你可以替换或者删除下面的广告，详见readme.txt
				<p align="center">
                    <script type="text/javascript"><!--
                    google_ad_client = "pub-3779579820082790";
                    /* 250x250, created 10/20/10 */
                    google_ad_slot = "9904973105";
                    google_ad_width = 250;
                    google_ad_height = 250;
                    //-->
                    </script>
                    <script type="text/javascript"
                    src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
                    </script>
                </p>
                
