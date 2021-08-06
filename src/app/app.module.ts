import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { TileComponent } from './components/tile/tile.component';

const myRoutes: Routes = [
  { path: '', component: GamePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    GameBoardComponent,
    TileComponent
  ],
  imports: [
    RouterModule.forRoot(myRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
