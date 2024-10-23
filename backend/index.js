import express from 'express';
import morgan from 'morgan';

// una API RESTful es un7 servidor web que xontesta con JSON a peticiones y opera sobre una base de datos
//CRUD: Create Read Update Delete
//Se asocian con estos metodos: POST, GET, PUT o PATCH, DELETE

let db = [
  
  { name: 'banana', price: 500}
  { name: 'banana', price: 500}
]

const app = express();

app.use(morgan(dev));
app.use(express.json());t

app.get('/api/frutas', (req, res) => {
  res.status(200).json(db);
});



app.post('/api/frutas', (req, res) => {
  const { name,  price} = 
  db.push(nuevaFruta);
  res.status(201).json(nuevaFruta);
};


app.listen(3000);
