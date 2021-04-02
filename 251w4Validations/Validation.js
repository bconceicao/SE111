//Email specs: slambert@neit.edu
// Have 1 and only 1 @ (8)
// Atleast 1 char before the @
// 1 or more periods, we will focus on the last period (13)        
// at least 1 char for the domain (chars between the @ and last period)
//at least 2 chars after the last period  (Length: 16)

function IsValidEmail(strEmail) {

    results = true;         //Initialize results

    atPos = strEmail.indexOf("@", 0);   //Should return position or -1

    //If not found or first char
    if (atPos == -1 || atPos < 1) {
        results = false;
    }

    //If we find another @, we have an issue
    atPos2 = strEmail.indexOf("@", (atPos +1))
    if (atPos2 > -1) {
        results = false;
    }

    //Find the last Period
    lastPeriodPos = strEmail.indexOf(".", 0);
    if (lastPeriodPos == -1) {
        results = false;
    }

    tLastPeriodPos = lastPeriodPos;

    //while loop to continue finding periods until there are no more
    while (tLastPeriodPos > -1) {
        tLastPeriodPos = strEmail.indexOf(".", (tLastPeriodPos + 1))    //Look for next period
        //If we find another period, store its position
        if (tLastPeriodPos > -1) {  
            lastPeriodPos = tLastPeriodPos;
        }
    }


    //Is there at least one char between the @ and the last period
    if ((lastPeriodPos - atPos) < 2) {
        results = false;
    }

    alert("Last Period: " + lastPeriodPos + "  --  Length: " + strEmail.length);

    //get length of characters after the last period, make sure it >= 2
    if (strEmail.length - lastPeriodPos < 3) {
        results = false;
    }

    //We did all our tests, send the assumed results
    return results;
}



//Check for bad words
function GotBadWords(strAnything) {
    badWords = ["eli", "manning", "jets", "giants", "yankees", "messi", "eli manning", "lakers", "lebron"];

    //Assume the good
    results = false;

    //Loop thru the list of bad words and see if we find any inside the "anything" string
    for (val of badWords) {
        if (strAnything.toLowerCase().indexOf(val) > -1) {
            results = true;
        }
    }

    //Return results
    return results;

}

function StateInput(strState){
    results = true;

    if (strState.length() != 2) {
        results = false;
    }

    return results;
}

function ZipCodeInput(strZip){
    results = true;

    if (strZip.length() != 5) {
        results = false;
    }

    return results;
}

function PhoneNumInput(strPhoneNum){
    results = true;

    atPos = strPhoneNum.indexOf("-", 0);   //Should return position or -1

    //If "-" is not the 4th char, number invalid
    if (atPos != 3) {
        results = false;
    }

    //2nd "-" should be 4 chars later
    atPos2 = strPhoneNum.indexOf("-", (atPos +1))
    if (atPos2 != 3) {
        results = false;
    }

    //if another "-" is found, number invalid
    atPos3 = strPhoneNum.indexOf("-", (atPos2 +1))
    if (atPos2 > -1) {
        results = false;
    }

    //get length of characters after the last "-", should be exaclty 4
    if (strPhoneNum.length - lastPeriodPos != 3) {
        results = false;
    }

    if (strPhoneNum.length != 12) {
        results = false;
    }

    return results;
}

function HouseholdInhabInput(strHouseholdInhab){
    results = true;

    if (parseInt(strHouseholdInhab) < 1) {
        results = false;
    }

    return results;
}

function CreditInput(strCredit){
    results = true;

    if (parseInt(strCredit) < 0) {
        results = false;
    }

    return results;
}

function Answered(strName){
    
    results = true;

    if (strName.length() < 1){
        results = false;
    }

    return results;
}