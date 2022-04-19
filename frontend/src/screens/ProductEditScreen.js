import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Store } from '../Store'
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const ProductEditScreen = () => {
    const params = useParams();
    const { id: productId } = params; // /product/:id
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [{ loading, error }, dispatch] = useReducer(reducer, {
        loading: true,
        error: ''
    });

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get(`/api/products/${productId}`);
                const { name, slug, price, image, category, countInStock, brand, description } = data;
                setName(name);
                setSlug(slug);
                setPrice(price);
                setCategory(category);
                setImage(image);
                setCountInStock(countInStock);
                setBrand(brand);
                setDescription(description);
                dispatch({ type: 'FETCH_SUCCESS' });
            } catch (error) {
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: getError(error)
                })
            }
        }

        fetchData();
    }, [productId])


    return (
        <Container className="smaill-container">
            <Helmet>
                <title>Editar Producto ${productId}</title>
            </Helmet>

            <h1>Editar Producto ${productId}</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <Form>
                    <Form.Group className='mb-3' controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="slug">
                        <Form.Label>Slug</Form.Label>
                        <Form.Control
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="price">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="image">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="category">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="brand">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="countInStock">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            value={countInStock}
                            onChange={(e) => setCountInStock(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>
                    <div className="mb-3">
                        <Button type="submit">
                            Actualizar
                        </Button>
                    </div>
                </Form>
            )

            }
        </Container>
    )
}
