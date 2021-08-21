import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'


export default function StateUpdate(){
    const state = [{id:1,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpA5WcmbXDS7Sx59PRkztNLrafQZzddOkXCw&usqp=CAU",title:"Flower Idly",des:"Idli is a traditional south indian food.it's playing the major role in regular life of south indian.",cart:false},
    {id:2,img:"https://media-cdn.tripadvisor.com/media/photo-s/0d/59/f1/97/paper-roast-dosa.jpg",title:"Paper roast",des:"Paper roast is our most selling Product.which is the mostly rated by youngsters.",cart:false},
    {id:3,img:"https://cdn.tarladalal.com/members/9306/procstepimgs/ven-pongal-(11)-23-190139.jpg",title:"Gee pongal",des:"Pongal is our breakfast special Product.Which is very easy to diygist in our marning session.",cart:false},
    {id:4,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQlz3fvvkokWszChFEQuJvFFzV2JET3ZN6g&usqp=CAU",title:"Chicken Briyani",des:"Tasty Chicken briyani made with basmathi rice with Curd Onion.",cart:false},
    {id:5,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFp7D-fBDW96shgyBEjkIJWmFGPDpJdG3BLA&usqp=CAU",title:"Kadai Chicken",des:"Chicken with huge amount of Onion roasted in the pure gee.",cart:false},
    {id:6,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-qNbt--vBWStaGOAkMryz5cCJgtcB4wO6A&usqp=CAU",title:"Mutton Briyani",des:"Tasty Mutton briyani made with basmathi rice with Curd Onion.",cart:false},
    {id:7,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuBUTlJgrOwMsw2i1_stCs9dx53-Ql401VA&usqp=CAU",title:"Mutton Curry",des:"Mutton curry made with pure fresh mutton.",cart:false},
    {id:8,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUbkSKjFfPgSPX1KpncXf4JZ6uhePsAxoxQ&usqp=CAU",title:"Fish curry",des:"The fish curry made with traditional way.",cart:false},
    {id:9,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRCe_owNZAOBFuJk5iaCFssKjYUlLGIo3yw&usqp=CAU",title:"Fish fry",des:"The fish fried in direct fire. therefore it's having less Lustral.",cart:false},]
    
    
    
const dispatch = useDispatch()
    dispatch({type:'ADD_ITEM',payload:state})
    return(
        <></>
    )
}