import { useMemo, useState } from "react"

const CustomUseMemoExample1 = () =>{

    const[age,setAge] = useState("")

    const ageFunction = useMemo(() =>{
        return age > 20 ? <h5 style={{color:"green"}}>Eligible for Applying job</h5> : <h5 style={{color:"red"}}>Not Eligible for Applying job</h5>
    },[age])

    const clickToChangeHandler = (event) =>{
        setAge(event.target.value)
    }
    return(
        <div>
          <input type="number" value={age}  onChange={clickToChangeHandler}/>
          <h1>{ageFunction}</h1>
        </div>
    )
}
export default CustomUseMemoExample1