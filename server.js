const app = require("./app");
const config = require("./app/config");

const PORT = config.app.port;
app.listen(PORT, function(){
	console.log(`Server is running on port ${PORT}.`);
});