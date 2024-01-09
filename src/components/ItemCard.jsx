import { showFormattedDate } from "../utils/data";

// eslint-disable-next-line react/prop-types
export default function ItemCard({ title, createdAt, body }) {
  const formattedDate = showFormattedDate(createdAt);
  return (
    <div className="card-item">
      <h3 className="card-item__title">{title}</h3>
      <p className="card-item__createdAt">{formattedDate}</p>
      <p className="card-item__body">{body}</p>
    </div>
  );
}
