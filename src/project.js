import kitcheno from "./images/ImageModern.png"
import kitcheni from  "./images/Imagemodernone.png"
import kitche from "./images/Imagemodernthree.png"
import kitch from "./images/Imagemodernfour.png"
import button from "./images/button.png"
import line from "./images/Line.png"
const Project = () => {
    return ( 
        <div className="projects">
         <div className="heading">
        <h1>Follow Our Projects</h1>
        <p> It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points. </p>
        </div>
        <div className="images">  
           <div className="odd"> <div className="archikitch"><img className="kitchen" src={kitche} alt="" /></div> <div className="t"><span><h1>Modern Kitchen</h1> <p> Decor/Architecture</p></span> <img className="next" src={button} alt="" /></div> </div>
           <div> <div className="archikitch"> <img className="kitchen" src={kitch} alt="" /></div> <div className="t"><span><h1>Modern Kitchen</h1> <p> Decor/Architecture</p></span> <img className="next" src={button} alt="" /></div> </div>
           <div className="odd"> <div className="archikitchen"><img  className="kitchen" src={kitcheno} alt="" /> </div><div className="t"><span><h1>Modern Kitchen</h1> <p> Decor/Architecture</p></span> <img className="next" src={button} alt="" /></div>  </div>
           <div><div className="archikitch"> <img  className="kitchen" src={kitcheni} alt="" /> </div> <div className="t"><span><h1>Modern Kitchen</h1> <p> Decor/Architecture</p></span> <img className="next" src={button} alt="" /></div></div>
        </div>
        <div className="bg">
         <div className="counter">
         <div className="counter2">
            <h1>12</h1>
            <p>Years of experience</p>
         </div>
         <div className="line"> <img className="line" src={line} alt="" /></div>
        

         <div className="counter2">
            <h1>85</h1>
            <p>Sucess Projects</p>
         </div>
         <div className="line"> <img className="line" src={line} alt="" /></div>

         <div className="counter2">
            <h1>15</h1>
            <p>Active Projects</p>
         </div>
         <div className="line"> <img className="line" src={line} alt="" /></div>
         <div className="counter2">
            <h1>95</h1>
            <p>Happy Customers</p>
         </div>
        
         </div>
        </div>
        </div>
     );
}
 
export default Project;