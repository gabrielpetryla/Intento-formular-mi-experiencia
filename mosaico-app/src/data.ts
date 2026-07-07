export type EnterDirection = 'left' | 'right' | 'up' | 'pop'

export interface Correction {
  before: string
  struck: string
  fix: string
  after: string
}

export interface Fragment {
  id: number
  tag: string
  accent: string
  text: string
  correction?: Correction
  marginNote?: string
  videoId: string
  videoTitle: string
  cut: 'a' | 'b' | 'c' | 'd' | 'e'
  enter: EnterDirection
  gridClass: string
  photoRotation: number
}

export const fragments: Fragment[] = [
  {
    id: 1,
    tag: 'objeto directo',
    accent: '#a83226',
    text:
      'Nunca me pareció lo ideal ser el responsable de capacitar a otras personas, al menos no tan temprano. 19 años y una sala de clases. Yo tenía alumnos de 18. Me sentí como un objeto directo, pero incompleto, en busca de «la a personal» que me daría una identidad propia.',
    videoId: 'cyr7SdyHxYE',
    videoTitle: 'Volver A Los 17',
    cut: 'a',
    enter: 'left',
    gridClass: 'shard--1',
    photoRotation: -1.5,
  },
  {
    id: 2,
    tag: 'cruce',
    accent: '#2c5f5a',
    text: '¿Elección? No, pasos omitidos. Pasante no fui, ya era el profesor en el tercer semestre de la facultad. Culpa del dinero o de la falta de él. Tal vez sea la ciudad que me cooptó o la familia que en otro lugar',
    correction: { before: '', struck: 'ficó', fix: 'quedó', after: ', las lenguas se cruzan como mis certezas.' },
    marginNote: 'las dos lenguas pelean por la misma frase',
    videoId: '7npteIDi8gA',
    videoTitle: 'No hay Orisha como Eleggua',
    cut: 'b',
    enter: 'right',
    gridClass: 'shard--2',
    photoRotation: 1.6,
  },
  {
    id: 3,
    tag: 'esperpento',
    accent: '#a83226',
    text:
      'Me siento un esperpento de Valle-Inclán, sin saber si soy títere o titiritero. Una vez me llamaron de basura, pero fue un alumno en cientos. También fue apenas una alumna que tuve la experiencia de almorzar junto en el «bandejão» después que entró en la USP con mi ayuda.',
    videoId: 'Y2SwrG5qHEE',
    videoTitle: 'Lobo-hombre en París',
    cut: 'c',
    enter: 'up',
    gridClass: 'shard--3',
    photoRotation: -1.2,
  },
  {
    id: 4,
    tag: 'raíz',
    accent: '#b8862c',
    text:
      'Mi madre señala que cuando era un bebé decían que tenía manos de educador. Reprobé algunas veces debido a la falta de tiempo causada por el trabajo. Planté un angico cuando niño, mismo nombre de la ciudad donde Paulo Freire comenzó. Él aprendió con sus alumnos.',
    videoId: 'zR-_2rH1Bfo',
    videoTitle: 'Mundi',
    cut: 'd',
    enter: 'pop',
    gridClass: 'shard--4',
    photoRotation: -1.8,
  },
  {
    id: 5,
    tag: 'guernica',
    accent: '#a83226',
    text:
      'Los mismos compañeros docentes que me elogian, me aconsejan dejar la educación básica y dedicarme a la investigación académica. Una Guernica interior, disculpa la comparación. Viviendo un luto a los 22 por una juventud que no es mía, ayudando la juventud de otras personas.',
    videoId: 'w4Ulmn5NaHs',
    videoTitle: 'Todo Pasa',
    cut: 'e',
    enter: 'right',
    gridClass: 'shard--5',
    photoRotation: 1.6,
  },
]

export const finalLine = '¿Cómo se es profe cuando todavía te estás convirtiendo en quien vas a ser?'
