
const app = require ('./server');
const userRouter = require ('./routes/auth');

app.use('./users', userRouter);