function BoxColor(props) {
    const Color = {
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`,
    };
  
    return (
      <div style={Color} className="color">
        RGB({props.r}, {props.g}, {props.b})
      </div>
    );
  }
  
  export default BoxColor;