const express = require('express');
//const bodyParser = require('body-parser');
const url = require('url');

const app = express();
// app.use(bodyParser.json());

app.use(express.static(__dirname));

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(app.get('port'), () => {
	console.log(`Demo server listening on port ${app.get('port')}`);
});


app.get('/result', (req, res) => {
	let numA, numB, result;
	const params = url.parse(req.url, true).query;
  	try {
			numA = parseInt(params.numA);
			numB = parseInt(params.numB);

			result = numA / numB;
			res.status(200).send({ input: [numA, numB], result: result });
		} catch(err){
			res.status(500).send({ error: err.message });
		}
});
