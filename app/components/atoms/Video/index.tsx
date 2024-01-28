const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <div className="grid min-h-96 w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
      <iframe
        className="h-full w-full rounded-lg"
        width="100%"
        height="315"
        src={src.replace("watch?v=", "embed/")}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
