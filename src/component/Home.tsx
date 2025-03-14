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
                <li>All <u>required assignments</u> will have the same weight. For example, 2 assignments will be worth 50% each. 4 assignments will be worth 25% each.</li>
                <li>All <u>extra credit</u> will boost your grade by 1% unless stated otherwise. For example if you hae a 90%, and you get a 100 on an extra credit, your final grade will be a 91% </li>
                <li>If any assignment given past the due date, 5% off will be marked for each day late, including weekends</li>
                <li>It is your responsibility to hand me assignments either on Google classroom or in person. If I am not in this class, hand it to the main office, and tell them to give it to me</li>
                <li>If you were absent, talk to me about an extension on what you missed. It's your responsibility on getting an extension. If you ask me for an extension on an assignment that is more than 2 weeks old, I will give you one.</li>
            </ul>
    </div> 
  }
  
  export default Home;