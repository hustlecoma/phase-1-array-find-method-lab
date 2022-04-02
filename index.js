// code your solution here

function superbowlWin(record) {
    const broncosWinResult = record.find(record => "W" === record.result) 
        
        if(broncosWinResult) {
            return broncosWinResult.year;
        } else {
            return undefined
        }
    }

superbowlWin(record);