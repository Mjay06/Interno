import imageone from "./images/Photoimagearti.png"
import next from "./images/button.png"
const Articles = () => {
    return (  
        <div className="articles">
            <div className="title">
                <h1>Articles & News</h1>
                <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
            </div>
            <div className="cardss">
                <div className="outer">
                <div className="image "> <div className="label">Kitchan Design</div> </div>
                <div className="description">Let’s Get Solution For Building Construction Work</div>
                <div className="time">26 December,2022 <img src={next} alt="" /></div>
                </div>
                <div className="outer">
                <div className="image one"> <div className="label">Living Design</div> </div>
                <div className="description">Low Cost Latest Invented Interior Designing
Ideas.</div>
                <div className="time">22 December,2022 <img src={next} alt="" /></div>
                </div>
                 <div className="outer">
                <div className="image two"> <div className="label">Interior Design</div> </div>
                <div className="description">Best For Any Office & Business Interior 
Solution</div>
                <div className="time">25 December,2022 <img src={next} alt="" /></div>
                </div>
            </div>
        </div>
    );
}
 
export default Articles;