import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import CardDisplay from '../components/CardDisplay';
import UsersLister from '../components/UsersLister';
import PostsLister from '../components/PostsLister';

const TabsComponent = () => {
  const [key, setKey] = useState("products");
  const [products,setProducts] = useState([]);
  const [users,setUsers] = useState([]);
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    async function getData(){
    const response = await axios.get("https://dummyjson.com/"+ key);
    return response;  
  }
  getData().then((values)=>{
    if(key === 'products'){
      setProducts(values.data.products);
    }else if(key === 'users'){
      setUsers(values.data.users);
    }else if(key === 'posts'){
      setPosts(values.data.posts);
    }
  })
  },[key])
  return (
<Tabs
      defaultActiveKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="products" title="Products">
       {products && products.length > 0 && <CardDisplay products={products}/>}
      </Tab>
      <Tab eventKey="users" title="Users">
        {users && users.length > 0 && <UsersLister users={users}/>}
      </Tab>
      <Tab eventKey="posts" title="Posts">
        {posts && posts.length > 0 && <PostsLister posts={posts} />}
      </Tab>
    </Tabs>
  );
}

export default TabsComponent;