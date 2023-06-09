import React, { useEffect, useMemo, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import CardDisplay from '../components/CardDisplay';
import UsersLister from '../components/UsersLister';
import PostsLister from '../components/PostsLister';
import EditModal from '../components/EditModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddModal from '../components/AddModal';
import EditModalPost from '../components/EditModalPost';
import TabComponentContext from '../Context/TabComponentContext';

const TabsComponent = () => {
  const [key, setKey] = useState("products");
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [addShow, setAddShow] = useState(false);
  const [newProduct, setNewProduct] = useState({});
  const [editPost, setEditPost] = useState({});
  const [showEditPostModal, setShowEditPostModal] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('https://dummyjson.com/' + key);
      return response;
    }


    getData().then((values) => {
      if (key === 'products') {
        setProducts(values.data.products);
      } else if (key === 'users') {
        setUsers(values.data.users);
      } else if (key === 'posts') {
        setPosts(values.data.posts);
      }
    })
  }, [key])

  const handleEditButton = (e, item) => {
    e.preventDefault();
    setShow(true);
    setEditValue(item);
  }

  const handleClose = () => {
    setShow(false);
  }

  const handleAddClose = () => {
    setAddShow(false);
  }

  const handleDeleteButton = (e, item) => {
    e.preventDefault();
    const newDataDel = products.filter((value) => {
      return item.id !== value.id && value
    })
    setProducts(newDataDel);
    toast.success('Data Deleted Sucessfully!');
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    products.unshift(newProduct);
    setAddShow(false);
    toast.success('Data Added Sucessfully!')
  }

  const handleEditChanges = (e) => {
    e.preventDefault();
    const newAllData = products.map((item) => {
      return item.id === editValue.id ? editValue : item
    })
    setProducts(newAllData);
    setShow(false);
    toast.success('Data Edited Sucessfully!');
  }

  const addChangeHandler = (e) => {
    e.preventDefault();
    const newItem = {
      ...newProduct,
      [e.target.name]: e.target.value,
      id: products.length + 1
    }
    setNewProduct(newItem);
  }
  const changeHandler = (e) => {
    e.preventDefault();
    const newData = {
      ...editValue,
      [e.target.name]: e.target.value
    }
    setEditValue(newData);
  }

  const handleAddShow = (e) => {
    e.preventDefault();
    setAddShow(true);
  }


  const deleteButtonPost = (e, item) => {
    e.preventDefault();
    const newPostData = posts.filter((value) => {
      return item.id !== value.id && item
    })
    setPosts(newPostData);
    toast.success('Data Deleted Sucessfully!')
  }
  const editButtonPost = (e, item) => {
    e.preventDefault();
    setEditPost(item);
    setShowEditPostModal(true)
  }

  const handlePostModalClose = (e) => {
    setShowEditPostModal(false);
  }

  const changeHandlerPost = (e) => {
    e.preventDefault();
    const newPostData = {
      ...editPost,
      [e.target.name]:e.target.value
    }
    setEditPost(newPostData);
  }
  const handleEditPostChanges = (e) => {
    e.preventDefault();
    const newEditedData = posts.map((value)=>{
      return value.id === editPost.id ? editPost : value
    })
    setPosts(newEditedData);
    setShowEditPostModal(false);
    toast.success('Data Edited Sucessfully!');
  }

  const memorizedValue = useMemo(()=>({ products,posts,users}),[products,posts,users]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <TabComponentContext.Provider value={memorizedValue}>
      <Tabs
        defaultActiveKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="products" title="Products">
          <button className='btn btn-primary m-2' onClick={handleAddShow}>Add Products</button>
          {products && products.length > 0 && <CardDisplay handleDeleteButton={handleDeleteButton} handleEditButton={handleEditButton} />}
        </Tab>
        <Tab eventKey="users" title="Users">
          {users && users.length > 0 && <UsersLister />}
        </Tab>
        <Tab eventKey="posts" title="Posts">
          {posts && posts.length > 0 && <PostsLister editButtonPost={editButtonPost} deleteButtonPost={deleteButtonPost} />}
        </Tab>
      </Tabs>
      <EditModalPost editValue={editPost} show={showEditPostModal} handleClose={handlePostModalClose} handleEditPostChanges={handleEditPostChanges} changeHandlerPost={changeHandlerPost} />
      <EditModal
        show={show} handleClose={handleClose} editValue={editValue} changeHandler={changeHandler} handleEditChanges={handleEditChanges} />
      <AddModal show={addShow} handleAddClose={handleAddClose} handleAddProduct={handleAddProduct} addChangeHandler={addChangeHandler} />
      </ TabComponentContext.Provider>
    </>
  );
}

export default TabsComponent;