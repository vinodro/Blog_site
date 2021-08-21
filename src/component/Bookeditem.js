import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class BookedItems extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // console.log(this.data)
        console.log(this.props)
        return(
          <div style={{backgroundColor:'#9cc49a'}}>
              <button style={{margin:'1%'}}><Link to='/'>Home</Link></button>
              <header><h1 style={{border:'1px solid block'}}>Village Samayal</h1></header>
              <ul style={{listStyleType:'none'}}>
                {this.props.data.map((ite,ind)=>{
                    return(
                        <li>
                            {ite.cart? `${ite.title}`:'' }                        
                        </li>
                    )
                 })}
                 <button><Link to='/checkedout'>CheckOut</Link></button>
            </ul>
          </div>  
        )
    }
}
const mapStateToProps= (val)=>{
    return{
        data:val
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        update:(val)=>dispatch({type:'ADD_THIG',payload:val})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookedItems)