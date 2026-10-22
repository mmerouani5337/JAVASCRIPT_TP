function livreVide() {
  return {
    title: '',
    author: '',
    year: null,
    genre: '',
    isFav: false,
    keywords: []
  }
}

Vue.createApp({
  data() {
    return {
      favorisSeulement: false,
      details: {},
      genres: ['Roman', 'Conte', 'Dystopie', 'Roman historique', 'Autobiographie', 'Informatique', 'Poésie', 'Science-fiction'],
      newBook: livreVide(),
      motCle: '',
      books: [
        { "id": 1, "title": "L'Étranger", "author": "Albert Camus", "year": 1942, "genre": "Roman", "isFav": true, "keywords": ["absurde", "Algérie"] },
        { "id": 2, "title": "Le Petit Prince", "author": "Antoine de Saint-Exupéry", "year": 1943, "genre": "Conte", "isFav": false, "keywords": ["enfance", "amitié"] },
        { "id": 3, "title": "1984", "author": "George Orwell", "year": 1949, "genre": "Dystopie", "isFav": true, "keywords": ["surveillance", "totalitarisme"] },
        { "id": 4, "title": "Les Misérables", "author": "Victor Hugo", "year": 1862, "genre": "Roman historique", "isFav": false, "keywords": ["justice", "Paris"] },
        { "id": 5, "title": "Le Pain nu", "author": "Mohamed Choukri", "year": 1973, "genre": "Autobiographie", "isFav": true, "keywords": ["Tanger", "pauvreté"] },
        { "id": 6, "title": "Clean Code", "author": "Robert C. Martin", "year": 2008, "genre": "Informatique", "isFav": false, "keywords": ["programmation", "bonnes pratiques"] }
      ]
    }
  },
  computed: {
    nbFavoris() {
      return this.books.filter(book => book.isFav).length
    },
    livresTries() {
      return [...this.books].sort((a, b) => b.year - a.year)
    },
    livresAffiches() {
      return this.favorisSeulement
        ? this.livresTries.filter(book => book.isFav)
        : this.livresTries
    },
    valide() {
      return this.newBook.title.trim() !== '' && this.newBook.author.trim() !== ''
    }
  },
  methods: {
    ajouter() {
      if (!this.valide) {
        return
      }
      const id = this.books.length > 0 ? Math.max(...this.books.map(book => book.id)) + 1 : 1
      this.books.push({
        ...this.newBook,
        keywords: [...this.newBook.keywords],
        id
      })
      this.newBook = livreVide()
      this.motCle = ''
    },
    supprimer(book) {
      this.books = this.books.filter(b => b.id !== book.id)
    },
    toggleFavori(book) {
      book.isFav = !book.isFav
    },
    ajouterMotCle() {
      const mot = this.motCle.trim()
      if (mot !== '' && !this.newBook.keywords.includes(mot)) {
        this.newBook.keywords.push(mot)
      }
      this.motCle = ''
    },
    retirerMotCle(mot) {
      this.newBook.keywords = this.newBook.keywords.filter(m => m !== mot)
    }
  }
}).mount('#app')
