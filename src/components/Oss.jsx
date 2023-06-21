import '../components/oss.css';
const Oss =()=>{
    return (
        <article id="om">
                <section className="om-left">
                    <h1>FRÄSCHT OCH HANDGJORT</h1>
                    <p>Handpanerat och tillagat på plats i restaurangen
                         det är varken det enklaste eller det snabbaste 
                         sättet att tillaga kyckling, men för oss på KFC är
                          det viktigast med bra kvalitet.</p>
                </section>
                <section className="om-right">
                    <img src={require("../assets/images/k6.jpg")} alt='Handgjort'/>
                    </section>
                    <section className="om-right">
                    <h1>HEMLIGT RECEPT</h1>
                    <p></p>Vår kyckling tillagas alltid av våra specialutbildade kockar med ett
                     hemligt och framgångsrikt recept bestående av 11 olika kryddor och örter.
                      Receptet fulländades av Colonel Sanders 1939 och har varit oförändrat
                       sedan dess, därför kommer KFC i Sverig
                    </section>
                    <section class="om1-left">
                    <img src={require("../assets/images/k7.webp")} alt='Handgjort'/>

                </section>

                <section class="om-left">
                    <h3>FRÄSCHT OCH HANDGJORT</h3>
                    <p>Handpanerat och tillagat på plats i restaurangen
                         det är varken det enklaste eller det snabbaste 
                         sättet att tillaga kyckling, men för oss på KFC är
                          det viktigast med bra kvalitet.</p>
                </section>


                <section class="om-right">
                <img src={require("../assets/images/k8.jpg")} alt='Handgjort'/>

                </section>
            </article>
        
        



                
                
    );
};

export default Oss;