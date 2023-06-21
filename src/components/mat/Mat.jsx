 import { Link } from 'react-router-dom';
 import Card from '../ui/Card';
  import './mat.css';


 const Mat = ({mat}) => { 
    return (
        <Card key={mat.id}>
          <img src={require(`../../assets/images/${mat.image}`)}
            alt={mat.model}
          /> 
           <div className='card-body'>          
             {mat.name}:
             <br />
             {mat.content}
             <br />
             {mat.price} 
          </div>
          
         </Card>     
         );
           };

  export default Mat;

 