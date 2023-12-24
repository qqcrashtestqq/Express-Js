const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const homeRouts = require('./routes/home');
const coursesRouts = require('./routes/courses');
const addRoutes = require('./routes/add');

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use('/',homeRouts);
app.use('/courses',coursesRouts);
app.use('/add',addRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT }`);
});

