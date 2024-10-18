import './skeleton.scss';

const Skeleton = () => {
  return (
    <ul className="skeleton__list">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className="skeleton__item">
          <div className="skeleton__img skeleton-animation" aria-label="Loading avatar"></div>
          <div className="skeleton__name skeleton-animation" aria-label="Loading name">
            <div
              className="skeleton__position skeleton-animation"
              aria-label="Loading position"
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skeleton;
