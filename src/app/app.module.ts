import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RecipeListComponent,
    FavoritesPageComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
