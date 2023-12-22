
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";





const DashboardHome = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://scic-assignment-8-server.vercel.app/taskList/${user?.email}`)
      .then(res => {
        setData(res?.data);
      });
  }, [user]);

  const handleDeleteItem = async (item) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        await axios.delete(`https://scic-assignment-8-server.vercel.app/taskList/${item._id}`);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${item.title} has been deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleDragStart = (e, itemId) => {
    e.dataTransfer.setData('text/plain', itemId);
  };




//   ... (previous code)

const handleDrop = async (e, category) => {
  e.preventDefault();
  const itemId = e.dataTransfer.getData('text/plain');
  console.log(itemId);

  try {
    const updatedTask = await axios.patch(`https://scic-assignment-8-server.vercel.app/updateCategory/${itemId}`, {
      category,
    });

    // Assuming the server responds with the updated task, you can now update the state
    setData(prevData => {
      const newData = [...prevData];
      const updatedIndex = newData.findIndex(item => item._id === updatedTask.data._id);

      if (updatedIndex !== -1) {
        newData[updatedIndex] = updatedTask.data;
      }

      return newData;
    });

    window.location.reload()
  } catch (error) {
    console.error('Error updating task category:', error);
  }
};

// ... (remaining code)

















  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
  <>
    <h1 className="text-3xl font-bold font-mono text-center my-4">Dashboard</h1>
    <div className="m-4 md:m-16 flex flex-col lg:flex-row  justify-between gap-4 ">
      
      <div className="category w-full" onDrop={(e) => handleDrop(e, 'To-Do')} onDragOver={allowDrop}>
        <h2 className="bg-gradient-to-r from-[#be4fe0] to-[#4F65E0] rounded-xl py-2 text-center w-full text-white font-bold ">To-Do</h2>
        {data.filter((item) => item.status === 'To-Do').map((item, idx) => (
          <div
            key={item._id}
            className="draggable-item"
            draggable
            onDragStart={(e) => handleDragStart(e, item._id)}
          >
            <h1 className="font-bold">{idx + 1}. {item.title}</h1>
            <div>
              <Link to={`/dashboard/update/${item._id}`}>
                <button className="btn btn-ghost">
                  <FaEdit />
                </button>
              </Link>
              <button
                onClick={() => handleDeleteItem(item)}
                className="btn btn-ghost btn-lg"
              >
                <FaTrashAlt className="text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="category  w-full" onDrop={(e) => handleDrop(e, 'Ongoing')} onDragOver={allowDrop}>
        <h2 className="bg-gradient-to-r from-[#be4fe0] to-[#4F65E0] rounded-xl py-2 text-center  w-full text-white font-bold">Ongoing</h2>
        {data.filter((item) => item.status === 'Ongoing').map((item, idx) => (
          <div
            key={item._id}
            className="draggable-item"
            draggable
            onDragStart={(e) => handleDragStart(e, item._id)}
          >
            <h1 className="font-bold">{idx + 1}. {item.title}</h1>
            <div>
              <Link to={`/dashboard/update/${item._id}`}>
                <button className="btn btn-ghost">
                  <FaEdit />
                </button>
              </Link>
              <button
                onClick={() => handleDeleteItem(item)}
                className="btn btn-ghost btn-lg"
              >
                <FaTrashAlt className="text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="category  w-full " onDrop={(e) => handleDrop(e, 'Completed')} onDragOver={allowDrop}>
        <h2 className="bg-gradient-to-r from-[#be4fe0] to-[#4F65E0] rounded-xl py-2 text-center w-full text-white font-bold">Completed</h2>
        {data.filter((item) => item.status === 'Completed').map((item, idx) => (
          <div
            key={item._id}
            className="draggable-item"
            draggable
            onDragStart={(e) => handleDragStart(e, item._id)}
          >
            <h1 className="font-bold">{idx + 1}. {item.title}</h1>
            <div>
              <Link to={`/dashboard/update/${item._id}`}>
                <button className="btn btn-ghost">
                  <FaEdit />
                </button>
              </Link>
              <button
                onClick={() => handleDeleteItem(item)}
                className="btn btn-ghost btn-lg"
              >
                <FaTrashAlt className="text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default DashboardHome;

