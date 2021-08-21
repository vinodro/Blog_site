import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


export default function Home(props){
    const data = useSelector((val)=>{
        return val
    })
    const dispatch = useDispatch()

    return(
        <div style={{backgroundColor:"red"}}>
            <div style={{margin: '5px 0px 20px 2px',backgroundColor:'blue'}}>
                <nav style={{backgroundColor:"red"}} class="navbar navbar-expand-lg navbar-light bg-light" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZY0Q6d5TxrTvr7GYo2PUBm6NctuhRMcbcaw&usqp=CAU" alt="village samayal" width="70" height="60"/>
                    <span class="navbar-brand" href="#" style={{fontFamily:'tangerine'}}><h3>Village Samayal</h3></span>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">Home
                        </li>
                    </ul>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/BookedItems">Check out Product</Link></button>
                    </div>
               </nav>
            </div>
            <ul style={{display:'flex',flexFlow:'wrap'}}>
                {data.map((item,ind)=>{
                        return(
                          <div style={{display:'inline',width:'30%',marginBottom:'3%'}} class="container" key={item.id} >
                            <div class="row">
                                <div class="col-md-4 col-sm-12" >
                                    <div class="card" style={{width:'320px'}}>
                                        <img src={item.img} class="card-img-center mx-lg-0 rounded-lg" alt="idly" width="100%" height="180px"/>
                                        <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">{item.des}</p>
                                        <button class="btn btn-primary" onClick={()=>{dispatch({type:"ADD_IND",payload:ind})}}>{item.cart? "Added":"Add cart"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )})}
            </ul>
            <footer class="bg-primary">
            <div class="container">
                <div class="row">
                    <h1 class="col-md-6"> Village Samayal</h1>
                </div>
            </div>
            </footer>
        </div>
    )
}