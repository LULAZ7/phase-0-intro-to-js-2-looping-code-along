let names=['Guadalupe','Ollie','Aki'];
function writeCards(names){
    let messages=[];
    let message;
    for(let i=0; i<names.length; i++){
        message= 'Thank you, ${names[i]},for the womderful surprise gift!'
        console.log(message);
        messages.push(message);
        debugger;
    }
    return messages;
}

writeCards(names);


function countDown(number) {
    let i = 0;
    let newNum= number;
    while(i<=number){
        console.log(newNum);
        i++
        newNum-+1;
    }
}

countDown(5);