export const primeFactors = (n) => {
	n=parseInt(n, 10);
	const r = [];
	for (let i = 2; i <=n; i++)
		if(n % i==0) r.push(i), n = n / i, i = 1;
	return r;
}