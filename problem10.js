
const N = 2*10**6

let sieve = new Array()
sieve.length = N
sieve.fill(0)

for (let i = 2; i*i <= N; i++) {
    if (sieve[i] === 0) {
        for (let k = i*i; k <= N; k += i) {
            sieve[k] = 1
        }
    }
}

//console.log(sieve)

let primeNums = new Array()

Object.keys(sieve).forEach((key) => {
    if (!sieve[key]) {
        primeNums.push(Number(key))
    }
})

//console.log(primeNums)

primeNums.shift()
primeNums.shift()

//console.log(primeNums)

let ans = 0

Object.values(primeNums).forEach ((value) => ans += value)

console.log(ans)
