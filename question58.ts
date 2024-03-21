/* Average Score Calculator: Write a simple program that can take lots of scores and find their average. */

function averageScore(...scores: number[]) : number{
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total/scores.length
} 
console.log(averageScore(80, 45, 90, 50, 60,72));
