const express = require('express')



const app = express(); 
const PORT = 4000; 
app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send("Welcome to sreeshma server")
})

app.get('/another',(req,res)=>{
    res.status(200).send("Welcome to another server")
})



app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running , and App is listening to port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
