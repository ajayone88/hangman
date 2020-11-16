import { categorie } from '../categorie.modal';

export class categorieService{
    categories: categorie[] = [
        new categorie(9, 'General Knowledge'),
        new categorie(10, 'Entertainment: Books'),
        new categorie(11, 'Entertainment: Film'),
        new categorie(12, 'Entertainment: Music'),
        new categorie(13, 'Entertainment: Musicals & Theatres'),
        new categorie(14, 'Entertainment: Television'),
        new categorie(15, 'Entertainment: Video Games'),
        new categorie(16, 'Entertainment: Board Games'),
        new categorie(29, 'Entertainment: Comics'),
        new categorie(31, 'Entertainment: Japanese Anime & Manga'),
        new categorie(32, 'Entertainment: Cartoons & Animations'),
        new categorie(17, 'Science & Nature'),
        new categorie(18, 'Science & Computer'),
        new categorie(30, 'Science & Gadgets'),
        new categorie(19, 'Science & Mathematics'),
        new categorie(20, 'Mythology'),
        new categorie(21, 'Sports'),
        new categorie(22, 'Geography'),
        new categorie(23, 'History'),
        new categorie(24, 'Politics'),
        new categorie(25, 'Arts'),
        new categorie(26, 'Celebrities'),
        new categorie(27, 'Animals'),
        new categorie(28, 'Vehicals'),
    ];

    constructor(){
      this.categories.forEach(categorie =>categorie.color = this.getRandomColor());
    }

    getCategories(){
        return this.categories.slice();
    }

    getCategorie(id: number){
      console.log(id);
      return this.categories.find(categorie => categorie.id === +id);
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
}