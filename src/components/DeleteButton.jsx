
// eslint-disable-next-line react/prop-types
export default function DeleteButton({ id, onDelete }) {
  return (
    <button className="btn-delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}
