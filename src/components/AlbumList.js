import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  return (
    <section className="albums">
      {
        albums.map((album,index)=>
        <AlbumCard
        name={album.name}
        image={album.image}
        genre={album.genre}
        key={index}
      />
        )
      }
    </section>
  );
}

export default AlbumList;
