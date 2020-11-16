import React from 'react'
import Item from './Item'
import ava from '../../assets/img/feedback-person.png'


const List = () => {

    var listItems = [
        {
            id : 1,
            ava: ava,
            name: 'Fannie Rowe1',
            city: 'New York',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
        },
        {
            id : 2,
            ava: ava,
            name: 'Fannie Rowe2',
            city: 'New York',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
        },{
            id : 3,
            ava: ava,
            name: 'Fannie Rowe3',
            city: 'New York',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
        },
        {
            id : 4,
            ava: ava,
            name: 'Fannie Rowe4',
            city: 'New York',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
        }
        ]

    return (
        <>
            {listItems.map(item=>(
                <React.Fragment key = {item._id}>
                    <Item
                    id = {item._id}
                    ava = {item.ava}
                    city = {item.city}
                    name = {item.name}
                    feedback = {item.feedback}
                    />
                </React.Fragment>
            ))}
        </>
    ) 
}

export default List;
