function CreditCard(props) {
    const CardNum = props.number.slice(-4);
    const CardStyle = {
      backgroundColor: `${props.bgColor}`,
      color: `${props.color}`,
    };
    return (
      <div className="creditCard" style={CardStyle}>
        <p className = "type">{props.type}</p> 
        <p className ="CardNum">•••• •••• •••• {CardNum}</p> 
        <p className ="ExpDate"> {props.expirationMonth}/{props.expirationYear} {props.bank} </p> 
        <p className ="owner">{props.owner}</p>
      </div>
    );
  }
  
  export default CreditCard;