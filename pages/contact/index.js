import GoBack from "../../components/common/go-back/GoBack";

export default function Contact(params) {
  return (
    <div className="contact ">
      <h1 className="mb-2 text-secondary-300">Contact me</h1>
      <div className="mb-6">
        <p>
          I’m interested in physical or remote opportunities to work in
          ambitious or large scale projects with positive people.
        </p>
        <p>
          However, if you have any query or question, i am available here
          <span
            className="text-secondary-400 mx-1 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/md-amanullah-sayeem-77922b18a/",
                "_blank"
              )
            }
          >
            LinkedIn
          </span>
          or just contact by
          <span
            className="text-secondary-400 mx-1 cursor-pointer"
            onClick={() => window.open("mailto:amanullahsayeem@gmail.com")}
          >
            amanullahsayeem@gmail.com
          </span>
          .
        </p>
      </div>
      <GoBack />
    </div>
  );
}
