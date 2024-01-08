// eslint-disable-next-line no-unused-vars
import React from "react";
import { getInitialData } from "../utils/data";
import ListNotes from "./ListNotes";
import HeaderNotes from "./HeaderNotes";
import AddNotes from "./AddNotes";
import ArchivedNotes from "./ArchivedNotes";

class AppNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onActiveNotesHandler = this.onActiveNotesHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString,
            archived: false,
          },
        ],
      };
    });
    console.log(this.state.notes);
  }

  onDeleteNotesHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNotesHandler(id) {
    const Archivednotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });
    this.setState({ notes: Archivednotes });
    console.log(this.state.notes);
  }

  onActiveNotesHandler(id) {
    const Archivednotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.setState({ notes: Archivednotes });
  }

  render() {
    return (
      <div className="app-notes">
        <HeaderNotes />
        <h1 className="list-notes__title">Tambah Catatan</h1>
        <AddNotes AddNotes={this.onAddNotesHandler} />
        <h1 className="list-notes__title">Catatan Aktif</h1>
        <ListNotes
          notes={this.state.notes}
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onArchiveNotesHandler}
        />
        <h1 className="list-notes__title">Catatan Diarsipkan</h1>
        <ArchivedNotes
          notes={this.state.notes}
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onActiveNotesHandler}
        />
      </div>
    );
  }
}

export default AppNotes;
