import youtubeIcon from "../../imgs/youtube-icon-svgrepo-com.webp";
import tiktokIcon from "../../imgs/tictokIcon.webp";
import instagramIcon from "../../imgs/instagram-1-svgrepo-com.webp";
import facebookIcon from "../../imgs/facebook-svgrepo-com.webp";
import telegramIcon from "../../imgs/telegram-svgrepo-com.webp";
import snapchatIcon from "../../imgs/snapchat-snap-chat-svgrepo-com.webp";
import shareIcon from "../../imgs/share-arrow-svgrepo-com.webp";

import mainVideo from "../../video/main-video.mp4";
import mainVideoWebM from "../../video/main-video.webm";
import { Icons } from "./Icons";

export function VideoHero() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center h-96">
      <div className="lg:mr-0 flex justify-center">
        <div className="relative max-h-max rounded-xl  w-40 md:w-52 lg:w-60 border-2 left-2  border-white shadow-lg shadow-gray-400">
          <Icons
            position={"-left-16 -top-4 -rotate-6 lg:-left-24  w-14 lg:w-20"}
            icon={youtubeIcon}
            alt={"youtube icon"}
          />
          <Icons
            position={"-left-12 top-1/3 -rotate-6 lg:-left-20 w-12 lg:w-16"}
            icon={telegramIcon}
            alt={"telegram icon"}
          />
          <Icons
            position={
              "-right-12  bottom-1/3 lg:bottom-32 -rotate-6 lg:-right-24 p-1 w-10 lg:w-14"
            }
            icon={shareIcon}
            alt={"share arrow icon"}
          />

          <Icons
            position={"-left-14 bottom-8 rotate-6 lg:-left-20 w-16 lg:w-24"}
            icon={tiktokIcon}
            alt={"tiktok icon"}
          />
          <Icons
            position={"-right-12 -bottom-2 rotate-6 lg:-right-20 w-16 lg:w-24"}
            icon={instagramIcon}
            alt={"instagram icon"}
          />
          <Icons
            position={"-right-10 top-4 -rotate-6 lg:-right-14 w-12 lg:w-16"}
            icon={facebookIcon}
            alt={"facebook icon"}
          />
          <Icons
            position={
              "-right-14 bottom-2/4 rotate-6  lg:-right-2/4 w-12 lg:w-16"
            }
            icon={snapchatIcon}
            alt={"snapchat icon"}
          />
          <video
            className="rounded-xl w-full h-full shadow-md "
            autoPlay
            loop
            muted
          >
            <source src={mainVideo} type="video/mp4" />
            <source src={mainVideoWebM} type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}
