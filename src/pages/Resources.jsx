import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div>
      <h1 className="resources-title-main"> Helpful Links and Resources </h1>
      <div>
        <div className="resources-container"> </div>

        <h3 className="resources-title"> Links </h3>

        <p className="news-links-container">
          <p className="helpful-links-one">
            <a href="https://www.businessinsider.com/sherry-turkle-why-tech-moguls-send-their-kids-to-anti-tech-schools-2017-11">
              {" "}
              An MIT psychologist explains why so many tech moguls send their
              kids to anti-tech schools{" "}
            </a>
          </p>

          <p className="helpful-links-one">
            <a href="https://www.cnbc.com/2019/06/07/waldorf-schools-teach-without-technology-heres-what-it-is-like.html">
              {" "}
              Inside the tech-free school where high-tech parents are sending
              their kids
            </a>
          </p>
        </p>

        <p className="helpful-links">
          <a href="https://www.waldorfpublications.org/"> Publications </a>
        </p>

        <p className="helpful-links">
          <a href="https://rudolfsteinerlibrary.org/">
            Rudolf Steiner Library{" "}
          </a>
        </p>

        <p className="helpful-links">
          <a href="https://earthschooling.info/thebearthinstitute/product-category/waldorf-books/">
            Waldorf Books{" "}
          </a>
        </p>

        <p className="helpful-links">
          <a href="https://steinerbooks.org/">Steiner Books </a>
        </p>

        <p className="helpful-links">
          <a href="https://www.vrijeschoolliederen.nl/en/about-this-website/songs-to-share/">
            Waldorf Songs
          </a>
        </p>

        <h2 className="resources-title"> Articles </h2>

        <p className="helpful-links">
          <a href="https://waldorflibrary.org/images/stories/articles/WJP17rsteiner1.pdf">
            {" "}
            How to Create, Tell and Recall a Story by Rudolf Steiner{" "}
          </a>
        </p>

        <p className="helpful-links">
          <a href="https://waldorflibrary.org/images/stories/articles/rbrief59_grimley.pdf">
            {" "}
            Artistic Feeling in the Art of Education by Michael Grimley{" "}
          </a>
        </p>

        <p className="helpful-links">
          <a href="https://waldorflibrary.org/images/stories/Journal_Articles/chilquestions.pdf">
            {" "}
            Children's Questions Vol. 22 Winter, 1962 No.2{" "}
          </a>
        </p>

        <p className="helpful-links">
          <a href="https://waldorflibrary.org/images/stories/articles/steinerfairytales1.pdf">
            {" "}
            Interpretation of Fairy Tales by Rudolf Steiner{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resources;
