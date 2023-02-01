import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
<GitHubCalendar username="KAUSH101" />

 const Calender=()=>{
 return ( 
     <div style={{ border:'2px',borderBlockColor:'red'}}>
     <GitHubCalendar 
    username="KAUSH101" 
   
    fontSize={16}
    blockSize={20}
    style={{margin:'auto', width:'80%'}}
   
    >
      <ReactTooltip delayShow={20} html></ReactTooltip>
    </GitHubCalendar>
  </div>
 )
}

export default Calender