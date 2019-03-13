import React from "react";

import css from "./StoreSelector.module.css";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState(() => ({
            value: value
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push(`/store/${this.state.value}`);
    };

    render() {
        const { value } = this.state;
        return (
            <div className={css.container}>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <input
                        className="input"
                        value={value}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Store, e.g. Birmingham"
                    />
                    <button className="button" type="submit">
                        Go To Store
                    </button>
                </form>
            </div>
        );
    }
}

export default Homepage;
