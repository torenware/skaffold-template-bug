const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const see_me = process.env.SEE_MY_ARG;
	const value = see_me || 'NULL!';
  res.send(`See Me: ${see_me}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
	//const see_me = process.env.
  const see_me = process.env.SEE_MY_ARG;
	const value = see_me || 'NULL!';
  console.log('The variable is set to', value);
})
