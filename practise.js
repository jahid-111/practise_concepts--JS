// console.log("practise.js")
// ======================================== (01)
if ([0] == false) {
        console.log(true)
    } else {
            console.log(false)
        }
        


//  ======================================== (02)
    if (true === "true") {
        console.log(true)
    } else {
        console.log(false)
    }


    const number = 0;
    const chkNum = (num) => {
        
        if ("number" === typeof num ) {
            return true;
        } else {
            return false;
        }
    }
    console.log(chkNum(number))