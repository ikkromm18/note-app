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
    const inputTitle = event.target.value;
    const trimmedTitle = inputTitle.slice(0, 50);

    this.setState({
      title: trimmedTitle,
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
    const { title, body } = this.state;
    const titleCount = title.length;

    return (
      <>
        <div>
          <p>Sisa Karakter: {titleCount}/50</p>
        </div>
        <form className="add-notes__form" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Masukkan Judul Catatan..."
            className="add-notes__title"
            value={title}
            onChange={this.onTitleChangedEventHandler}
          />
          <textarea
            className="add-notes__body"
            placeholder="Masukkan Isi Catatan..."
            value={body}
            onChange={this.onBodyChangedEventHandler}
          />
          <button type="submit" className="btn-submit">
            Tambah Catatan
          </button>
        </form>
      </>
    );
  }
}
