let ans = 1

const N = 20

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

for (let i = 0; i < N; i++) {
    if (sieve[i] === 0) {sieve[i] = i}
}

//console.log(sieve)

for (let i = 0; i < sieve.length; i++) {
    if (sieve[i] === 0 || sieve[i] === 1) {sieve.splice(i,1)}
}

//console.log(sieve)

for (let i = 0; i < sieve.length; i++) {
    if (sieve[i] === 0 || sieve[i] === 1) {sieve.splice(i,1)}
}

//console.log(sieve)

const L = sieve.length
let maxi = new Array(L)
maxi.fill(0)

//console.log(maxi)
//console.log(sieve)

for (let i = 0; i < L ; i++) {
    for (let j = 1; j <= N; j++) {
        let count = 0
        let j_copy = j

        while (j_copy >= sieve[i]) {
            j_copy = Math.floor(j_copy/sieve[i])
            count +=1
            console.log("Hi")
        }

        maxi[i] = Math.max(maxi[i], count)
    }
}

console.log("Maxi", maxi)
console.log("Sieve", sieve)

for (let i = 0; i < L; i++) {
    ans *= (sieve[i]**maxi[i])
}

console.log(ans)
console.log(232792560)

