const http = require("http");
const fs = require("fs");
const db = require("./db");

const server = http.createServer((req, res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        // "Acces-Control-Allow-Headers": "*",
        "Content-Type":"text",
    };
    let goodData = false
    req.on("data", (data) => {
        goodData = checkData(data);
    });
    req.on("end", ()=>{
        if (goodData === "good"){
            // res.writeHead(200, "ok", {"Content-Type":"text"});
            res.writeHead(200, "ok", headers);
            res.write("accepted");
            res.end();
            return
        }
        else {
            // res.writeHead(200, "ok", {"Content-Type":"text"})
            res.writeHead(200, "ok", headers)
            res.write("declined");
            res.end();
            return
        }
    });
});

const port = 9000;
server.listen(port, () => {
    console.log("listening");
});

function checkData(data){
    const readAbleData = JSON.parse(data.toString());
    const { name, age, ability } = readAbleData;
    const goodName = checkName(name);
    const goodAge = checkAge(age);
    const goodAbility = checkAbility(ability);
    if(goodName && goodAge && goodAbility){
        return "good";
    } else {
        return "not good";
    }
}

function checkName(name){
    const badNames = db.nameNotEqual;
    for(let badName of badNames){
        if(badName === name){
            return false;
        }
    }
    return true;
}

function checkAge(age){
    const minAge = db.minAge;
    const maxAge = db.maxAge;
    if(age <= maxAge && age >= minAge){
        return true;
    }
    return false;
}

function checkAbility(abiltiy){
    const goodAbilities = db.ability;
    for(let goodAbility of goodAbilities){
        if(abiltiy.toLowerCase() === goodAbility.toLowerCase()){
            return true;
        }
    }
    return false;
}
