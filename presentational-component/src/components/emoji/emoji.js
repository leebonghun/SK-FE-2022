import './emoji.css';

export const Emoji = ({ image, label }) => {
  return (
    <figure className="emoji">
      <img
        src={`${process.env.PUBLIC_URL}/assets/${image}`}
        alt={label}
        title={label}
      />
    </figure>
  );
};
