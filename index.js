// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response){
//         return response.json()
//     })
//     .then(function(object){
//         console.log(object)
//     })
//     .catch(function(error){
//         alert("Bad things!")
//     })
const user = {
    name: "Steve",
    email: "steve@steve.com",
}

const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(user)
}

function submitData(){
    return fetch("http://localhost:3000/users", configObj)
    .then(function (response){
        return response.json()
    })
    .then(function (object){
    document.body.innerHTML = object ["id"]
    })
    .catch(function(error){
        document.body.innerHTML = error.message

    })
}