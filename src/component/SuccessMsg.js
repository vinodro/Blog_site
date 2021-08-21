import {Link} from 'react-router-dom'


export default function CheckOut(){
    return(
        <div>
            <button ><Link to='/'>Home</Link></button>
            <div style={{backgroundColor:'blueviolet',height:'100px',alignContent:'center'}}>
                <h1>Your Product has been CheckedOut</h1>
            </div>
        </div>
    )
}