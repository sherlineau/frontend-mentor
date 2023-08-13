const CategoryScore = (data) => {
  const { category, score, icon } = data.data;

  return (
    <div className={`category ${category}`}>
      <img src={icon} alt={`icon for ${category}`} />
      <h3>{category}</h3>
      <div className="score">
        <p>
          <span>{score}</span> / 100
        </p>
      </div>
    </div>
  );
};

export default CategoryScore;
