/*
    JSON Data
    "name":"John" - name/value pairs

    KEYS
    JSON format - keys must be strings
    { "name":"John" }
    
    JavaScript - keys don't need to be strings
    { name:"John" }

    VALUES
    JSON
    - string, number, object (JSON object), array, boolean, null
    JavaSCript
    - same as JSON and function, date, undefined

    JavaScript
    var person = {"name":"John", "age":31,"city":"New York" };
    person.name or person["name"]


    Datatypes
    Strings { "name":"John" }

    Numbers { "age":30 }

    Objects { "employee": { "name":"John", "age":30, "city":"New York" }}
        myObj = { "name":"John", "age":30, "car":null }
        x = myObj.name
        x = myObj["name"]

        for(x in myObj){
            str += x
            str += myObj[x]
        }

        Nested
        myObj = {
            "name":"john",
            "age":30,
            "cars":{
                "car1":"Ford",
                "car2":"BMW",
                "car3":"Fiat"
            }
        }
        x = myObj.cars.car2
        x = myObj.cars["car2"]

        Delete Properties
        delete myObj.cars.car2

    Arrays { "employee":[ "John", "Anna", "Peter" ]}
        [ "Ford","BMW","Fiat" ]
        {
            "name":"John",
            "age":30,
            "cars":[ "Ford", "BMW", "Fiat" ]
        }
        x = myObj.cars[0]
        for (i in myObj.cars) {
            x += myObj.cars[i];
        }
        
        myObj = {
            "name":"John",
            "age":30,
            "cars": [
                { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
                { "name":"BMW", "models":[ "320", "X3", "X5" ] },
                { "name":"Fiat", "models":[ "500", "Panda" ] }
            ]
        }
        for (i in myObj.cars) {
            x += "<h1>" + myObj.cars[i].name + "</h1>";
            for (j in myObj.cars[i].models) {
                x += myObj.cars[i].models[j];
            }
        }

    Booleans { "sale":true }

    null { "middlename":null }





*/