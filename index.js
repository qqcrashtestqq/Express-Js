const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

// routs home page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Главная страница',
    isHome: true
  });
});

// routs page courses
app.get('/courses', (req, res) => {
  res.render('courses', {
    title: 'Страница с курсами',
    isCourses: true
  });
});

//routs page add courses
app.get('/add', (req, res) => {
  res.render('add', {
    title: 'Добавить курс',
    isAdd: true
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT }`);
});

