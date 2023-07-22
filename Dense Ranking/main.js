const readline = require("readline")
function denseRanking(others, gits){
    others.sort((a, b) => b - a)
    let ranks = {}
    let rankCount = 1
    for(let number of others){
        if(!(number in ranks)){ 
            ranks[number] = rankCount
            rankCount++
        }
    }
    let gitsRank = []
    let values = Object.keys(ranks).map(v => parseInt(v)).sort((a, b) => b - a)
    for(let git of gits){
        if(git in ranks){
            gitsRank.push(ranks[git])
            continue
        }else{
            if(git > parseInt(values[0])){
                gitsRank.push(1)
                continue
            }
            if(git < parseInt(values[values.length-1])){
                gitsRank.push(ranks[values[values.length-1]]+1)
                continue
            }
            for(let i = 0; i < values.length-1; i++){
                if(parseInt(values[i]) > git && git > parseInt(values[i+1])){
                    gitsRank.push(ranks[values[i]] + 1)
                    break
                }
            }
        }
    }
    return gitsRank
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", othersCount => {
    rl.question("", othersValue => {
        rl.question("", gitsCount => {
            rl.question("", gitsValue => {
                othersInteger = []
                gitsInteger = []
                for(let other of othersValue.split(" ")){
                    othersInteger.push(parseInt(other))
                }
                for(let git of gitsValue.split(" ")){
                    gitsInteger.push(parseInt(git))
                }
                console.log(denseRanking(othersInteger, gitsInteger).join(" "))
            })
        })
    })
})