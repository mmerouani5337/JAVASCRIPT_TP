// TP1 - Bases & directives - Catalogue de livres
// Complétez les TODO dans l'ordre. Le contenu de books.json est fourni à côté :
// copiez-collez son contenu comme valeur de retour de data().

const app = Vue.createApp({
  data() {
    return {
      // TODO 2 : collez ici le tableau issu de books.json
      books: [
        {
          id: 1,
          title: 'Clean Code',
          author: 'Robert C. Martin',
          year: 2008,
          genre: 'Génie logiciel',
          isFav: true
        },
        {
          id: 2,
          title: 'Introduction to Algorithms',
          author: 'Cormen, Leiserson, Rivest, Stein',
          year: 2009,
          genre: 'Algorithmique',
          isFav: false
        },
        {
          id: 3,
          title: 'Design Patterns',
          author: 'Gamma, Helm, Johnson, Vlissides',
          year: 1994,
          genre: 'Génie logiciel',
          isFav: true
        },
        {
          id: 4,
          title: 'Le Petit Prince',
          author: 'Antoine de Saint-Exupéry',
          year: 1943,
          genre: 'Littérature',
          isFav: false
        },
        {
          id: 5,
          title: 'Computer Networks',
          author: 'Andrew S. Tanenbaum',
          year: 2010,
          genre: 'Réseaux',
          isFav: false
        },
        {
          id: 6,
          title: "You Don't Know JS",
          author: 'Kyle Simpson',
          year: 2015,
          genre: 'Développement web',
          isFav: true
        }
      ],

      // utilisé au TODO 5 pour savoir, livre par livre, si on affiche les détails
      // (indexé par id : { 1: true, 2: false, ... })
      showDetails: {
        1: true,
        2: true,
        3: false,
        4: false,
        5: false,
        6: false
      }
    };
  },
  computed: {
    // TODO 8 : nombreFavoris doit retourner le nombre de livres dont isFav est vrai
    nombreFavoris() {
      return this.books.filter(book => book.isFav).length;
    },

    // TODO 10 (bonus) : booksTriesParAnnee, une version triée de this.books
    // ne modifiez jamais this.books directement dans une computed (rappel du cours) :
    // partez d'une copie avec [...this.books] avant de trier
      booksTriesParAnnee() {
      return [...this.books].sort((a, b) => a.year - b.year);
    }
  },
  methods: {
    // TODO 5 : bascule showDetails[book.id] entre true/false
    toggleDetails(book) {
      this.showDetails[book.id] = !this.showDetails[book.id];
    }
  }
});

app.mount('#app');
