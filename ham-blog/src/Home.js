import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
      const { data: blogs, isPending, error } = useFetch('http://localhost:3001/blogs');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !==id);
    //     setBlogs(newBlogs);

    // }
    
    return (
        <div className="home">
          {error && <div> {error} </div>}
          {isPending && <div> Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* <button onClick = {() => setName('Hamisi')}>Change Name</button> */}
        </div>
    );
}

export default Home;

// import {useState} from 'react';


// const Home = () => {
//     // let name = 'Hamisi';
//     const [name, setName] = useState('Briva'); 
//     const [age, setAge] = useState(25); 

// const handleClick = () => {
//     // name = 'Briva';
//     // console.log(name);
//     setName('Hamisi')
//     setAge(22)
    

//     // console.log('Hello World')
// }

// // const handleClickAgain = (name)=>{
// //     console.log("Hello "+name,)

// // }
//     return ( 
//         // <div className="home">
//         //     <h2>HomePage</h2>
//         //     <p>{name} is {age} years old</p>
//         //     <button onClick = {handleClick}>Click Me</button>
//         //     {/* <button onClick = {() => handleClickAgain('hamisi')}>Click Me again</button> */}
//         // </div>
//      );
// }
 
// export default Home;