const readline = require("readline")
function isBalanced(brackets){
    stack = []
    openingBracket = "({["
    closingBracket = ")}]"
    pairBracket = {')': '(', '}': '{', ']': '['}

    for(let bracket of brackets){
        if(openingBracket.includes(bracket)) stack.push(bracket)
        if(closingBracket.includes(bracket)) if(!stack.length || pairBracket[bracket] !== stack.pop()) return false
    }
    return stack.length === 0
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", ans => {
    console.log(isBalanced(ans) ? "YES" : "NO")
})