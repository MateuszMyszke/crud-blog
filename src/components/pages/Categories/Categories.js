import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import getPostByCategories from '../../../redux/categoryRedux';
import Post from '../Post/Post';

const Categories = () => {
  const category = useParams();
  const categoriesPost = useSelector((state) => getPostByCategories(state, category));
  
  
  if (categoriesPost.length === 0)
    return (
      <>
        <h1>Category: {category}</h1>
        <p>No posts in this category...</p>
      </>
    );
  else
    return (
      <Row>
        {categoriesPost.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            category={post.category}
            shortDescription={post.shortDescription}
            content={post.content}
          />
        ))}
      </Row>
    );
};
 

export default Categories;