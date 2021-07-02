import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', names: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
        names: this.state.names.concat(this.state.value)
    })
  
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h4>Lisää nimiä tai jotain</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      {this.state.names.map((name, i) => <li key={i}>{name}</li>)}
      </div>
    );
  }
}

export default NameForm;