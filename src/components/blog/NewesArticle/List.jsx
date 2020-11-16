import React from 'react'
import Item from './Item'


const List = () => {

    var listItems = [
      {
        id : 1,
        href: '',
        title: 'Lorem ipsum dolor sit amet. Delectus fuga numquam qui accusantium possimus.'
      },
      {
        id : 2,
        href: '',
        title: 'Lorem ipsum dolor sit amet, delectus fuga numquam qui accusantium possimus.'
      },
      {
        id : 3,
        href: '',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus qui accusantium possimus.'
      },
      {
        id : 4,
        href: '',
        title: 'Lorem ipsum sit amet, consectetur adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
      },
      {
        id : 5,
        href: '',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
      },
      {
        id : 6,
        href: '',
        title: 'Lorem ipsum dolor sit amet, adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
      },
      {
        id : 7,
        href: '',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
      },
      {
        id : 8,
        href: '',
        title: 'Lorem ipsumamet, consectetur adipisicing elit. Delectus fuga numquam qui accusantium possimus.'
      },
      {
        id : 9,
        href: '',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga ni accusantium possimus.'
      },
      {
        id : 10,
        href: '',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleuam qui accusantium possimus.'
      },
    ]

    return (
        <>
            {listItems.map(item=>(
                <React.Fragment key = {item._id}>
                    <Item
                    id = {item._id}
                    href = {item.href}
                    title = {item.title}
                    />
                </React.Fragment>
            ))}
        </>
    ) 
}

export default List;
