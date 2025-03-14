"use client";
import styles from '../css/utils.module.css';
import { Link } from "react-router-dom";
interface Props {
    boldedWord: string;
}
const NavBar = (props: Props) => {
    const linkObjs = [{ href: '/', text: 'Home' }, {href: '/AssignmentWorth', text: 'Assignment Worth'}, { href: '/GradeCalculator', text: 'Grade Calculator' }]
    return (
        <div className={styles.navbar}>
            {linkObjs.map(obj => <Link to={obj.href} onClick={() => window.location.href=obj.href}>{props.boldedWord === obj.text ? <b style={{display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", unicodeBidi: "isolate"}}>{obj.text}</b> : <p>{obj.text}</p>}</Link>)}
        </div>
    );
}

export default NavBar;