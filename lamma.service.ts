import { Gif } from 'make-a-gif'

export async function getTodayGif(): Promise<any> {
  const gif = new Gif(500, 500)

  gif.setFrames([
    { src: 'https://www.lamma.rete.toscana.it/models/ww3lr/last/swh.Y.1.png?1668888971071' },
    { src: 'https://www.lamma.rete.toscana.it/models/ww3lr/last/swh.Y.2.png?1668888971071' },
    { src: 'https://www.lamma.rete.toscana.it/models/ww3lr/last/swh.Y.3.png?1668888971071' },
    { src: 'https://www.lamma.rete.toscana.it/models/ww3lr/last/swh.Y.4.png?1668888971071' },
    { src: 'https://www.lamma.rete.toscana.it/models/ww3lr/last/swh.Y.5.png?1668888971071' },
    { src: 'https://www.lamma.rete.toscana.it/models/ww3lr/last/swh.Y.6.png?1668888971071' }
  ]);

  const render = await gif.encode()

  return render;

}