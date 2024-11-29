import "./ErrorDatabase.css";

const ErrorDatabase = () => {
  return (
    <div className="error__container">
      <p className="error__container--message">
        Unfortunately, access to the database is currently unavailable
        and can only be accessed locally.{" "}
      </p>
      <p>
        Here are the{" "}
        <a
          href="https://github.com/barbarakogus/boardkut_frontend"
          target="_blank"
          rel="noreferrer"
          className="error__container--link"
        >
          front-end
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/barbarakogus/boardkut_backend"
          target="_blank"
          rel="noreferrer"
          className="error__container--link"
        >
          back-end
        </a>{" "}
        repositories.
      </p>
    </div>
  )
}

export default ErrorDatabase
