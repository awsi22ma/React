import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import MatList from './components/mat/MatList';
import MatDetails from './components/mat/MatDetails';
import Navbar from './components/shared/Navbar';
import Kontakt from './components/Kontakt';
import Oss from './components/Oss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/css/style.css';



const App =  () => {
    const[mat,setMat] =useState([]);
    const url ='http://localhost:5020/api/1/meny';

    useEffect(() =>{

        const loadMeny = async() => {
        const{data} = await axios.get(url);
        setMat(data);

        };
        loadMeny();
    },[]);

    const onAddMatHandler = async (e) => {
        e.preventDefault();
        let MatList = [];
        const image =e.target.image.value;
        const name = e.target.name.value;
        const content =e.target.content.value;
        const price =e.target.price.value;
        const newMat = { image,name ,content,price};

        const { data } = await axios.post(url, newMat);
        MatList = [...mat, data];
        setMat(MatList);
      };


    return (
        <BrowserRouter>
        <Navbar/>
    <article className='page'>
        <section>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='mat'element={<MatList mat={mat} onAddMat={onAddMatHandler}/>}/>
             <Route path='/details' element={<MatDetails mat={mat}/>} />
             <Route path='/kontakt' element={<Kontakt/>} />
             <Route path='/om Oss' element={<Oss/>} /> 

            </Routes>
        </section>
        
        </article>
        </BrowserRouter>
        );
};

export default App;