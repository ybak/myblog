function ShareCode(server_url, server_icon_url,text){
    var title = encodeURIComponent(document.title.substring(0,76));
    var url = encodeURIComponent(location.href);
    server_url = server_url.replace("{title}",title);
    server_url = server_url.replace("{url}",url);

    return "<a href=\"javascript:window.open(\'" 
    + server_url 
    +"'); void 0\" title =\"" + text + "\"><IMG alt=" 
    + text + " src=\"" 
    + server_icon_url 
    + "\"><\/a>"
}
function WriteSNS()
{    
    document.writeln(ShareCode("http://share.renren.com/share/buttonshare.do?title={title}&link={url}",
    "http://s.xnimg.cn/favicon-rr.ico?ver=2",
    "Share to Renren"));
    
    document.writeln(ShareCode("http://www.kaixin001.com/repaste/share.php?rtitle={title}&rurl={url}",
    "http://www.kaixin001.com/favicon.ico",
    "Share to Kaixin"));    
    
    document.writeln(ShareCode("http://v.t.sina.com.cn/share/share.php?title={title}&url={url}",
    "http://t.sina.com.cn/favicon.ico",
    "Share to SinaMicroblog"));

    document.writeln(ShareCode("http://www.douban.com/recommend/?url={url}&title={title}",
    "http://t.douban.com/favicon.ico",
    "Recomend to Douban"));
    
    document.writeln(ShareCode("http://apps.hi.baidu.com/share/?title={title}&url={url}",
    "http://www.baidu.com/favicon.ico",
    "Forword to BaiduHi"));

    
}