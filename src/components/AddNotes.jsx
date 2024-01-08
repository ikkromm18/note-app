/* eslint-disable react/prop-types */
import React from "react";

export default class AddNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      createdAt: new Date().toISOString,
      archived: false,
    };

    this.onTitleChangedEventHandler =
      this.onTitleChangedEventHandler.bind(this);
    this.onBodyChangedEventHandler = this.onBodyChangedEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangedEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangedEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.AddNotes(this.state);
  }

  render() {
    return (
      <form className="add-notes__form" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Masukkan Judul Catatan..."
          className="add-notes__title"
          value={this.state.title}
          onChange={this.onTitleChangedEventHandler}
        />
        <textarea
          className="add-notes__body"
          placeholder="Masukkan Isi Catatan..."
          value={this.state.body}
          onChange={this.onBodyChangedEventHandler}
        />
        <button type="submit" className="btn-submit">
          Tambah Catatan
        </button>
      </form>
    );
  }
}
