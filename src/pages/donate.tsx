import Link from "next/link";

const Donate = () => {
  return (
    <div className="container">
      <Link href="/">
        <a>
          <button className="home">Home</button>
        </a>
      </Link>
      <h3>
        Theres a monthly and yearly cost for the server and domain name,
        therefore, if you like the website please{" "}
        <Link href="https://www.paypal.com/donate?business=79E6KMV346GKU&currency_code=USD">
          <a>donate</a>
        </Link>{" "}
        to keep the website alive.
      </h3>
    </div>
  );
};

export default Donate;
