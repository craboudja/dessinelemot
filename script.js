const mots = ['reine', 'lune', 'boule de Noël', 'maison', 'princesse', 'chien', 'oeuf de Pâques',
  'étoiles', 'prince', 'playmobil', 'écharpe', 'nuages', 'sirene', 'écureuil',
  'hippopotame', 'crocodile', 'piscine', 'grenouille', 'éléphant', 'château',
  'licorne', 'sapin', 'soleil', 'Noël', 'renard', 'enfant', 'coquillage', 'plage',
  'crabe', 'chat', 'échelle', 'loup', 'lapin', 'pierre', 'arbre', 'rhinocéros',
  'buisson', 'hérisson', 'escargot', 'limace', 'jardin', 'télévision', 'armoire',
  'tiroir', 'chaussure', 'chaussettes', 'souris', 'pull', 'jupe', 'roi', 'chemin',
  'cheval', 'chevalier', 'épée', 'pomme', 'poire', 'banane', 'poupée', 'valise']

const sorted = mots.sort()

const randomizeWord = words => {
    const randomize = Math.floor(Math.random() * words.length + 1)
    return words[randomize]
}

const wordDisplayDiv = document.querySelector('.word')
const wordButton = document.querySelector('.word-button')


wordButton.addEventListener('click', function() {
    wordButton.disabled = true
    wordDisplayDiv.innerHTML += randomizeWord(mots)
    setInterval(() => {
        wordDisplayDiv.innerHTML = ''
        wordButton.disabled = false
    }, 10000)
})
