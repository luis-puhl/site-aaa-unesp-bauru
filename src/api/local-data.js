import data from './aaa-unesp-bauru-export.json'

function mapKeyToName (key) {
  switch (key) {
    case 'gestoes':
      return 'Gestões'
    case 'treinos':
      return 'Treinos'
    case 'torcidas':
      return 'Torcidas'
    case 'produtos':
      return 'Produtos'
    case 'parceiros':
      return 'Clube de Parceiros'
    case 'eventos':
      return 'Galeria de Eventos'
    default:
      return 'section'
  }
}

export let sections = [
  { gestoes: data['gestoes'] },
  { treinos: data['treinos'] },
  { torcidas: data['torcidas'] },
  { produtos: data['produtos'] },
  { parceiros: data['parceiros'] },
  { eventos: data['eventos'] }
]
.map(
  section => ({
    items: Object.values(section)[0],
    k: Object.keys(section)[0]
  })
).map(
  section => ({
    items: section.items,
    config: {
      htmlID: section.k,
      nome: mapKeyToName(section.k)
    }
  })
)

export let posts = Object.values(data)
  .reduce(
    (posts, section) => posts.concat(section),
    []
  )
