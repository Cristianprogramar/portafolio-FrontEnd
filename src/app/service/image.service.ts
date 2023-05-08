import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, list } from '@angular/fire/storage';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    imgURL: string;
    isLoading: boolean = false;

    constructor(private storage: Storage) { }

    //Subimos la imagen a Firebase
    public uploadImage($event: any, name: string) {
        this.isLoading = true;
        const file = $event.target.files[0];
        const imgRef = ref(this.storage, `image/` + name);
        uploadBytes(imgRef, file)
            .then(() => {
                this.getImages();
                this.isLoading = false;
            })
            .catch(error => console.log(error));
    }

    //Obtenemos la URL de Firebase
    getImages() {
        const imagesRef = ref(this.storage, 'image')
        list(imagesRef)
        .then(async response => {
            for(let item of response.items) {
                this.imgURL = await getDownloadURL(item);
            }
        })
        .catch(error => console.log(error));
    }
}