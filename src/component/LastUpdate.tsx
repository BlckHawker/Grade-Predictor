import data from '../data.json'
function LastUpdate() {
    let date = new Date(data["LastUpdate"]);
    return <p>Website Last update {`${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`}</p>
  }
  
  export default LastUpdate;