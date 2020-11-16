import React, { useState, useEffect } from 'react'
import Item from './Item'

import first from '../../../../assets/img/blog/knowledge/1.1.jpg'
import second from '../../../../assets/img/blog/knowledge/1.2.jpg'
import third from '../../../../assets/img/blog/knowledge/1.3.jpg'

const List = (props) => {
  var SecuritiesInvestment = [
    {
      id : 1,
      img : first,
      alt : 'Description',
      title: "In Conversation With Bank Novo's CEO, Michael Rangel",
      author: 'Stephanie Faris',
      publicDate: 'October 20, 2020',
      briefDesc: 'Small businesses and freelancers need a banking app tailored to their needs. Michael Rangel understands those needs and has some insightful thoughts on small business banking.' 
    },
    {
      id : 2,
      img : second,
      alt : 'Description',
      title: "BlueVine Business Bank Review: Checking Built For Small Business",
      author: 'Mary Beth Eastman',
      publicDate: 'October 16, 2020',
      briefDesc: 'BlueVine is a perfect fit for small businesses looking for a high-interest on their balance without paying monthly fees.' 
    },
    { 
      id : 3,
      img : third,
      alt : 'Description',
      title: "The 6 Best Credit Unions – These May Make You Want to Abandon Your Bank",
      author: 'Kevin Mercadante',
      publicDate: 'October 25, 2020',
      briefDesc: 'Credit unions provide most of the same services as banks. But they do it without all the fees, often paying higher interest on your deposit accounts. And with a credit union you’re not a customer – you’re a member.' 
    }
  ]
  var StockFilter = [
    {
      id : 4,
      img : second,
      alt : 'Description',
      title: "BlueVine Business Bank Review: Checking Built For Small Business",
      author: 'Mary Beth Eastman',
      publicDate: 'October 16, 2020',
      briefDesc: 'BlueVine is a perfect fit for small businesses looking for a high-interest on their balance without paying monthly fees.' 
    },
    {
      id : 5,
      img : first,
      alt : 'Description',
      title: "In Conversation With Bank Novo's CEO, Michael Rangel",
      author: 'Stephanie Faris',
      publicDate: 'October 20, 2020',
      briefDesc: 'Small businesses and freelancers need a banking app tailored to their needs. Michael Rangel understands those needs and has some insightful thoughts on small business banking.' 
    },
    {
      id : 6,
      img : third,
      alt : 'Description',
      title: "The 6 Best Credit Unions – These May Make You Want to Abandon Your Bank",
      author: 'Kevin Mercadante',
      publicDate: 'October 25, 2020',
      briefDesc: 'Credit unions provide most of the same services as banks. But they do it without all the fees, often paying higher interest on your deposit accounts. And with a credit union you’re not a customer – you’re a member.' 
    }
  ]
  var ReadReport = [
    {
      id : 7,
      img : third,
      alt : 'Description',
      title: "The 6 Best Credit Unions – These May Make You Want to Abandon Your Bank",
      author: 'Kevin Mercadante',
      publicDate: 'October 25, 2020',
      briefDesc: 'Credit unions provide most of the same services as banks. But they do it without all the fees, often paying higher interest on your deposit accounts. And with a credit union you’re not a customer – you’re a member.' 
    },
    {
      id : 8,
      img : first,
      alt : 'Description',
      title: "In Conversation With Bank Novo's CEO, Michael Rangel",
      author: 'Stephanie Faris',
      publicDate: 'October 20, 2020',
      briefDesc: 'Small businesses and freelancers need a banking app tailored to their needs. Michael Rangel understands those needs and has some insightful thoughts on small business banking.' 
    },
    {
      id : 9,
      img : second,
      alt : 'Description',
      title: "BlueVine Business Bank Review: Checking Built For Small Business",
      author: 'Mary Beth Eastman',
      publicDate: 'October 16, 2020',
      briefDesc: 'BlueVine is a perfect fit for small businesses looking for a high-interest on their balance without paying monthly fees.' 
    }
  ]
  var TechnicalAnalysis = [
    {
      id : 10,
      img : first,
      alt : 'Description',
      title: "In Conversation With Bank Novo's CEO, Michael Rangel",
      author: 'Stephanie Faris',
      publicDate: 'October 20, 2020',
      briefDesc: 'Small businesses and freelancers need a banking app tailored to their needs. Michael Rangel understands those needs and has some insightful thoughts on small business banking.' 
    },
    {
      id : 11,
      img : third,
      alt : 'Description',
      title: "The 6 Best Credit Unions – These May Make You Want to Abandon Your Bank",
      author: 'Kevin Mercadante',
      publicDate: 'October 25, 2020',
      briefDesc: 'Credit unions provide most of the same services as banks. But they do it without all the fees, often paying higher interest on your deposit accounts. And with a credit union you’re not a customer – you’re a member.' 
    },
    {
      id : 12,
      img : second,
      alt : 'Description',
      title: "BlueVine Business Bank Review: Checking Built For Small Business",
      author: 'Mary Beth Eastman',
      publicDate: 'October 16, 2020',
      briefDesc: 'BlueVine is a perfect fit for small businesses looking for a high-interest on their balance without paying monthly fees.' 
    }
  ]

  const [listItems, setlistItems] = useState(SecuritiesInvestment)
  let listCategory = props.listCategory
  useEffect(() => {
    if (listCategory === "SecuritiesInvestment") {
      setlistItems(SecuritiesInvestment);
    } else if (listCategory === "StockFilter") {
      setlistItems(StockFilter);
    } else if (listCategory === "ReadReport") {
      setlistItems(ReadReport);
    } else {
      setlistItems(TechnicalAnalysis);
    }
  }, [listCategory])

  return (
    <React.Fragment>
      {listItems.map(item=>(
          <React.Fragment key = {item._id}>
              <Item
                id = {item._id}
                img = {item.img}
                alt = {item.alt}
                title = {item.title}
                author = {item.author}
                publicDate = {item.publicDate}
                briefDesc = {item.briefDesc}
              />
          </React.Fragment>
      ))}
  </React.Fragment>
  )
}

export default List;


