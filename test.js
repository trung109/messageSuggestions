function getRandomDate(){
    let year =2016
    let month = 2
    let dayAvailable = 31
    if(month === 4 || month===6 || month===9 || month===11) dayAvailable=30
    if(month === 2 ){
         if(year%4===0){
            if(year%100===0 && year%400!=0) dayAvailable=28
            else dayAvailable=29
         } else dayAvailable=28

    }
    let day=Math.floor(Math.random()*dayAvailable)
    let a={
        _dd: day,
        _mm: month,
        _yyyy: year
    }
    console.log(dayAvailable)

}
getRandomDate()