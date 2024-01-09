/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import NotesCard from "./NotesCard";

export default function ListNotes({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter((note) => !note.archived);

  return (
    <div className="list-notes">
      {activeNotes.length > 0 ? (
        activeNotes.map((note) => (
          <NotesCard
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            archived={note.archived}
            {...note}
          />
        ))
      ) : (
        <p>Tidak ada catatan</p>
      )}
    </div>
  );
}
