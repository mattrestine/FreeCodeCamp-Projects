var userButton = document.getElementById('search');

userButton.onclick = function() {
    var results = document.getElementById('results');
    var user = document.getElementById('userSearch');
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + user.value;
    var result = "";
    $.ajax( {
        type: 'GET',
        url: url,
        dataType: 'jsonp',
        async: true,
        crossDomain: true,
        success: function(data) {
            console.log(data);
           
            for(var i = 0; i < 10; i++) {
                result += "<li id=\"cards\"><h3>" + data[1][i] + "</h3><p>" + data[2][i]+ "</p><p><a href=" + data[3][i] + " target=\"_blank\">more info...</a></p></li>";
            }
            
            
            results.innerHTML = result;
            user.value = "";
        }
    });
    
}