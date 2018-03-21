/*

    '{ "name":"John", "age":30, "city":"New York"}'
    var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');


    From the Server
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = myObj.name;
        }
    };
    xmlhttp.open("GET", "json_demo.txt", true);
    xmlhttp.send();
*/