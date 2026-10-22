Vue.createApp({
  data() {
    return {
      recherche: '',
      filtre: '',
      detail: null,
      reappro: null,
      qteReappro: null,
      erreur: '',
      idSuivant: 7,
      categories: ['Boissons', 'Snacks', 'Sandwichs'],
      nouvelArticle: {
        nom: '',
        categorie: '',
        quantite: null,
        prixUnitaire: null,
        seuilAlerte: null
      },
      articles: [
        { id: 1, nom: 'Eau minérale', categorie: 'Boissons', quantite: 24, prixUnitaire: 4, seuilAlerte: 10 },
        { id: 2, nom: 'Jus d\'orange', categorie: 'Boissons', quantite: 5, prixUnitaire: 7, seuilAlerte: 8 },
        { id: 3, nom: 'Café', categorie: 'Boissons', quantite: 0, prixUnitaire: 5, seuilAlerte: 5 },
        { id: 4, nom: 'Chips', categorie: 'Snacks', quantite: 15, prixUnitaire: 3, seuilAlerte: 6 },
        { id: 5, nom: 'Barre chocolatée', categorie: 'Snacks', quantite: 3, prixUnitaire: 6, seuilAlerte: 5 },
        { id: 6, nom: 'Sandwich thon', categorie: 'Sandwichs', quantite: 0, prixUnitaire: 15, seuilAlerte: 4 }
      ]
    }
  },
  computed: {
    liste() {
      const texte = this.recherche.trim().toLowerCase()
      return this.articles.filter(article =>
        article.nom.toLowerCase().includes(texte)
        && (this.filtre === '' || article.categorie === this.filtre)
      )
    },
    valeurStock() {
      return this.articles.reduce((total, article) => total + article.quantite * article.prixUnitaire, 0)
    },
    nbRupture() {
      return this.articles.filter(article => article.quantite === 0).length
    }
  },
  methods: {
    plus(article) {
      article.quantite++
    },
    moins(article) {
      if (article.quantite > 0) {
        article.quantite--
      }
    },
    voirDetail(article) {
      this.detail = this.detail === article.id ? null : article.id
    },
    supprimer(article) {
      this.articles = this.articles.filter(a => a.id !== article.id)
      if (this.detail === article.id) {
        this.detail = null
      }
      if (this.reappro === article.id) {
        this.reappro = null
      }
    },
    ajouter() {
      const a = this.nouvelArticle
      if (a.nom.trim() === '' || a.categorie === '' || a.quantite === null || a.prixUnitaire === null || a.seuilAlerte === null
        || a.quantite < 0 || a.prixUnitaire < 0 || a.seuilAlerte < 0) {
        this.erreur = 'Veuillez remplir correctement tous les champs.'
        return
      }
      this.articles.push({
        id: this.idSuivant++,
        nom: a.nom.trim(),
        categorie: a.categorie,
        quantite: a.quantite,
        prixUnitaire: a.prixUnitaire,
        seuilAlerte: a.seuilAlerte
      })
      this.nouvelArticle = { nom: '', categorie: '', quantite: null, prixUnitaire: null, seuilAlerte: null }
      this.erreur = ''
    },
    ouvrirReappro(article) {
      this.reappro = this.reappro === article.id ? null : article.id
      this.qteReappro = null
    },
    reapprovisionner(article) {
      if (this.qteReappro > 0) {
        article.quantite += this.qteReappro
        this.reappro = null
        this.qteReappro = null
      }
    }
  }
}).mount('#app')
