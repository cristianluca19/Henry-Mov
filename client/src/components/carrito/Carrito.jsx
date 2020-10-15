
import React, { useEffect, useState } from 'react';
import './Carrito.css';

export default function Carousel() {
    return (
        <div>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">SU CARRITO HENRY MOV</h1>
                </div>
            </section>

            <div className="container mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">ProductO</th>
                                        <th scope="col">Diponible</th>
                                        <th scope="col" className="text-center">Cantidad</th>
                                        <th scope="col" className="text-right">Precio</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                        <td>Product Name Dada</td>
                                        <td>En stock o no</td>
                                        <td><input className="form-control" type="text" value="1" /></td>
                                        <td className="text-right">$ 124,90 </td>
                                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                        <td>Nombre del Producto</td>
                                        <td>En stock o no</td>
                                        <td><input className="form-control" type="text" value="1" /></td>
                                        <td className="text-right">$ 33,90 </td>
                                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                        <td>Product Name Titi</td>
                                        <td>En stock o no</td>
                                        <td><input className="form-control" type="text" value="1" /></td>
                                        <td className="text-right">$ 70,00 </td>
                                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Sub-Total</td>
                                        <td className="text-right">$ 255,90 </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Envio</td>
                                        <td className="text-right">$ 6,90 </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Total</strong></td>
                                        <td className="text-right"><strong>$ 346,90 </strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="row">
                            <div className="col-sm-12  col-md-6">
                                <button className="btn btn-block btn-light">Continuar comprando</button>
                            </div>
                            <div className="col-sm-12 col-md-6 text-right">
                                <button className="btn btn-lg btn-block btn-success text-uppercase">Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 bg-dark">
                            <h5>About</h5>
                            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                            <p className="mb-0">
                                Somos un grupo de estudiantes de Henry dispuestos a dar todo de cada uno para mejorar el futuro nuestro y del mundo
                </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto bg-dark">
                            <h5>Informations</h5>
                            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                            <ul className="list-unstyled">
                                <li><a href="">Link 1</a></li>
                                <li><a href="">Link 2</a></li>
                                <li><a href="">Link 3</a></li>
                                <li><a href="">Link 4</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto bg-dark">
                            <h5>Others links</h5>
                            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                            <ul className="list-unstyled">
                                <li><a href="">Link 1</a></li>
                                <li><a href="">Link 2</a></li>
                                <li><a href="">Link 3</a></li>
                                <li><a href="">Link 4</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 bg-dark">
                            <h5>Contact</h5>
                            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                            <ul className="list-unstyled">
                                <li><i className="fa fa-home mr-2"></i> My company</li>
                                <li><i className="fa fa-envelope mr-2"></i> email@example.com</li>
                                <li><i className="fa fa-phone mr-2"></i> + 33 12 14 15 16</li>
                                <li><i className="fa fa-print mr-2"></i> + 33 12 14 15 16</li>
                            </ul>
                        </div>
                        <div className="col-12 copyright mt-3">
                            <p className="float-left">
                                <a href="#">Back to top</a>
                            </p>
                            <p className="text-right text-muted">created with <i className="fa fa-heart"></i> by <a href="https://t-php.fr/43-theme-ecommerce-bootstrap-4.html"><i>Henry</i></a> | <span>Group 05</span></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}