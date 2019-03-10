import React from "react";

import css from "./Inventory.module.css";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imageUrl: "",
      price: "",
      stock: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <div className={css.row}>
            <input
              required
              className={css.input}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
            />
            <input
              required
              className={css.input}
              name="price"
              placeholder="Price"
              onChange={this.handleChange}
              value={this.state.price}
              type="number"
            />
            <input
              required
              className={css.input}
              name="stock"
              placeholder="Stock"
              onChange={this.handleChange}
              value={this.state.stock}
              type="number"
            />
          </div>
          <input
            required
            className={css.input}
            name="imageUrl"
            placeholder="Image"
            onChange={this.handleChange}
            value={this.state.imageUrl}
            type="text"
          />
          <textarea
            required
            className={css.input}
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
            value={this.state.description}
            type="text"
          />
          <button className="button" type="submit">
            + Add New Item
          </button>
        </form>
        <button className="button" onClick={this.props.onLoadClick}>
          Load Sample Data
        </button>
      </div>
    );
  }
}

export default Inventory;
