// import "./list.scss"
// import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"

// const List = ({columns}) => {
//   return (
//     <div className="list">
//       <Sidebar/>
//       <div className="listContainer">
//         <Navbar/>
//         <Datatable columns={columns}/>
//       </div>
//     </div>
//   )
// }

// export default List

// /mnt/data/List.jsx
import React from 'react';
import "./list.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import { useSelector } from 'react-redux';
import { selectColumns } from '../../features/columns/columnsSlice';

const List = ({ columnsKey }) => {
  const columns = useSelector(selectColumns)[columnsKey];
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default List;
