log = console.log;
// rand = () => Math.floor( Math.random() * (99-10)+10 )
// nums = [...Array(40)].map(i=>rand()).sort((a,b)=>a-b).filter((v,i,a)=>a.indexOf(v)===i)
nums = [12, 14, 15, 17, 18, 19, 19, 21, 28, 29, 30, 30, 31, 32, 34, 34, 36, 39, 43, 44, 48, 48, 48, 51, 52, 58, 60, 61, 67, 68, 69, 73, 73, 75, 87, 89, 94, 95, 96, 98];

/* desired output: (ranges of -5 to +5)
	[12, 14, 15, 17]
	[18, 19, 19, 21]
	[28, 29, 30, 30, 31, 32]
	[34, 34, 36, 39]
	[43, 44, 48, 48, 48]
	[51, 52]
	[58, 60, 61]
	[67, 68, 69]
	[73, 73, 75]
	[87, 89]
	[94, 95, 96, 98]
*/

function getRanges(nums=[], diff=1, percent=true) {
	nums.sort((a,b) => a-b);
	
	const ranges = [];
	for (let i=0; i<nums.length; i+=1) {
		const num = nums[i];
		const _diff = percent ? perc(diff, num) : diff;
		const range = nums.filter( j => isInRange(j, num-_diff, num+_diff) );
		if (range.length) {
			ranges.push(range);
			nums = nums.slice(range.length);
			i = -1;
		}
	}
	return ranges;
}

function perc(percent, n) {
	return n * (percent * 0.01);
}
function isInRange(n, min, max) {
	return n >= min && n <= max;
}
//--------------------------------------------------------------------------------------------------------
/* using splice (broken)

const ranges = []
list.sort((a,b)=>a-b).forEach((v,i,a) => {
	const range = a.filter( j => isInRange(j, v-5, v+5) );
	if (range.length) {
		ranges.push(range);
		a.splice(a.findIndex(j=>j===range[0]), range.length);
		log(range);
		log(a);
	}
})
*/