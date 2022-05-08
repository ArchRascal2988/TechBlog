const path= require("path");
const express= require("express");
const exphbs= require("express-handlebars");
const session= require("express-session");
const timestamps = require("./utils/helper");
const {User, Post, Comment}= require("./models/index")


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/config");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    secret: "Nobodyknos",
    cookie:{expires: 1000*60*5},
    resave: false,
    saveUntilInitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ timestamps });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
