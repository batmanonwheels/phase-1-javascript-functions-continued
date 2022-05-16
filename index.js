// function saturdayFun(act = "roller-skate") {
//     const saturdayInner = "This Saturday, I want to";
//     return function() {
//             return `${part1} ${act}!`
//     };
// };
// console.log(saturdayFun())
function saturdayFun(act = 'roller-skate') {
    const part1 = 'This Saturday, I want to';
    const innerFunction = function() {
        return`${part1} ${act}!`
    };
    return innerFunction();
};

function mondayWork(work = "go to the office") {
    const part1 = "This Monday, I will"
    const innerFunction = function () {
        return `${part1} ${work}.`
    };
    return innerFunction()
}

function wrapAdjective(flair = "*") {
    const part1 = "You are"
    return function (adj = "special") {
        return `${part1} ${flair}${adj}${flair}!`
    }
    // return innerFunction()
}

console.log(wrapAdjective())