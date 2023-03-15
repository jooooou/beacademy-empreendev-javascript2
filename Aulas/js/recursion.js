function countDown(number){
    console.log(number)
    const newNumber = number - 1
    if (newNumber >0){
        countDown(newNumber)
    }
}

countDown(10)

// default parameters

function say(message='Hello'){
    console.log(message)
}

say()
say('World')