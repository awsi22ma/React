// import PageHeader from "./ui/PageHeader";
import MatList from "./mat/MatList";
import '../components/home.css';


const Home = () => {
return(
    <>
    <section className="container">

        <h1>Välkomen till KFC</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Laudantium tempore assumenda quidem at quos accusamus aperiam 
                    dicta quisquam tempora quasi repellat veritatis tenetur totam
                     facilis, libero architecto, aut excepturi reiciendis. 
                     Quo tempora molestias voluptatum 
                    rerum impedit dolor blanditiis corrupti veritatis!</p>
                    
               
                    
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Molestiae eos soluta deleniti voluptatum fugit suscipit sunt
          alias vero dolorem. Earum deleniti eveniet sunt exercitationem
           hic laudantium est harum quo neque?</p>
        
        
     </section>
     <section className="home">
     <img src={require("../assets/images/k.jpg")} alt='Handgjort'/>
     </section>
    </>
);
};
export default Home;