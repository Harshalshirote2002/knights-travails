export default function Side({ handleState }) {
  const handleClick = () => {
    handleState({
      val: 0,
      start: 0,
      end: 0,
      prevPath: -1,
    });
  };

  return (
    <div className="side">
      <header>Knights Travails</header>
      <div className="side-content">
        Select the Knight's initial position and the final position
      </div>
      <button className="reset-btn" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
}
