import React from "react";

const Video = () => {
  return (
    <div className=" flex justify-center items-center gap-x-5">
      <iframe
        className=" w-[600px] h-[416px]"
        src="https://youtu.be/HInd4QQrgKI?si=ai-cC-dW_FMQeNqP"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <iframe
        className=" w-[600px] h-[416px]"
        src="https://youtu.be/VPNNTbhXJR4?si=VLn81k9HhBmO_uGb"
      />
    </div>
  );
};

export default Video;
