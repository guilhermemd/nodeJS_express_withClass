const express = require('express');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
const productsModel = require('./controllers/routes/products');

app.use('/products', productsModel);
const PORT_DEFAULT = 3000;
const PORT = PORT_DEFAULT;

app.listen(PORT, () => {
  console.log('Servidor Online');
});
