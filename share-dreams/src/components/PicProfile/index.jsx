import React from "react";

import { Image, ImageConteiner } from "./style";

export default function PicProfile({ image, size }) {
  return (
    <ImageConteiner size={size}>
      <Image source={{uri: image}} />
    </ImageConteiner>
  );
}
