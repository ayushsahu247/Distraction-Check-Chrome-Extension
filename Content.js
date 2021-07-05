alert('Sure you wanna do this?');
	x = Math.floor(Math.random() * 1000);
	y = Math.floor(Math.random() * 1000);
	let pass = prompt(`What is ${x} + ${y} ?`);
	while(pass != x+y){ prompt(`What is ${x} + ${y} ?`); }
    alert('You can proceed.');
