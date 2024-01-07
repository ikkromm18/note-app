/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import NotesCard from "./NotesCard";

export default function ListNotes({ notes }) {
  return (
    <div className="list-notes">
      {notes.map((note) => (
        <NotesCard key={note.id} {...note} />
      ))}
    </div>
  );
}
