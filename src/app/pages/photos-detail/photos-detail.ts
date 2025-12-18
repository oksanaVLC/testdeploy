import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../models/photo.interface';
import { Photos } from '../../services/photos';

@Component({
  selector: 'app-photos-detail',
  imports: [],
  templateUrl: './photos-detail.html',
  styleUrl: './photos-detail.scss',
})
export class PhotosDetail {
  photoDetail = signal<Photo>({
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: '',
  });

  constructor(
    private photosService: Photos,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  goBack() {
    this.router.navigate(['/photos']);
  }
  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier -->', identifier);

    if (identifier) {
      this.photosService.getPhotoById(identifier).subscribe((img) => {
        if (!img) {
          this.router.navigateByUrl('/');
        }
        this.photoDetail.set(img);
        console.log('photoDetail --> ', this.photoDetail());
      });
    }

    /*o hay que hacerlo así:
    if (identifier) {
  this.photosService.getPhotoById(identifier).subscribe({
    next: (img: Photo) => {
      this.photoDetail.set(img);
      console.log('photoDetail -->', this.photoDetail());
    },
    error: () => {
      this.router.navigateByUrl('/');
    },
  });
}
*/
  }
}
