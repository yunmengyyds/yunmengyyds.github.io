document.addEventListener("DOMContentLoaded", function() {
    var serverInfo1;
    var serverInfo2;

    function renderServerInfo(containerId, serverInfo) {
        var container = document.getElementById(containerId);
        container.innerHTML = "<table style='  filter:alpha(opacity=75);opacity:0.75;margin-left:10%;text-align:center;width:80%;font-size:20px;border-radius:60px;background-Color:white'><tr><th>服务器状态</th>" + (serverInfo.online ? "<td style='color:green'>在线" : "<td style='color:red'>离线")  +
					"</td></tr><tr><th>服务器地址</th><td> " + serverInfo.host + 
					"</td></tr><tr><th>服务器端口</th><td> " + serverInfo.port + 
					"</th></tr><tr><th>服务器版本</th><td>" + serverInfo.version.name_clean + 
					"</td></tr><tr><th>当前玩家数</th><td>" + serverInfo.players.online + "/" + serverInfo.players.max + 
					"</td></tr><tr><th>MOTD</th><td>" + serverInfo.motd.clean + "</td></tr></table>";
    }

    fetch('https://api.mcstatus.io/v2/status/java/play.yunmeng.link')
        .then(response => response.json())
        .then(data => {
            serverInfo1 = data;
            renderServerInfo("server-info", serverInfo1);
        })
        .catch(error => {
            var container = document.getElementById("server-info");
            container.innerHTML = "<h2>获取数据失败，可能是因为无法连接到API服务器</h2>";
        });

});