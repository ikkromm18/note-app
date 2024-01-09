/* eslint-disable react/prop-types */
import ItemCard from "./ItemCard";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

export default function NotesCard({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className="notes-card">
      <ItemCard title={title} createdAt={createdAt} body={body} />
      <div className="btn">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
}
