interface IDisplayMedia {
  getDisplayMedia(constraints: MediaStreamConstraints): Promise<MediaStream>;
}
interface MediaDevices extends IDisplayMedia {
}

interface Navigator extends IDisplayMedia {
}
