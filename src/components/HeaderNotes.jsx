// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchNotes from "./SearchNotes";

export default function HeaderNotes() {
  return (
    <div className="header-notes">
      <h1 className="header-notes__title">My Notes</h1>
      <SearchNotes />
    </div>
  );
}
