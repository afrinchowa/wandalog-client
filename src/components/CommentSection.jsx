/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [showForm, setShowForm] = useState(false); // Toggle for form

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/comments/${blogId}`);
        const data = Array.isArray(response.data) ? response.data : [];
        setComments(data);
      } catch (error) {
        setError("Error fetching comments");
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [blogId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/comments", { ...newComment, blogId });
      setNewComment({ author: "", content: "" });
      const response = await axios.get(`http://localhost:5000/comments/${blogId}`);
      setComments(response.data);
      setShowForm(false); // Collapse form after submission
    } catch (error) {
      console.error("Error posting comment:", error);
      setError("Error posting comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Comments</h3>

      {comments.length > 0 && (
        <button onClick={() => setShowComments(!showComments)} style={styles.toggleButton}>
          {showComments ? "Hide Comments" : "Show All Comments"}
        </button>
      )}

      {loading && <p style={styles.loading}>Loading comments...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {showComments && (
        <div style={styles.commentsContainer}>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} style={styles.commentBox}>
                <p style={styles.commentAuthor}>{comment.author}</p>
                <p style={styles.commentText}>{comment.content}</p>
              </div>
            ))
          ) : (
            <p style={styles.noComments}>No comments available.</p>
          )}
        </div>
      )}

      {/* Toggle Button for Comment Form */}
      <button onClick={() => setShowForm(!showForm)} style={styles.toggleFormButton}>
        {showForm ? "Cancel" : "Add a Comment"}
      </button>

      {showForm && (
        <form onSubmit={handleCommentSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Your name"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            style={styles.input}
            required
          />
          <textarea
            placeholder="Your comment"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>Submit Comment</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#333",
  },
  toggleButton: {
    marginBottom: "10px",
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  toggleFormButton: {
    marginBottom: "15px",
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "#17a2b8",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  loading: {
    color: "#777",
  },
  error: {
    color: "red",
  },
  commentsContainer: {
    marginBottom: "20px",
  },
  commentBox: {
    backgroundColor: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    marginBottom: "10px",
    border: "1px solid #e0e0e0",
  },
  commentAuthor: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  commentText: {
    margin: 0,
  },
  noComments: {
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default CommentSection;
