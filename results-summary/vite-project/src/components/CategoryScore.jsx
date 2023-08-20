const CategoryScore = (data) => {
  const { category, score, icon } = data.data;

  return (
    <div className={`category ${category}`}>
      <div>
        <img src={icon} alt={`icon for ${category}`} />
        <h4>{category}</h4>
      </div>
      <div className="score">
        <p>
          <span>{score}</span> / 100
        </p>
      </div>
    </div>
  );
};

export default CategoryScore;
