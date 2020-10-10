const server = require('express').Router();


const { Product, Category, productCategory } = require('../db.js');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

//======================================================================== 
//	Ruta para devolver todos los productos y sus categorias asociadas
//======================================================================== 

server.get('/products', (req, res, next) => {
	Product.findAll({
		include: { model: Category }
	})
		.then(products => {
			if(!products) {
				return res.send('<h1>No hay prooductos cargados</h1>')
			}
			res.json(products);
		})
		.catch(err => {
			console.log(err);
			next()
		});
});

//=============================================
//  Obtener un producto por id (unico) 
//=============================================

server.get('/products/:id', (req, res, next) => {	
	const { id } = req.params;
	Product.findOne({
		where: {
			id
		},
		include: { model: Category }
	})
		.then(product => {
			if(!product) {
				return res.send('<h1>No se encontro producto</h1>')
			}
			res.status(200).json(product);
		})
		.catch(error => {
			res.status(404).send('<h1>error...product not found</h1>')
		})
})

//==========================================================
//	Ruta para agregar nueva categoría a un producto
//==========================================================

server.post('/products/:idProducto/category/add', (req,res,next) => {

	const { idProducto } = req.params;
	const { categoryId } = req.body;

	if (typeof categoryId !== "number") {
		return res.status(401).send('Categoria debe ser un valor numerico');
	}

	Product.findOne({
		where: {
			id: idProducto 
		},
		include: [{ model: Category }]
	}).then(response => {
		if(!response) {
			return res.status(404).end()
		}
		let prod = response;
		prod.addCategories([categoryId])
		res.status(200)
	}).catch(err => {
		console.log(err)
		return res.status(404).end()
	})
	res.end()
})


//==============================================
//	Ruta para eliminar categoría de un producto
//==============================================

server.delete('/products/:idProducto/category/delete', (req,res,next) => {

	const { idProducto } = req.params;
	const { categoryId } = req.body;

	if (typeof categoryId !== "number") {
		return res.status(400).send('Categoria debe ser un valor numerico');
	}

	Category.findOne({
		where: {id: categoryId},
		include: [{model: Product, where: {id: idProducto}}]
	}).then(response => {
		if(!response === null) {
			return res.status(404).end()
		}
		let categ = response;
		categ.destroy();  
		res.status(200)
	}).catch(err => {
		console.log(err)
		return res.status(404).end()
	})
	res.end()
})

//==============================================
//	Busca un producto por nombre o descripcion.
//============================================== 
server.get('/search', (req, res, next) => {
	const { product } = req.query;
	Product.findAll({
		where: {
			[Op.or]: [
			{
				name: { 
					[Op.iLike]: '%' + product + '%'}
			},
			{
				description: {
					[Op.iLike]: '%' + product + '%'
				}
			}]
		}
	})
		.then(product => {
			res.json(product)
		})
		.catch(error => {
			res.status(404).send('Producto no encontrado')
		});
});

//=========================================================
//	Ruta para devolver todos los productos de X categoria.
//============================================== ==========
server.get('/products/category/:categoryName', (req, res, next) => {
	Product.findAll({
		include: {
			model: Category,
			where: {name: req.params.categoryName}
		}
	}).then(result => {
		if(!result.length) return res.status(400).send('<h1>NOT FOUND!</h1>')
		res.status(200).send(result);
		return
	}).catch(err => {
		res.status(404).end();
		return
	})
});

//==============================================
//	Ruta para crear/agregar un producto.
//============================================== 
//recordar que la categoría a recibir por body debe ser un id correspondiente a una categoria creada
//pendiente validar un handler error si se le pasa un id de una categoria invalida
server.post('/products', (req, res, next) => {
	const {name, description, price, availability, stock, quantity, image, categories} = req.body;
	console.log(categories)
	if(!name || !description || !price || !availability || !stock ) {
    return res.sendStatus(400);
  }
  Product.create(req.body).then(createdProduct => {
		createdProduct.setCategories(categories);
	}).then(()=> {
		return res.status(201).send(req.body);
	}).catch(err => {
		return res.end();
	});
});

//==============================================
//	Ruta para modificar un producto.
//============================================== 
server.put('/products/:id', (req, res, next) => {

	//revisar este codigo, se deberia poder modificar un producto sin necesidad dem andar toda esa info validadora dentro del if

	const {name, description, price, availability, stock, quantity, image, categories} = req.body;
	// if(!name || !description || !price || !availability || !stock || !image) {
 //    return res.sendStatus(400);
 //  }

  Product.update(req.body, {
  	where: {id: req.params.id}
  }).then(result => {
  	if (result[0] === 0) {
  		return res.sendStatus(404);
  	}
  	return Product.findByPk(req.params.id) //buen workarround!
  }).then(modifiedProduct => {
  	modifiedProduct.setCategories(categories);
  	res.sendStatus(200);
  }).catch(err => {
  	return res.end()
  });
});

//==============================================
//	Ruta para eliminar un producto.
//============================================== 
server.delete('/products/:id', (req, res, next) => {
  Product.destroy({
  	where: {id: req.params.id}
  }).then(deletedProduct => {
  	res.sendStatus(200);
  }).catch(err => {
  	return res.end()
  });
});

module.exports = server;
