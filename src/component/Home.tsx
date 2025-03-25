import LastUpdate from "./LastUpdate";
import NavBar from "./NavBar";

function Home() {
    return <div>
        <NavBar boldedWord={"Home"} />
            <p style={{display: "inline"}}>This website is for students of Mr. Jackson-Bentley's classes. If you have any questions, please talk to me in person, or email me at </p> 
            <a href="mailto:kovu.bentley-ess@waterbury.k12.ct.us" style={{display: "inline"}}>kovu.bentley-ess@waterbury.k12.ct.us</a>
            <p>Use the <b>Assignment Worth</b> page to see how much an assignment would be worth when you submit it on a certain date.</p>
            <p>You can use the <b>Grade Calculator</b> to give an estimate of what your grade is / should be if you get certain grades on certain assignments.</p>
            <h2>Syllabus</h2>
            <p>Here is a reminder of my grading policy</p>
            <ul>
                <li>Attendance will be 20% of your grade.</li>
                <ul>
                    <li>If you are present or slightly late to class, you will get a 100%</li>
                    <li>Otherwise, if you have an excused absent or you were marked tardy by another class, you will be exempt from that attendance grade</li>
                    <li>Otherwise,  you will get a zero for the day.</li>
                </ul>
                <li>All assignments will be <u>required</u></li>
                <ul>
                    <li>All assignments will have the same amount of weight. For example, 2 assignments will be worth 50% each. 4 assignments will be worth 25% each.</li>
                    <li>If any assignment given past the due date, 5% off will be marked for each day late, including weekends</li>
                    <li>It is your responsibility to hand me assignments either on Google classroom or in person. If I am not in this class, hand it to the main office, and tell them to give it to me</li>
                </ul>
            </ul>
            <LastUpdate/>
    </div> 
  }
  
  export default Home;