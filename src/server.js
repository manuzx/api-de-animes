//ficará responsavel por criar o servidor 
const app = require("./app");

const port = 4590;

app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
})