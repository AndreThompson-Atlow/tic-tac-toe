import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
  declarations: [AppComponent, GameComponent, SquareComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
