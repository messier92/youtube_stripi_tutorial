import React from 'react'
import "./List.scss";
import Card from '../Card/Card';

const List = () => {
    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19, 
            price: 12,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            isNew: true,
            oldPrice: 19, 
            price: 12,
        }
      ]

    return (
        <div className='list'>
            {data?.map(item=>{
                <Card item={item} key={item.id}/>
            })}
        </div>
    )
}

export default List;