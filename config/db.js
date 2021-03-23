const moongose = require('mongoose');
const URI = process.env.DATABASE_URI;
moongose.Promise = global.Promise;

moongose
  .connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((e) => console.log(e));