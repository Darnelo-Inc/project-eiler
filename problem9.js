
let n1, m1

for (let n = 1; n < 500; n++) {
    for (let m = n + 1; m < 500; m++) {
        if (m**2 + m*n === 500) {
            console.log(m,n)
            n1 = n
            m1 = m
        }
    }
}

let a = m1**2 - n1**2
let b = 2*m1*n1
let c = m1**2 + n1**2

console.log(a*b*c)
