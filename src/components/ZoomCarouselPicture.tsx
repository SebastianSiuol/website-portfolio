import React from "react";
import Zoom from "react-medium-image-zoom";

type ZoomCarouselPictureProps = {
    children: React.ReactNode;
};

function ZoomCarouselPicture({ children }: ZoomCarouselPictureProps) {
    return <Zoom wrapElement="span">{children}</Zoom>;
}

export default ZoomCarouselPicture;
