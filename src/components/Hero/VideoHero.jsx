import youtubeIcon from "../../imgs/youtube-icon-svgrepo-com.png";
import tiktokIcon from "../../imgs/tictokIcon.png";
import instagramIcon from "../../imgs/instagram-1-svgrepo-com.png";
import facebookIcon from "../../imgs/facebook-svgrepo-com.png";
import mainVideo from "../../video/main-video.mp4";
import { Icons } from "./Icons";

export function VideoHero() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center rota">
      <div className="lg:mr-0  flex justify-center">
        <div className="relative max-h-max rounded-xl  w-40 lg:w-60 border-2  border-white shadow-lg shadow-gray-400">
          <Icons
            position={"-left-16 top-4 -rotate-6 lg:-left-24"}
            icon={youtubeIcon}
            alt={"youtube icon"}
          />

          <Icons
            position={"-left-14 bottom-8 rotate-6 lg:-left-20"}
            icon={tiktokIcon}
            alt={"tiktok icon"}
          />
          <Icons
            position={"-right-12 -bottom-2 rotate-6 lg:-right-16"}
            icon={instagramIcon}
            alt={"instagram icon"}
          />
          <Icons
            position={"-right-10 top-8 -rotate-6 lg:-right-14"}
            icon={facebookIcon}
            alt={"facebook icon"}
          />
          <video
            src={mainVideo}
            className="rounded-xl w-full h-full object-cover shadow-md "
            autoPlay
            loop
          />
        </div>
      </div>
    </div>
  );
}
