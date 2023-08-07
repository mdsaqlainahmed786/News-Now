import React, { Component } from "react";
import logo from "./Breakingnews.jpeg";
import linklogo from "./link.png";

class Newsdisplay extends Component {
  constructor(props) {
    super(props);
    const articleURL = props.url;
    const storageKey = `liked-${articleURL}`;
    const isLiked = localStorage.getItem(storageKey) === 'true';
    this.state = {
      isLiked: isLiked,
    };
  }

  toggleLike = () => {
    this.setState((prevState) => {
      const isLiked = !prevState.isLiked;
      const articleURL = this.props.url;
      const storageKey = `liked-${articleURL}`;
      localStorage.setItem(storageKey, isLiked);
      return { isLiked };
    });
  };

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.props.url)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
      });
  };

  render() {
    const { title, description, url, imageURL, author, published, name } = this.props;
    const { isLiked } = this.state;
    const descriptionstyle = {
      wordWrap: "break-word",
    };
    return (
      <>
        <div className="card">
          {imageURL ? (
            <img className="image" src={imageURL} alt="" />
          ) : (
            <img className="sideimage" src={logo} alt="News" />
          )}
          <div className="container">
            <>
              <p className="newsName">{name}</p>
              <h3><b>{title}</b></h3>
              <h4 style={descriptionstyle}>Author: <b>{author}</b></h4>
              <p className="description" style={descriptionstyle}>{description}</p>
              <h4>Published: {new Date(published).toDateString()}</h4>
              <img className="copyurl" src={linklogo} alt="logo" onClick={this.copyToClipboard} />
              <p className="likebtn" onClick={this.toggleLike}>
                {isLiked ? '❤' : '🤍'}
              </p>
              <button className="button-59"><a className="button" href={url} target="_blank" rel="noreferrer">Read More</a></button>
            </>
          </div>
        </div>
      </>
    );
  }
}

export default Newsdisplay;
