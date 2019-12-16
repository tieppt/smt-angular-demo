import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

function getDisplayMedia(contraints: MediaStreamConstraints): Promise<MediaStream> {
  if (navigator.mediaDevices.getDisplayMedia) {
    return navigator.mediaDevices.getDisplayMedia(contraints);
  }

  return navigator.getDisplayMedia(contraints);
}

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'smt';
  disabled = false;
  error: string;
  displayMedia$: Observable<MediaStream>;
  ngOnInit() {
  }
  shareScreen() {
    if (!navigator.getDisplayMedia && !navigator.mediaDevices.getDisplayMedia) {
      const error = 'Your browser does NOT supports getDisplayMedia API.';
      this.error = error;
      throw new Error(error);
    }

    const videoContrains: MediaTrackConstraints = {
      width: 1280,
      height: 720
    };

    const mediaStreamContraints: MediaStreamConstraints = {
      audio: false,
      video: videoContrains
    };
    this.displayMedia$ = from(getDisplayMedia(mediaStreamContraints));
  }
}
