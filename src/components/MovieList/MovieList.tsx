import React from "react";
import { MovieDetail } from "../../apis/MovieAPI";
import { Card, Row, Col } from 'antd';
import "./style.css";

const { Meta } = Card;

interface MovieListProp {
  movies: MovieDetail[];
}

const MovieList = (props: MovieListProp) => {
  const { movies } = props;
  return (
    <>
      {movies && movies.length > 0 ? (
        <section className="movie-list-container">
          <Row gutter={[24, 24]} justify="center">
            {movies.map((movie) => (
              <Col key={movie.imdbID}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={movie.Title} src={movie.Poster} />}
                >
                  <Meta title={movie.Title} description={movie.Year} />
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      ) : (
        <p>There is no movie found</p>
      )}
    </>
  );
};

export default MovieList;
