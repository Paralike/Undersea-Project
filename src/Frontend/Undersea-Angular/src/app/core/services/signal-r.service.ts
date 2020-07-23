import { Injectable, EventEmitter } from '@angular/core';
import * as SignalR from '@aspnet/signalr';
import { environment } from '../../../environments/environment';
import { url } from 'inspector';
import { SignalViewModel } from '../models/signal-view-model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: SignalR.HubConnection;
  signalReceived = new EventEmitter<SignalViewModel>();

  constructor() {
    this.buildConnection();
    this.startConnection();
   }

  public buildConnection = () => {
    const signalUrl = environment.ApiBaseUrl + '/signalHub';
    this.hubConnection = new SignalR.HubConnectionBuilder()
      .withUrl(signalUrl)
      .build();
  }

  public startConnection = () => {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection Started...');
        this.registerSignalEvents();
      })
      .catch(err => {
        console.log('Error while starting connection' + err);
      });
  }

  private registerSignalEvents() {
    this.hubConnection.on('NextTurn', (data: SignalViewModel) => {
      this.signalReceived.emit(data);
    });
  }
}
