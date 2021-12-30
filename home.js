import React from "react";
import {useState} from 'react'
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import { Component } from "react";
import './home.css'
import logo from './logo.svg'
import {student,facilities} from './testimonials'

export const Home =()=>{

    let [i,setI] = useState(0)
    const changeI = ()=>{
        i++
        if(i>student.length-1){
            i = 0
            setI(i)
        }
        setI(i)
    }
    
        return <main>
            <div className='section'>
                <h1>
                    About Lorem
                </h1>
                <div className="underscore"></div>
            </div>
            <article className="first"><p>
                    lorem sdofries lgthi kdktoiw  sdfoiew lsidelsi
                    sdfliew ew sdfowe lsosa oewoi af soe sfow sofdo
                    sfoewi a oe s weiiio sewi sofid ewo sie soaafa
                    s fow soiwei sfowe apoe sfoeo siew saoie sofie if (sfweo
                    )dlj sf ao  
                    lorem sdofries lgthi kdktoiw  sdfoiew lsidelsi
                    sdfliew ew sdfowe lsosa oewoi af soe sfow sofdo
                    sfoewi a oe s weiiio sewi sofid ewo sie soaafa
                    s fow soiwei sfowe apoe sfoeo siew saoie sofie if (sfweo
                    )dlj sf ao lorem sdofries lgthi kdktoiw  sdfoiew lsidelsi
                    sdfliew ew sdfowe lsosa oewoi af soe sfow sofdo
                    sfoewi a oe s weiiio sewi sofid ewo sie soaafa
                    s fow soiwei sfowe apoe sfoeo siew saoie sofie if (sfweo
                    )dlj sf ao lorem sdofries lgthi kdktoiw  sdfoiew lsidelsi
                    sdfliew ew sdfowe lsosa oewoi af soe sfow sofdo
                    sfoewi a oe s weiiio sewi sofid ewo sie soaafa
                    s fow soiwei sfowe apoe sfoeo siew saoie sofie if (sfweo
                    )dlj sf ao 
                    lorem sdofries lgthi kdktoiw  sdfoiew lsidelsi
                    sdfliew ew sdfowe lsosa oewoi af soe sfow sofdo
                    sfoewi a oe s weiiio sewi sofid ewo sie soaafa
                    s fow soiwei sfowe apoe sfoeo siew saoie sofie if (sfweo
                    )dlj sf ao 

            </p>
             <h4 style={{fontSize:'3rem'}}>Students' testimonials</h4>
            <div className='testimonial'>
           
               <div className='studCont' >
                   <div className="studentImg">
                       <img className='studImg' src={student[i].image}/>
                   </div>
                        <div className ='studentInfo'>
                         <h2>Student name: {student[i].name}</h2>
                         <p>{student[i].testimony}</p>
                         <h2>Class: {student[i].class}</h2>
                         <h2>Ambition: {student[i].ambition}</h2>
                     </div>
                        
                 </div>
                    <button className='btn1' onClick={changeI}>Next</button>
                      
                    

                

            </div>

            <Facilities/>
            
           


            </article>

        </main>
}



export const NavBar =(props)=>{
    const publish=()=>{}
    const signOut=(e)=>{
        e.preventDefault()
        let {changeAdminState} = props
        changeAdminState()
       
    }
    const {adminState} = props
    return <nav className='nav'>
    <img src={logo} className='logo'/>

    {(!adminState)?<a href='#' className='open-home' onClick={e=>props.openNav(e)}>Home</a>:
    <h3>Lorem School</h3>}
    {(!adminState)? <a href='' className='open-home' onClick={e=>props.openNav(e)}>About</a>:''}         
    {(!adminState)? <a href='' className='open-home' onClick={e=>props.openNav(e)}>News</a>:<h3>
        Admin Portal</h3>}        
    {(!adminState)?<a href='' className='open-sign' onClick={e=>props.openNav(e)}>SignIn</a>:
    <a href='#' className='announcement' onClick={(e)=>signOut(e)}>signOut</a>}
    
    </nav> 
    
}


const Facilities =()=>{
    let [i,setI] = useState(0)
    let [j,setJ] = useState(0)

    setInterval(()=>{
        i++
        if(i>facilities.length - 1){
            i=0
        }
        setI(i)
        setInterval(()=>{
            j++
            if(i>facilities[i].images.length - 1){
                j=0
            }
            setJ(j)
        },3000)

    },15000)
    return(
    <div className='facilities'>
         <div className='facilityInfo'>
             <p>
                 {facilities[i].comment}
             </p>
         </div>
        <div className="facilityImg">
            <img src={facilities[i].images[j]}/>
        </div>
    
      </div>
)
}