const express = require('express');
const builder = require('./scp_builder.js');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/newscp', (req, res) => {
	const scp = builder.get_new_scp();
	res.status(200).send(scp);
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});