import React from "react";
import Action from "../component/playlist/Action";
import Playlist from "../component/playlist/Playlist";
import Head from "../component/Head";
import Controls from "../component/Controls";



const AudioPlayer = () => {
  return (
    <div className="audioplayer">
<div className="inside_content">
<Head />
        <Action />
        <Playlist />
</div>
        <Controls />
    </div>
  )
}

export default AudioPlayer