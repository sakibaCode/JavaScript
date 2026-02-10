function newPrice(currentPrice, discount) {

    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }

    if (discount < 0 || discount > 100) {
        return "Invalid";
    }

    const discountPrice = currentPrice - (currentPrice * discount / 100);

    return discountPrice.toFixed(3);
}




function validOtp(otp) {

    if (typeof otp !== "string") {
        return "Invalid";
    }

    if (otp.length !== 8 || !otp.startsWith("ph-")) {
        return false;
    }

    return true;
}


function finalScore(omr) {

    if (typeof omr !== "object" || omr === null) {
        return "Invalid";
    }

    const { right, wrong, skip } = omr;

    if (
        typeof right !== "number" ||
        typeof wrong !== "number" ||
        typeof skip !== "number"
    ) {
        return "Invalid";
    }

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    const mark = right - (wrong * 0.5);

    return Math.round(mark);
}

function gonoVote(votes){

    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let haCount = 0
    let naCount = 0

    for(const v of votes){

        if(v === "ha"){
            haCount++
        }
        else if(v === "na"){
            naCount++
        }
    }

    if(haCount > naCount){
        return true
    }

    if(haCount === naCount){
        return "equal"
    }

    return false
}

function analyzeText(str) {

    if (typeof str !== "string") {
        return "Invalid";
    }

    if (str.trim().length === 0) {
        return "Invalid";
    }

    const words = str.split(" ")

    let longest = words[0]

    for (const w of words) {
        if (w.length > longest.length) {
            longest = w
        }
    }

    const token = words.join("").length;

    return {
        longwords: longest,
        token: token
    }
}
