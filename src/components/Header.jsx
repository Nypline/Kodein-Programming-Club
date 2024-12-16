import {
  kodeinSch,
  englishCamp,
  kodeinClub,
  kodein,
  quranCamp,
  kajianIslam,
} from "../assets";

const Header = () => {
  return (
    <>
      <main className="">
        <section
          id="hero"
          className="h-[35rem] w-[100%] bg-gray-300 flex justify-center items-center flex-col gap-10"
        >
          <h1 className="text-8xl font-bold text-center">
            Sekolah Developer <br /> Indonesia
          </h1>
          <p className="text-3xl">Lorem ipsum dolor sit</p>
        </section>
        <section
          id="menu"
          className="w-full h-20  bg-slate-400 flex p-3 items-center gap-6"
        >
          <p className="font-bold">English Camp</p>
          <p className="font-bold">Kodein Club</p>
          <p className="font-bold">Qur'an Camp</p>
        </section>
        <section className="flex">
          <div className="w-[55rem] h-fit p-10 flex flex-col gap-5">
            <div className="w-[50rem] h-[30rem] bg-white p-3 flex flex-col gap-4 border-4 rounded-lg">
              <h2 className="text-2xl ">English Camp</h2>
              <img
                src={englishCamp}
                alt="English Camp"
                className="w-[48rem] h-72"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deleniti, tempora maxime dolore officiis optio, placeat debitis
                amet aliquid veniam laudantium. Ipsum quod, beatae possimus
                temporibus porro facilis at dolore.
              </p>
              <p></p>
            </div>
            <div className="w-[50rem] h-[30rem] bg-white p-3 flex flex-col gap-4 border-4 rounded-lg">
              <h2 className="text-2xl ">Kodein Club</h2>
              <img
                src={kodeinClub}
                alt="English Camp"
                className="w-[48rem] h-72"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deleniti, tempora maxime dolore officiis optio, placeat debitis
                amet aliquid veniam laudantium. Ipsum quod, beatae possimus
                temporibus porro facilis at dolore.
              </p>
              <p></p>
            </div>
            <div className="w-[50rem] h-[65rem] bg-white p-3 flex flex-col gap-4 border-4 rounded-lg">
              <h2 className="text-2xl ">Qur'an Camp</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur dicta sapiente fugit praesentium, culpa soluta
                veniam perspiciatis non est nam dolor repellat ipsa corporis
                reprehenderit reiciendis sequi quod quibusdam alias.
              </p>
              <img
                src={quranCamp}
                alt="English Camp"
                className="w-[48rem] h-72"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deleniti, tempora maxime dolore officiis optio, placeat debitis
                amet aliquid veniam laudantium. Ipsum quod, beatae possimus
                temporibus porro facilis at dolore.
              </p>
              <h2 className="text-2xl ">Kajian Islam</h2>
              <img
                src={kajianIslam}
                alt="English Camp"
                className="w-[48rem] h-72"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deleniti, tempora maxime dolore officiis optio, placeat debitis
                amet aliquid veniam laudantium. Ipsum quod, beatae possimus
                temporibus porro facilis at dolore.
              </p>
            </div>
          </div>
          <div className="w-[40rem] h-[35rem] flex justify-center items-center">
            <div className=" w-[30rem] h-[30rem] border-4 rounded-lg ">
              <div className="flex items-center p-8 flex-col gap-5">
                <img
                  src={kajianIslam}
                  alt="English Camp"
                  className="w-80 h-52 "
                />
                <h2 className="text-2xl ">Sekolah Developer Indonesia</h2>
              </div>
              <div className="pl-5 flex flex-col gap-3">
                <h6 className="font-bold text-">informasi lainnya</h6>
                <p>alamat : Lorem ipsum dolor </p>
                <p>telepon : 8xxxxx</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Header;
