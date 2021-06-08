import { Users } from "../../../users"

export default function (request,response){
    const user = JSON.parse(request.query.user)
    var createAccount = true
    for (let v of Users){
        if (user["NAME"] == v[0] && user["PASS"] == v[1]){
            createAccount = false
        }
    }
    if (createAccount == true){
        Users.push([user["NAME"],user["PASS"]])
    }
    response.send({
        "AcountCreated":createAccount
    })
}