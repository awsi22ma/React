import React ,{ useState }from 'react';
import PageHeader from '../ui/PageHeader';
import Mat from './Mat';

import './mat-list.css';


const MatList = ({ mat ,onAddMat}) => {
    if (!mat || mat.length === 0) {
      return (
        <>
          <PageHeader headerText='Ingen Mat' />
        </>
      );
    }
    return (
      <>
        <PageHeader headerText='Meny' />
        <section className='mat-gallery'>
        
            {mat.map((mat) =>(
                <React.Fragment key={mat.id}>
                   
                 <Mat mat={mat}/> 
                </React.Fragment>
            ))}

        <form className='mat-gallery' onSubmit={onAddMat}>
        <label for="name">Name</label>
          <input type='text' name='name' /><br />
  
         
  
          <label for="name">Price</label>
          <input type='text' name='price' /><br />
  
          <label for="name">Image</label>
          <input type='string' name='image' /><br /> 
  
          <label for="name">Content</label>
          <input type='text' name='content'/><br />
  
          <button>Lägg till mat</button>
  
  
  
        </form>
      
  </section> 
   
   </>
        );       
};
export default MatList;