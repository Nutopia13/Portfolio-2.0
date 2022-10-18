export const ScoreBoard = ({ scores, xPlaying }) => {
    const { xScore, oScore } = scores;
  
    return (
      <div className="scoreboard transition-all duration-75">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
      </div>
    )
  }