import { Music } from "lucide-react";

type Props = {
  title: string;
  artist: string;
  album: string;
  year: number;
  duration: number;
  genre: string;
  lyrics: string;
  cover: string;
};

export default function Song(props: Props) {
  return (
    <div className="flex flex-col items-center">
      {props.cover ? (
        <img
          src={props.cover}
          alt={props.title}
          className="rounded-full w-24 h-24"
        />
      ) : (
        <Music size={64} className="text-purple-500" />
      )}

      <p className="text-gray-600 text-sm font-semibold">{props.title}</p>
      <p className="text-sm text-gray-400 font-medium">{props.artist}</p>
      <progress value={props.duration/8} max={props.duration} className="rounded-2xl text-amber-100 bg-amber-300 max-w-sm" />
      <p className="text-sm text-gray-400 font-medium">
        {props.year} - {props.genre}
      </p>
    </div>
  );
}
