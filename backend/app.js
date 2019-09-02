const express = require('express');
const builder = require('./scp_builder.js');

const app = express();

app.get('/newscp', (req, res) => {
	const scp = builder.get_new_scp();
	res.status(200).send(scp);
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});