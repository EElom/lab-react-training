function Greetings (props) {
    const {lang,firstName} = props;
    return (
        <div className="greetingsList">
            <p> {lang === "de" ? 'Hallo'
                :lang === "fr" ?'Bonjour'
                :lang === "pt" ?'Olá'
                :lang === "es" ?'Hola'
                :'Hello'} {firstName}!
            </p>   
        </div>
         );
    }


export default Greetings;

