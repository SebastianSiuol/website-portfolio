import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/shadcn/dialog"

import './CarouselPictureView.css';

type CarouselPictureView = {
    children: React.ReactNode;
    imgSrc: string;
}

function CarouselPictureView({children, imgSrc}: CarouselPictureView) {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent className="carousel-dialog-content" showCloseButton={false}>
                <DialogHeader className="carousel-dialog-header">
                    <DialogDescription className="carousel-media-container">
                            <img src={imgSrc}/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default CarouselPictureView;
