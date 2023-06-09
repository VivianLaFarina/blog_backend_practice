require('dotenv').config();
const { db } = require('./database/config');
const app = require('./app');

db.authenticate()
  .then(() => console.log('Database authenticated 👩🏻‍🏭'))
  .catch((err) => console.log(err));

db.sync({ force: true })
  .then(() => console.log('Database Synced 👩🏻‍🏭'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🌻`);
});
