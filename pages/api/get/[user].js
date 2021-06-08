import { Users } from "../../../users"

export default function (request,response){
    const user = JSON.parse(request.query.user)
    const r = {
        "VALIDED":false,
    }
    for (let v of Users){
        if (user["NAME"] == v[0] && user["PASS"] == v[1]){
            r["NAME"] = v[0]
            r["VALIDED"]=true
        }
    }
    response.send(r)
}