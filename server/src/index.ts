import app from './app';

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
