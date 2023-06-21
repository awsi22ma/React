import '../components/kontakt.css';
const Kontakt =()=>{
    return (
    <section className="contact-info">
           <h1>Kontakta Oss</h1>
           <p>Vi vill att våra kunder ska tycka om oss. Vi tar därför tacksamt emot feedback, vare sig det gäller våra produkter och tjänster, vårt företag eller våra restauranger Vill du göra ett gästklagomål behöver vi information om vilken restaurang du har besökt, datum och gärna kvitto eller ordernummer, för att vi ska kunna hjälpa dig på bästa sätt..</p>
           <h1>Fyll i förmuläret</h1>
           <form >
           
                                
                                <div className="form-control">
                                
                                    <label for="Namn">Namn</label>
                                    <input type="text" name="Namn" id="Namn" />
                                

                               
                                    <label for="Email">Email</label>
                                    <input type="text" name="Email" id="Email" />
                                

                             
                                    <label for="Telefonnummer">Telefonnummer</label>
                                    <input type="text" name="Telefonnummer" id="Telefonnummer" />
                                

                               
                                    <label for="message">Meddelande</label>
                                    <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"></textarea><br />
                                
                                <button className="btn" type="submit">Skicka</button>

                                </div>
                                /</form>
           </section>

           
    );
};
export default Kontakt;
