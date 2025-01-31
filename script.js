function hourCheck2(t1, t2) {
    const pm = "pm"
    const resultTest = []
    const hourArray = [t1,t2]
    console.log(hourArray)
    
    for (let i = 0; i < hourArray.length; i++) {
     const result = hourArray[i].split(":")
     
     console.log(result[1])
     resultNum = Number(result[0])
       
       if ( result[1].includes(pm)) {
           resultHour = resultNum + 12
         } else {
           resultHour = resultNum
         }
         resultTest.push(resultHour)
         console.log(resultTest)
           
         const num1 = Number(resultTest[0])  
         const num2 = Number(resultTest[1])
         console.log(num1, num2)
         
            if ( num2 === num1) {
              console.log("No hours have passed")
         } else {
           const finalCountdown = num2 - num1
         console.log(`${finalCountdown} hours have passed`)
     
   }}};
  
  hourCheck2("3:00am", "3:00pm")