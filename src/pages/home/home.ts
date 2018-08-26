import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{title: string, playlistId: string, imageUrl: string}>;

  constructor(public navCtrl: NavController) {
    var lessons = this.getLessons();

    this.items = [];

    lessons.forEach(lesson => {
      this.items.push({
        title: lesson.title,
        playlistId: lesson.playlistId,
        imageUrl: lesson.imageUrl
      });
    })
  }

  getLessons(){
    // Mock data that will be fetched from the external api
    return [
      {
        title: 'Learn To Fly',
        playlistId: 'PLhlTbW6V_soyCDqQoHQysYaGN-Hx_wz27',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/05/05/02/32/balloon-1373161_1280.jpg'
      },
      {
        title: 'Alphabets',
        playlistId: 'PLULEfTL61wpEolVATCVRxxGXQBsMbd27Q',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/03/43/asia-1822520_1280.jpg'
      },
      {
        title: 'Sample Dialogues',
        playlistId: 'PLDpDs736IBjoglmFatbFAhtofprWGK2oS',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/04/09/11/20/alphabet-3303843_1280.jpg'
      },
      {
        title: 'Another Learn To Fly',
        playlistId: 'PLu_Jc10gF_fBKe-5_RLmaF7W097vyHDHe',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/05/05/02/32/balloon-1373161_1280.jpg'
      },
      {
        title: 'Tone Drills',
        playlistId: 'PLwGjqS2iLnwV1lBfUo6VuWmMaWUJnxLMK',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/03/43/asia-1822520_1280.jpg'
      },
      {
        title: 'Immersion',
        playlistId: 'PL0_U1EyXq3GBirxEV7zxryow5A8QuAcCP',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/04/09/11/20/alphabet-3303843_1280.jpg'
      },
    ]
  }

  itemTapped(event, item){
    // We are moving to the detail page!
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}
