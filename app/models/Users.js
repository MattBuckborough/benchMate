

exports.authenticate = function (user) {
    console.log(user)
    var testUsers = [{name: "tester", hash: -1014020185}];
    var status = false;
    for (var i = 0; i < testUsers.length; i++){
        if(user.name == testUsers[i].name && user.hash == testUsers[i].hash) {
            status = true;
            break;
        }
    }
    return status;

}