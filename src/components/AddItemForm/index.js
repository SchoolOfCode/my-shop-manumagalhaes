import React from "react";

import css from "./AddItemForm.module.css";

class AddItemForm extends React.Component {
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
    this.setState(() => ({
      name: "",
      description: "",
      imageUrl: "",
      price: "",
      stock: ""
    }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  render() {
    return (
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
    );
  }
}

export default AddItemForm;
