//core module
const path = require('path');

//external module
const express = require("express");

//local modules
const {homeRouter} = require('./routes/homeRoutes');
const {storeRouter} = require('./routes/storeRoutes');
const {adminRouter} = require('./routes/adminRoutes');

const {pageNotFound} = require('./controllers/errors');

const PORT = 6001;

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

//common middleware
app.use((req, res, next)  => {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded());

//home
app.use(homeRouter);
app.use('/store', storeRouter);
app.use('/admin', adminRouter);

app.use((req, res, next) => {
    console.log("Last middleware");
})

app.use(pageNotFound);


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
}) 