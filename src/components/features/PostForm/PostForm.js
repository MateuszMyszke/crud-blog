import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, shortDescription, content, publishedDate, author});
  }

  return(
    <Form onSubmit={handleSubmit}> 

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title </Form.Label>
        <Form.Control  placeholder='Enter title' value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Author </Form.Label>
        <Form.Control  placeholder='Enter author' value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group> 

      <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Short description </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Leave a comment here' value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group> 

      <ReactQuill value={content} onChange={setContent} placeholder='Leave a comment here' />

      <Button variant="primary" onClick={handleSubmit}>
       {actionText}
      </Button>
    </Form>

  );
};

export default PostForm;