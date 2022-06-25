function Random(props) {
    const { min, max } = props;
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <p>
          Random value between {min} and {max} = {randomNum}
        </p>
    );
  }
  
  export default Random;