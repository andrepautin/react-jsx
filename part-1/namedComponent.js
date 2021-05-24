function NameComponent(props){
    return <p> My name is {props.name} </p>
};

ReactDOM.render(<NameComponent name='Sam'/>,
    document.getElementById('root'));
    