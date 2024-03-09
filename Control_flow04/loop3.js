// How to destructure array of objects [ I M P O R T A N T ]

const arr = [
    {
        name : "udit",
        id : 1
    },
    {
        name : "kt",
        id : 2
    },
    {
        name : "aryan",
        id : 3
    }
]

arr.forEach( (item) => {
   console.log(item);
})

arr.forEach( (item) => {
    console.log(item.name, item.id);
 })

