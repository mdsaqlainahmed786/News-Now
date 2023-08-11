import React, { Component } from "react";
import Newsdisplay from "./Newsdisay";
import axios from "axios";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "../NavBar/Loader";
import Footer from "../Footer/Footer";

class NewsComp extends Component {
  static defaultProps = {
    category: "general",//setting defaultProps
    pages: 10,
    country: "in"
  }

  static propTypes = {
    //declaring the type of default props.
    category: PropTypes.string,
    pages: PropTypes.number,
    country: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      //articles stores the api data in array so, empty array in state
      errorMsg: "",//try catch error message.
      page: 1,//current page
      total: 0//total articles be zero.
    }
  }

  componentDidMount() {
    //fetching api using axios.get() in componentDidMount to render it once
      this.fetchData()
    //function of fetching data
  }

  fetchData = () => {
    //fetching the news api!.
    axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0bd83903bf0471fac623945fab83b49&page=${this.state.page}&pageSize=${this.props.pages}`)
    //(country, category, page, pageSize):getting from props.
      .then(response => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...response.data.articles],
          total: response.data.totalResults
        }));
      }).catch(error => {
        this.setState({ errorMsg: "⚠️ Something went wrong!!.." });
      });
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  }

  render() {
    const { articles, errorMsg} = this.state;
    return (
      <>
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchData}
          hasMore={articles.length !== this.state.total}
        >
          {articles.length === 0 && errorMsg===""?(
            <Spinner />
          ) : (
              articles.map((item) => (
                <div key={item.id}>
                  <Newsdisplay
                    title={item.title}
                    description={item.description == null ? <p>Want to know more? Click on Read more!!</p> : item.description}
                    url={item.url}
                    imageURL={item.urlToImage}
                    author={item.author == null ? <b>Internet Source</b> : item.author}
                    published={item.publishedAt}
                    name={item.source.name}
                  />
                </div>
              ))
            )}
        </InfiniteScroll>

        {articles.length !== 0 && (
          <>
            <h2 style={{ textAlign: "center" }}>{this.props.heading}</h2>
            <div><Footer /></div>
          </>
        )}

        {errorMsg ? (
          <h2 style={{
            color: "red",
            textAlign: "center",
            paddingTop: "30px"
          }}>{errorMsg}</h2>
        ) : null}

      </>
    );
  }
}

export default NewsComp;
