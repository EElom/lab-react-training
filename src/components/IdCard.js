function IdCard(props) {
  return (
    <div className="idCard">
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>    
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toDateString()}</p>
      <p> <img src={props.picture} alt="personPicture" /></p>
      </div>
    );
  }
  
  export default IdCard;