import arrowIcon from '../../icons/arrow.svg';
import LargeButton from '../Partials/LargeButton';

function News() {
  return (
    <section className="news">
      <div className="main-news">
        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1536x1024.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>

        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1536x1491.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?</h2>
              <span className="article-date">2022-03-23</span>
            </div>
          </a>
        </article>
      </div>

      <div className="secondary-news">
        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1536x1024.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>
        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1536x1491.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>
        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1536x1024.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>
        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1536x1024.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>
      </div>

      <LargeButton text="Visos naujienos" url="./#" />
    </section>
  )
}

export default News;