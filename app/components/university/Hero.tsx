import Image from "next/image";
import Container from "../Container";
import FeatImage01 from "@/public/images/parcel.jpg";
import FeatImage02 from "@/public/images/docusign.png";
import FeatImage03 from "@/public/images/pms.png";
import FeatImage04 from "@/public/images/guidance2.jpg";

const data = [
  {
    title: "Five ways digital artists make money online",
    date: "6/22/2022",
    message:
      "Every new technology has created new categories of art, and now artists have the most powerful artistic tools of all: the internet and integrated circuits. Together, they’ve made digital art possible, and increased by orders of magnitude the opportunities for artists to sell it. ",
    picture: FeatImage01,
  },
  {
    title: "Five ways digital artists make money online",
    date: "6/23/2022",
    message:
      "Every new technology has created new categories of art, and now artists have the most powerful artistic tools of all: the internet and integrated circuits. Together, they’ve made digital art possible, and increased by orders of magnitude the opportunities for artists to sell it. ",
    picture: FeatImage02,
  },
  {
    title: "Five ways digital artists make money online",
    date: "6/24/2022",
    message:
      "Every new technology has created new categories of art, and now artists have the most powerful artistic tools of all: the internet and integrated circuits. Together, they’ve made digital art possible, and increased by orders of magnitude the opportunities for artists to sell it. ",
    picture: FeatImage03,
  },
  {
    title: "Five ways digital artists make money online",
    date: "6/25/2022",
    message:
      "Every new technology has created new categories of art, and now artists have the most powerful artistic tools of all: the internet and integrated circuits. Together, they’ve made digital art possible, and increased by orders of magnitude the opportunities for artists to sell it. ",
    picture: FeatImage04,
  },
];

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative h-auto w-auto flex justify-center">
      <Container>
        <div className="flex flex-wrap">
          {data.map((news) => (
            <div className="w-full lg:w-1/2 p-4" key={news.date}>
              <div className="">
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal h-">
                  <Image
                    src={news.picture}
                    alt="picture"
                    className="w-full h-60"
                  />
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      Can coffee make you a better developer?
                    </div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="flex items-center">
                    {/* <img
                      className="w-10 h-10 rounded-full mr-4"
                      src="/img/jonathan.jpg"
                      alt="Avatar of Jonathan Reinink"
                    /> */}
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Jonathan Reinink
                      </p>
                      <p className="text-gray-600">Aug 18</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
