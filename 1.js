let  userArr=[
    "mithun",
    "nik",
    "Rahul",
    "sam",
    "Amy"
];

function isUserpresent(user) {
    if(userArr.includes(user)) {
        console.log(`yes ${user} user is available`);
    } else{
        console.log(`no ${user} is not available`);
    }
}

isUserpresent("mithun");

isUserpresent("Alex");

