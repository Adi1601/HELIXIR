
const express = require("express")
require('dotenv').config({path: "./.env"});
//Enable CORS - mechanism that allows restricted resources to be requested from another domain 
const cors = require("cors")

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const portTele = process.env.PORT2 || 6000;


const app = express();
const server = require("http").createServer(app);


const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.HELIXIR_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));


app.get('/', (req, res) => {
	res.send('Running');
});

const userRouter = require ('./routes/auth');
app.use('/users', userRouter);

const doctorRouter = require ('./routes/doctors');
app.use('/doctors', doctorRouter);

const appointmentRouter = require('./routes/appointment');
app.use('/appointment', appointmentRouter);

const reviewRouter = require('./routes/review');
app.use('/review', reviewRouter);

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});

server.listen(portTele, () => console.log(`Server is running on port ${portTele}`));

module.exports =  app