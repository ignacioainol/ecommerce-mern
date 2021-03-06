import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Ignacio',
            email: 'iggnaxios@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        },
    ],
    products: [
        {
            name: 'Whisky Johnnie Walker Double Black 750cc 40º alc',
            slug: 'whisky-johnnie-walker-double-black',
            image: '/images/3796f336-b816-4797-99b7-7a94c7bc839e-lg.jpg',
            brand: 'Johnnie Walker',
            category: 'Whisky',
            rating: 4,
            numReviews: 10,
            description: 'Un giro interesante en Johnnie Walker Black Label, Double Black se lanzó para su lanzamiento general en 2011 después de un exitoso lanzamiento en viajes minoristas. Double Black se suma al perfil normal de Black Label al incluir más whisky Islay y barriles que han sido carbonizados, dando un sabor más intenso con un mayor énfasis en el humo mientras se mantiene fiel al estilo sofisticado de Johnnie Walker.',
            price: 30000,
            countInStock: 10,
        },
        {
            name: 'Whisky Chivas Regal 12 años 750cc 40º alc',
            slug: 'whisky-chivas-regal-12-anos',
            image: '/images/0f1f439e-3b6b-47f3-acde-e0870a7b6334-lg.jpg',
            brand: 'Chivas Regal',
            category: 'Whisky',
            rating: 4,
            numReviews: 10,
            description: 'Chivas Regal 12 es una mezcla de muchos whiskys escoceses de malta y grano, madurados durante al menos 12 años. Esta mezcla rica y suave combina el estilo con la sustancia y la tradición.',
            price: 25990,
            countInStock: 10,
        },
        {
            name: 'Whiskey Jack Daniels Old N7 750cc 40º alc',
            slug: 'whiskey-jack-daniels-old-n7-750cc',
            image: '/images/91c5e655-682e-4bd9-9e2f-373f9e29026e-lg.jpg',
            brand: 'Jack Daniels',
            category: 'Whisky',
            rating: 4,
            numReviews: 10,
            description: 'El original coloso fácil de recolectar, el Jack Daniels No. 7 manda una legión de admiradores en todo el mundo, gracias a la dulce suavidad impartida por el Proceso del condado de Lincoln, que suaviza el espíritu antes de la maduración.',
            price: 22990,
            countInStock: 10,
        },
        {
            name: 'Pisco Mistral Nobel 750cc 40º alc',
            slug: 'pisco-mistral-nobel-750cc',
            image: '/images/a8ccde8b-4587-42b1-88c2-a69377454608-lg.jpg',
            brand: 'Mistral',
            category: 'Pisco',
            rating: 4,
            numReviews: 10,
            description: 'Pisco añejado, buen aroma y sabor.',
            price: 16000,
            countInStock: 10,
        },
        {
            name: 'Pisco Mistral Selección de Barricas 700cc 40º alc',
            slug: 'pisco-mistral-seleccion-de-barricas-700cc',
            image: '/images/b070176d-7705-4091-8b3b-3ccc6ef1560b-lg.jpg',
            brand: 'Mistral',
            category: 'Pisco',
            rating: 4,
            numReviews: 10,
            description: 'Pisco Mistral Selección de Barricas es el resultado de un exhaustivo trabajo de 10 años en la búsqueda del Pisco perfecto. Tres tipos de barricas, minuciosamente seleccionadas que conforman un perfecto blend entre la frescura del clásico Raulí Chileno, la elegancia y sedosidad del Roble Francés y el carácter imponente del Roble Americano. Entre sus uvas encontramos la frutosidad de las Moscatel Rosada, el cítrico de las Moscatel de Alejandría y el anisado de las Pedro Jimenez. Pisco Mistral Selección de Barricas, un Pisco que hoy se convierte en leyenda.',
            price: 49990,
            countInStock: 10,
        },
        {
            name: 'Gin Hendricks 700cc 41,4º alc',
            slug: 'gin-hendricks-700cc',
            image: '/images/f4ec3912-4989-445b-84db-651370f0ecd4-lg.jpg',
            brand: 'Hendricks',
            category: 'Gin',
            rating: 4,
            numReviews: 10,
            description: 'Una soberbia y única ginebra rosa teñida de William Grants. Infundido con pétalos de rosa y pepino, así como los ingredientes botánicos normales, esta es una necesidad para todos los amantes de la ginebra. En verano, Hendricks hace un gin-tonic fantásticamente refrescante: servir en un vaso alto con abundante hielo y adornar con pepino cortado en rodajas finas, ¡delicioso!.',
            price: 23990,
            countInStock: 10,
        },
        {
            name: 'Licor Aperitivo Aperol 750cc 15 alc',
            slug: 'licor-aperitivo-aperol-750cc',
            image: '/images/0a542762-33a7-4d24-9e65-7d111ab4b370-lg.jpg',
            brand: 'Aperol',
            category: 'Aperitivo',
            rating: 4,
            numReviews: 10,
            description: 'El muy de moda licor aperitivo de naranja. Excelente para empezar cualquier comida o evento. ¡Lleva Champagne y prepara Aperol Spritz!.',
            price: 8990,
            countInStock: 10,
        },
        {
            name: 'Licor Aperitivo Ramazzotti Rosatto 700cc 15 alc',
            slug: 'licor-aperitivo-ramazzotti-rosatto-700cc',
            image: '/images/56089d58-f137-488c-9817-a417089f9872-lg.jpg',
            brand: 'Ramazzotti',
            category: 'Aperitivo',
            rating: 4,
            numReviews: 10,
            description: 'Rosato de Ramazzotti está hecho a base de flor de hibisco y flor de azahar, ingredientes que le dan un carácter ligero y fresco, y un delicado sabor a hierbas y frutas. Se caracteriza por su brillante color rosado, y gracias a su baja graduación alcohólica (15 ) es ideal para combinarlo con tónica o prepararlo en su versión Spritz.',
            price: 8990,
            countInStock: 10,
        },
        {
            name: 'Espumante Undurraga Brut 750cc',
            slug: 'espumante-undurraga-brut-750cc',
            image: '/images/561efc91-cb84-44f4-ae82-69da7849cbc8-lg.jpg',
            brand: 'Undurraga',
            category: 'Espumantes',
            rating: 4,
            numReviews: 10,
            description: 'Amarillo verdoso suave. Burbuja pequeña, no muy abundante. Aromas de fruta madura, simple, limpia. Boca compacta, jugosa, de leve dulzor, algo de manzana.',
            price: 4500,
            countInStock: 10,
        },
        {
            name: 'Espumante Chandon Brut 750cc',
            slug: 'espumante-chandon-brut-750cc',
            image: '/images/36eb505a-a1f5-4882-9571-8c7fb6cb7511-lg.jpg',
            brand: 'Chandon',
            category: 'Espumantes',
            rating: 4,
            numReviews: 10,
            description: 'Es un vino espumoso fresco con notas aromáticas de manzana verde, cítricos y pera, su final es seco con notas delicadas en el paladar. Elaborado con variedad Chardonnay, pinot noir y Meunier. Ideal para servir frío o como base de un cóctel.',
            price: 4500,
            countInStock: 10,
        }
    ]
}

export default data;


