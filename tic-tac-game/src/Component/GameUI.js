const GameUI = (props) => {
  const classes = props.className ? `${props.className} square` : `square`;
  return (<span className={classes} onClick={props.onClick}>{props.gameState}</span>);
};

export default GameUI;
