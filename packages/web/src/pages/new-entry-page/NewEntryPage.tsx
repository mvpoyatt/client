import React from 'react';

export default class NewEntryPage extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 'Type new entry here'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event: any) {
    alert("User submitted");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New Entry:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}