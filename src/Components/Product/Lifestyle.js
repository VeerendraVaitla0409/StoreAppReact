import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import '../Product/css/style.product.css'
import { ENDPOINTS } from "../constants/urls";

export default class Lifestyle extends Component {
    constructor() {
        super();
        this.state = {
            selectedCategory: 'all',
            searchTerm: '',
            expandedDescription: {},
            productList: [],
            isLoading: true,
            filteredProducts: [],
        };
    }

    // Handle category change
    onCategoryChange = (category) => {
        this.setState({
            selectedCategory: category
        },
            () => {
                this.filteredProducts();
            }
        );

    };

    // Handle search term change
    handleSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        }, () => {
            this.filteredProducts();
        });

    };

    filteredProducts = () => {

        const { selectedCategory, searchTerm, productList } = this.state;

        let filtered = productList;

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory)
        }

        if (searchTerm) {
            filtered = filtered.filter(product => product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        }

        this.setState({
            filteredProducts: filtered
        })
    }

    renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        return '⭐'.repeat(fullStars) + '🌗'.repeat(halfStar) + '☆'.repeat(emptyStars);
    };

    toggleDescription = (productId) => {
        this.setState((prevState) => ({
            expandedDescription: {
                ...prevState.expandedDescription,
                [productId]: !prevState.expandedDescription[productId],
            },
        }));
    };

    componentDidMount() {
        axios.get(ENDPOINTS.PAGE2_URL)
            .then((response) => {
                console.log(response.data.products)
                this.setState({
                    productList: response.data.products,
                    filteredProducts: response.data.products,
                    isLoading: false
                });
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                });
                console.log("Error occurred while fetching products: " + error);
            });
    }

    render() {

        const { filteredProducts, searchTerm, isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                   <p className="fs-1"><span className='text-danger fw-bold'>Loading.....</span> </p>
                </div>
            );
        }

        return (
            <div className="container mt-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-opacity-20 rounded-3 border border-light navSearch">
                    <div className="container-fluid">
                        <ul className="navbar-nav w-100 text-start p-0">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link fw-semibold" to="#" onClick={() => this.onCategoryChange('all')}>All</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link fw-semibold" to="#" onClick={() => this.onCategoryChange("beauty")}>Beauty</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link fw-semibold" to="#" onClick={() => this.onCategoryChange('fragrances')}>Fragrances</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link fw-semibold" to="#" onClick={() => this.onCategoryChange('furniture')}>Furniture</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link fw-semibold" to="#" onClick={() => this.onCategoryChange("groceries")}>Groceries</NavLink>
                            </li>
                        </ul>

                        <form className="d-flex ms-5">
                            <input
                                className="form-control-lg me-2 border border-light rounded-3"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => this.handleSearchChange(e)}
                            />
                        </form>
                    </div>
                </nav>

                {/* Product Cards */}
                <div className="row mt-4">
                    {filteredProducts.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card shadow-lg border-light rounded-lg productImgDiv">
                                <img
                                    src={product.images[0]}
                                    className="card-img-top img-fluid rounded-top productImg"
                                    loading="lazy"
                                    alt={product.title}
                                />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title text-primary">{product.title}</h5>
                                    <p className="card-text text-muted">
                                        {this.state.expandedDescription[product.id]
                                            ? product.description
                                            : `${product.description.substring(0, 100)}...`}
                                        <NavLink to="#" className="more-desc" onClick={() => this.toggleDescription(product.id)}>
                                            {this.state.expandedDescription[product.id] ? ' Show Less' : ' More'}
                                        </NavLink>
                                    </p>

                                    <div className="d-flex align-items-center">
                                        <span className="text-warning product-rating">
                                            {this.renderStars(product.rating)}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-auto">
                                        <h5 className="text-danger product-price">₹ {Math.round(product.price * 83)}</h5>
                                        <button className="btn btn-danger px-4 py-2 w-auto add-cart" onClick={this.props.handleAddToCart}>
                                            <span className='text-white fw-bold'> Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        );
    }
}
