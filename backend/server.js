import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connected to db')
}).catch(err => {
    console.log(err.message)
})

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find(x => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(400).send({
            message: 'Product doesn\'t exists'
        });
    }
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(400).send({
            message: 'Product doesn\'t exists'
        });
    }
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})