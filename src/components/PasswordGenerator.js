let alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray()
let specialChars = "!@#$%^&*()+~`".toCharArray()
let numbers = "0123456789".toCharArray()

randomSpecialChar()
{
    let randIndex = Math.floor(Math.random() * specialChars.length)
}

randomLetter()
{
    let randIndex = Math.floor(Math.random() * alphabet.length)
}

randomNumber()
{
    let randIndex = Math.floor(Math.random() * numbers.length)
}

isUsed()
{
    return (used[index] == 'x')
}

generateRandomIndex(minLength, used)
{
    let curindex;
    do{
        cur_index =  randIndex = Math.floor(Math.random() * minLength)
    }
    while(isUsed(used, curindex))
    used[curindex] = 'x'

    return cur_index
}

generatePassword(minLength, numSpecialChars,  numCount)
{
    let password =  new Array(minLength)
    let used = new Array(minLength)

    for(var i = 0; i < numSpecialChars; i++)
    {
        let curIndex = generateRandomIndex(minLength,used)
        password[curIndex] = randomSpecialChar()
    }

    for(var i = 0; i < numCount; i++)
    {
        let curIndex = generateRandomIndex(minLength, used)
        password[curIndex] = randomNumber()
    }

    if(numCount + numSpecialChars < minLength)
    {
        for (var i = 0 ; i < minLength; i++)
        {
            if(password[i] == 0)
            {
                password[i] = randomLetter()
            }
        }
    }


    return password

}