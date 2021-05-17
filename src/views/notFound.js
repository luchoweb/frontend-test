import Button from "../components/button";

import NotFoundImg from "../assets/images/image-404.png";

import "../styles/notFound.scss";

const NotFoundView = () => {
  return (
    <section className="not-found">
      <div className="not-found__col not-found__col--text">
        <h2 className="not-found__title">Uh oh.</h2>
        <p className="not-found__description">We ran into an issue, but don't worry, we'll take care of it for sure.</p>
        <Button
          text="Back to safety"
          cssClasses="button--primary"
          handleClick={() => {window.history.back()}}
        />
      </div>
      <div className="not-found__col not-found__col--banner">
        <figure className="banner">
          <img src={NotFoundImg} alt="vector" className="banner__img"/>
        </figure>
      </div>
    </section>
  )
}

export default NotFoundView;
