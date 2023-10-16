export default function Side({ state, handleState }) {
  const handleClick = () => {
    handleState({
      val: 0,
      start: 0,
      end: 0,
      prevPath: -1,
    });
  };

  if (state.val === 0) {
    return (
      <div className="side">
        <header>Knights Travails</header>
        <div className="side-content">
          Assign the Initial position of the Knight
          <button className="reset-btn" onClick={handleClick}>
            Reset
          </button>
        </div>
      </div>
    );
  } else if (state.val === 1) {
    return (
      <div className="side">
        <header>Knights Travails</header>
        <div className="side-content">
          Assign the Final position of the Knight
          <button className="reset-btn" onClick={handleClick}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
