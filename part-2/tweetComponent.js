function Tweet(props) {
  const {username, name, date, message} = props;
  const keys = Object.keys(props);

  return (
    <div className="Tweet">
      {keys.map(key => <p>{props[key]}</p>)}
    </div>
  );
}

ReactDOM.render(<Tweet/>,
  document.getElementById('root'));

