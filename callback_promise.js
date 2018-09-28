function getEmail(callback){
    $.getJSON('',function(data){
        callback(data.result[0].email);
    });
}

const emails = [];

getEmail(function(email){
    emails.push(email);
    getEmail(function(email){
        emails.push(email);
        getEmail(function(email){
            emails.push(email);
            console.log(emails);
        });
    });
});



//promise
function getEmail(){
    return new Promise(function(resolve){     
        $.getJSON('',function(data){
            resolve(data.result[0].email);
        });
    });
}

const emails = [];

getEmail()
.then(function(email){
    emails.push(email);
    return getEmail();
})
.then(function(email){
    emails.push(email);
    return getEmail();
})
.then(function(email){
    emails.push(email);
    console.log(emails);
})



//async await
function getEmail(){
    return new Promise(function(resolve){     
        $.getJSON('',function(data){
            resolve(data.result[0].email);
        });
    });
}

const emails = [];

async function emails(){
    let email;
    emails.push(await getEmail());
    emails.push(await getEmail());
    emails.push(await getEmail());
    console.log(emails);
}
// async function emails(){
//     let email;
//     email = await getEmail();
//     emails.push(email);
//     email = await getEmail();
//     emails.push(email);
//     email = await getEmail();
//     emails.push(email);
//     console.log(emails);
// }
emails();