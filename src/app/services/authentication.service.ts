import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

export interface User {
  nome: string;
  email: string;
  password: string;
  idade: number;
  peso: number;
  altura:  number;
  condFisica: number;
  duracaoPref: number;
  diasTreino: string;
  foco: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private user: User[];
  private currentUser!: User | null; // Track the current user

  constructor(private storage: Storage) {
    this.user = [];
    this.currentUser = null;
    this.init();
  }

  login(email: string, password: string): boolean {
    const user = this.user.find(user => user.email === email && user.password === password);
    if (user) {
      this.currentUser = user; // Assign the current user
    }
    return !!user; // Returns true if user exists, false otherwise
  }

  getCurrentUser(): User | null {
    return this.currentUser; // Return the current user
  }

  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    const storage = await this.storage.create();
    const users = await this.storage.get('users');
    if (users) {
      this.user = users;
    }
  }

  getUsers(): User[] {
    return this.user;
  }

  async insertUser(user: User) {
    this.user.push(user);
    await this.storage.set('users', this.user);
  }

}