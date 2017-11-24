const
	server = require('express')(),
	ReactDOM = require('react-dom/server'),
	App = require('./src/App');

server.get('', (req,res)=>{
	// const componentHTML = ReactDOM.renderToString(<App />);
	// console.log(ReactDOM);
	res.send('Hello world!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>{
	console.log(`Example server listening on port ${PORT}!`);
});