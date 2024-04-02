import React from 'react';
import TableView from './TableVeiw';
import './index.css';

const App = () => {
  const data = [
    {ID : 1 , Name : 'Puneeth' ,   Age : 19},
    {ID : 2 , Name : 'Lucky'   ,   Age : 20},
    {ID : 3 , Name : 'Ramya' ,   Age : 21},
    {ID : 4 , Name : 'Raju' ,   Age : 22},
    {ID : 5 , Name : 'Ravi'  ,   Age : 23},

  ];

  return (
    <div>
      <h1 style = {{ textAlign : 'center' , borderBottom : '2px solid blue' , paddingTop : '20px',marginBottom : '100px'}}>
        Array of Objects - TableView
      </h1>
      <TableView data= {data} />
    </div>
  );
};

export default App;