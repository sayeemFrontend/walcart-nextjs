import Image from "next/image";
import Link from "next/link";
import Button from "../../components/basic/button/Button";
import Meta from "../../components/common/meta-tags/Meta";

import profilePicture from "./../../assets/profilePicture.jpg";

export default function About() {
  return (
    <div className="bg-primary-800">
      <Meta />
      <div className="home container">
        <div className="px-2">
          <div className="mb-16 grid grid-flow-row lg:grid-flow-col gap-3">
            <div className="text-white">
              <h1 className="text-primary-50">
                HI,
                <br />
                I AM Sayeem, <br />
                WEB DEVELOPER
              </h1>

              <p className="mt-2 mb-4 text-secondary-300 text-sm md:text-lg">
                Full Stack Developer / Frontend Expert
              </p>
              <p>
                Well-organized person, problem solver, independent employee with
                high attention to detail. Love in sports and traveling. Fan of
                politics and debates. <br /> Interested in the entire frontend
                spectrum and working on ambitious projects with positive people.
              </p>

              <div className="w-32 mt-6 h-10 mx-auto lg:mx-0 lg:ml-12 lg:my-12 border border-secondary-200 hover:bg-secondary-300 hover:text-primary-800">
                <Button>
                  <Link href="/contact">
                    <a>Contact me !</a>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="row-start-1 lg:col-start-2 centerX">
              <Image width={500} height={500} src={profilePicture} alt="pic" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-secondary-300">My Portfolio</h1>
            <p>
              A small gallery of recent projects chosen by me. i have done them
              all together with amazing people from companies around. It only a
              drop in the ocean compared to the entire list.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
