import bcrypt from "bcrypt";

let password = "ks"

// if (password) {
//     bcrypt.hash(password,10)
//     .then(hashPassword =>{
//         console.log(hashPassword)
//     }).catch(error =>{
//         return res.status(500).send({
//             error : "Enable to hashed password"
//         })
//     })
// }

const hash = async () =>{
    try {
        const l = await bcrypt.hash(password,10);
        console.log(l)
    } catch (error) {
        
    }
}

hash()