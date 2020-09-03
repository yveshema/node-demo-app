const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.set('port', process.env.PORT || 333000);

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(app.get('port'), () => {
	console.log(`Demo server listening on port ${app.get('port')}`);
});


app.post('/add', (req, res) => {
	let numA, numB, sum;
  try {
		numA = parseInt(req.body.numA);
		numB = parseInt(req.body.numB);
		if (isNaN(numA) || isNaN(numB)) {
			throw new Error('Invalid input');
		}
		sum = numA + numB;
		res.status(200).send({ input: [numA, numB], sum: sum });
	} catch(err){
		res.status(500).send({ error: err.message });
	}
});
