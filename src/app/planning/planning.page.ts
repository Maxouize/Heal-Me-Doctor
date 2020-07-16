import { StoreManagerService } from './../services/store-manager.service';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { IEvent } from '../models/event-planning';
import { formatDate } from '@angular/common';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-planning',
  templateUrl: 'planning.page.html',
  styleUrls: ['planning.page.scss']
})
export class PlanningPage implements OnInit {

  event = {
      id: '',
      title: '',
      desc: '',
      startTime: '',
      endTime: ''
    };

  minDate = new Date().toISOString();
  collapseCard = true;
  eventSource: IEvent[] = [];
  calendar = {
    mode: 'week',
    currentDate: new Date()
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private storeManagerService: StoreManagerService,
              private alertCtrl: AlertController,
              @Inject(LOCALE_ID) private locale: string,
              private toastController: ToastController) {}

  ngOnInit() {
    this.resetEvent();
    this.storeManagerService.getPlanning().then(planning => {
      this.eventSource = planning;
      this.myCal.loadEvents();
    });
  }

  resetEvent() {
    this.event = {
      id: null,
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

  addEvent() {
    this.storeManagerService.getMaxIdEvent().then(async maxId => {
      const eventCopy: IEvent = {
        id: maxId + 1,
        title: this.event.title,
        desc: this.event.desc,
        startTime: new Date(this.event.startTime),
        endTime: new Date(this.event.endTime)
      };
      this.eventSource.push(eventCopy);
      this.storeManagerService.setEventPlanning(eventCopy);
      this.myCal.loadEvents();
      this.collapseCard = true;
      this.resetEvent();

      const toast = await this.toastController.create({
        message: 'Prise de rendez-vous confirmée.',
        duration: 5000,
        color: 'success',
        position: 'top',
        buttons: [
          {
            side: 'end',
            icon: 'checkmark-done-outline',
          }
        ]
      });
      toast.present();
    });
  }

  changeMode(mode: string) {
    this.calendar.mode = mode;
  }

  back() {
    const swipper = document.querySelector('.swiper-container')['swiper'];
    swipper.slidePrev();
  }

  next() {
    const swipper = document.querySelector('.swiper-container')['swiper'];
    swipper.slideNext();
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onCurrentDateChanged() {

  }

  reloadSource() {

  }

  async onEventSelected(event) {
    const start = formatDate(event.startTime, 'medium', this.locale);
    const end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'Du: ' + start + '<br><br> au: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  onViewTitleChanged(){

  }

  onTimeSelected(ev: { selectedTime: Date, events: any[] }){
    if (ev.events !== undefined && ev.events.length === 0) {
      this.event = {
        id: null,
        title: '',
        desc: '',
        startTime: ev.selectedTime.toISOString(),
        endTime: new Date(ev.selectedTime.setHours(ev.selectedTime.getHours() + 1)).toISOString()
      };
      this.collapseCard = false;
    }
  }
}
