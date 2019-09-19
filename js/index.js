const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  gettingDressed();
});

function gettingDressed() {
	const actions = {
		1: 'hat',
		2: 'pants',
		3: 'shirt',
		4: 'shoes',
		5: 'socks',
		6: 'leave'
	};

	const isFail = (currVal) => {
		const required = Object.keys(actions).slice(1, -1);

		return !Object.keys(actions).includes(currVal) || 
				(actions[currVal] === 'hat' && !result.includes('shirt')) || 
				(actions[currVal] === 'shoes' && !(result.includes('pants') && result.includes('socks'))) || 
				(actions[currVal] === 'leave' && required.some(el => !splitted.includes(el)));
	}

	const input = document.getElementById("input").value;

	const splitted = input.split(' ').filter(Boolean);
	let result = [];
	for (let el of splitted) {
		if (isFail(el)) {
			result.push('fail');
			break;
		} else if (el === '6') {
			result.push('leave');
			break;
		}
		result.push(actions[el]);
	};

	if (!['leave', 'fail'].includes(result[result.length - 1])) result.push('fail');

	document.getElementById("result").value = result.join(', ');
}
