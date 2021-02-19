import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import formatDate from '../../utils/formatDate'
import { connect } from 'react-redux'
import { addLike, removeLike, deletePost } from '../../actions/post'

const PostItem = ({
  auth, addLike, removeLike, deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}> {/* user is user id from post ref user ObjectId */}
          <img
            className="round-img"
            src={avatar}
            alt=""
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {formatDate(date)}</p>

        {showActions && (
          <Fragment>
            <button type="button" className="btn btn-light" onClick={() => addLike(_id)}>
              <i className="fas fa-thumbs-up"></i> {' '}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>

            <button type="button" className="btn btn-light" onClick={() => removeLike(_id)}>
              <i className="fas fa-thumbs-down"></i>
            </button>

            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion {comments.length > 0 && <span className='comment-count'>{comments.length}</span>}
            </Link>

            {!auth.loading && user === auth.user._id && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deletePost(_id)}
              >
                <i className="fas fa-times"></i>
              </button>
            )}

          </Fragment>
        )}


      </div>
    </div>
  )
}

// if no prop value is passed to the component, the prop will have default value
PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem)