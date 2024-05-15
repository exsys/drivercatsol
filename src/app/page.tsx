"use client";
import { useRef, useState } from "react";
import DexScreener from "@/components/icons/dexscreener";
import Jupiter from "@/components/icons/jupiter";
import Telegram from "@/components/icons/telegram";
import TwitterX from "@/components/icons/twitterx";
import Link from "next/link";
//import styles from "./home.module.sass";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [soundOn, setSoundOn] = useState<boolean>(false);
  const vidRef: any = useRef();

  const toggleMute = () => {
    const sound = document.getElementById("video-sound") as HTMLAudioElement;
    sound.muted = !sound.muted;
    setSoundOn(!sound.muted);
  }

  return (
    <main className="h-full text-white">
      <audio id="video-sound" src="/sounds/audio.mp3" loop autoPlay muted />

      <div className="h-full flex flex-col justify-center items-center relative gap-10 sm:gap-6">
        <div className="absolute top-16 left-1/2 -translate-x-1/2">
          <div className="flex justify-center items-center gap-10">
            <Link href={"https://twitter.com/drivercatsolana"} target="_blank"
              className="cursor-pointer">
              <TwitterX className="w-16 h-16 fill-white hover:fill-gray-400 transition-all" />
            </Link>

            <Link href={"https://t.me/drivercatportal"} target="_blank"
              className="cursor-pointer">
              <Telegram className="w-12 h-12 fill-white hover:fill-gray-400 transition-all" />
            </Link>

            <Link href={"https://dexscreener.com/solana/c15n3awpqe7mqpolozo7tzted29ma4panpbva4s3d5lz"}
              className="cursor-pointer" target="_blank">
              <DexScreener className="w-16 h-16 fill-white hover:fill-gray-400 transition-all" />
            </Link>

            <Link href={"https://jup.ag/swap/SOL-oBeUgUJoCDueVUkG6pxxgjWjW79EhsttNF2FjDBnYuy"} target="_blank"
              className="cursor-pointer">
              <Jupiter className="w-12 h-12 fill-white hover:fill-gray-400 transition-all" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center w-full h-full">
          <video autoPlay loop muted ref={vidRef}>
            <source src="/videos/rainbowroad.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2`}>
          <h1 className={`text-7xl font-semibold text-outline`}>
            $DAT
          </h1>
        </div>

        <div className="w-3/5 mx-auto absolute bottom-10 z-50">
          <div className="flex justify-end">
            {soundOn ? (
              <SpeakerWaveIcon className="w-10 h-10 drop-shadow-main cursor-pointer stroke-2"
                onClick={() => toggleMute()} />
            ) : (
              <SpeakerXMarkIcon className="w-10 h-10 drop-shadow-main cursor-pointer stroke-2"
                onClick={() => toggleMute()} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
