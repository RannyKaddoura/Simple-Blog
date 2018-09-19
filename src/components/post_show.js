import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import axios from 'axios';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';

class PostsShow extends Component {

  componentWillMount(){
    this.props.fetchPost(this.props.params.post_id);
  }

  onDeleteHandler(){
    this.props.deletePost(this.props.params.post_id)
    .then( (res) => {
      if (res.payload.status === 200 ) {
      browserHistory.push('/');
      }
    })
  }

  render() {
    if(!this.props.post) {
      return <div>Loading .... </div>
    }
    return (
      <div>Post id : { this.props.params.post_id }
        <div className="text-right m-t-2">
        <h3>{this.props.post.title}</h3>
        <h6>Categories : {this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
          <Link to="/" className="btn btn-primary">Back to index</Link>
          <button 
            onClick={this.onDeleteHandler.bind(this)} 
            className="btn btn-danger m-l-1 pull-xs-right"
          >
            Delete Post</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);