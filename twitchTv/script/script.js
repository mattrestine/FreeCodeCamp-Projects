var users = ["freecodecamp", "WagamamaTV", "Ninja", "HSdogdog", "brunofin", "comster404", "imaqtpie"];
var user_data = [];
window.onload = function() {
    for (var i = 0; i < users.length; i++) {
    twitchapi(users[i]);
    }
    setTimeout(function() {
        printData();
    }, 1000);
}

function twitchapi(user) {
    var channel = 'http://wind-bow.gomix.me/twitch-api/channels/' + user;
    var stream = 'http://wind-bow.gomix.me/twitch-api/streams/' + user;
    
    //Data Objects
    var ustatus = {
        username: '',
        onlinestatus: '',
        userstatus: '',
        userurl: '',
        usergame: '',
        userlogo: ''
    };
    $.getJSON(channel, function (data) {
        console.log('channel ', data);
        if(data.status === 404){
            ustatus.userstatus = 'account closed';
        } else {
            ustatus.userstatus = data.status;
            ustatus.userurl = data.url;
            ustatus.userlogo = data.logo;
        }       
    });
    $.getJSON(stream, function(data1) {
        console.log('streaming ', data1);
        if(data1.stream !== null && ustatus.userstatus !== 'account closed') {
            ustatus.username = data1.stream.channel.display_name;
            ustatus.usergame = data1.stream.game;
            ustatus.onlinestatus = 'online';
        } else if(ustatus.userstatus === 'account closed') {
            ustatus.username = user;
            ustatus.onlinestatus = '';
        } else {
            ustatus.username = user;
            ustatus.onlinestatus = 'offline';
            ustatus.usergame = 'N/A';
        }
    });
    user_data.push(ustatus);
    console.log(ustatus);
    
}
//console.log(user_data);
function printData() {
    console.log(user_data);
    for(var i = 0; i < user_data.length; i++){
        var streamBlock = document.getElementById('streamingBlock');
        var streamingDiv = document.createElement('div');
        var userdata;
        if(user_data[i].userstatus == null || user_data[i].userstatus === 'account closed'){
            streamingDiv.setAttribute('class', 'card');
            streamingDiv.setAttribute('style', 'background-image: url(' + user_data[i].userlogo + ');background-size:cover;');
            userdata = "<div id='head'><h2 id='username'>" + user_data[i].username + "</a></h2><p id='userstatus'>" + user_data[i].userstatus + "</p></div>";
            streamingDiv.innerHTML = userdata;
            streamingBlock.appendChild(streamingDiv);
        } else {
            streamingDiv.setAttribute('class', 'card');
            streamingDiv.setAttribute('style', 'background-image: url(' + user_data[i].userlogo + ');background-size:cover;');
            userdata = "<div id='head'><h2 id='username'>" + "<a href='" + user_data[i].userurl + "' target='_blank'>" + user_data[i].username + "</a></h2><p id='userstatus'>" + user_data[i].userstatus + "</p></div><div id='body'><p id='usergame'> Curently playing: " + user_data[i].usergame + "</p></div>";
            if(user_data[i].onlinestatus === 'online') {
                userdata += "<div id='online'>" + user_data[i].onlinestatus + "</div>";
            } else if(user_data[i].onlinestatus === 'offline'){
                userdata += "<div id='offline'>" + user_data[i].onlinestatus + "</div>";
            }
            streamingDiv.innerHTML = userdata;
            streamingBlock.appendChild(streamingDiv);
        }
    }
    
}   
