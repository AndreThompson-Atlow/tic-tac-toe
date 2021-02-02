import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { SquareComponent } from './components/square/square.component';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [AppComponent, GameComponent, SquareComponent, OptionsComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
