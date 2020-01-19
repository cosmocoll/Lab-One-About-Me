// check if Yes or Y

function isYes(checkText) {

    checkText = checkText.toLowerCase();
    
    if (checkText === 'yes') {
        return true;
    }
    else if (checkText === 'y') {
        return true;
    }
    else {
        return false;
    }
}

export default isYes;