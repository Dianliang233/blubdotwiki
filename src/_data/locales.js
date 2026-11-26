const locales = [
  {
    code: 'en',
    label: 'English',
    dir: 'ltr',
    url: 'https://blub.wiki/',
    wikiUrl: 'https://minecraft.wiki/w/Dungeons_II:Blub',
    strings: {
      blub: 'blub',
      description:
        'A blub is a rabbitlike ambient mob found in the Sift that can squeak and move by hopping.',
      heading: 'taking you shortly to the blub wiki',
      subtitle: 'or you can keep petting the blub instead',
      skin: 'skin',
      sound: 'sound',
      on: 'on',
      off: 'off',
      skinNames: {
        soulEngorged: 'soul engorged',
        carapace: 'carapace',
        meadows: 'meadows',
        fungal: 'fungal',
        ravines: 'ravines',
      },
      alt: 'a {skin} blub',
      changeSkin: 'change skin (currently {skin})',
      discordDescription:
        'A **blub** is a "rabbitlike" ambient mob found in the Sift that can squeak and move by hopping.\n\n{blubChain} <:blubby:1528798838465232996>',
      discordFooter:
        '-# From the <:blubby:1155532372528349297> <:blubby:1528798838465232996> **Minecraft Wiki** - [[join wiki discord](https://discord.gg/fGdE5ZE)]',
    },
  },
  {
    code: 'nl',
    label: 'Nederlands (Nederland)',
    dir: 'ltr',
    url: 'https://nl.blub.wiki/',
    wikiUrl: 'https://nl.minecraft.wiki/w/Dungeons_II:Blubje',
    strings: {
      blub: 'blubje',
      description:
        'Het blubje is een "gloeiende konijnachtige" achtergrondmob dat kan piepen en voortbewegen door te huppelen.',
      heading: 'we brengen je snel naar de blubje-wiki',
      subtitle: 'of je kan het blubje blijven aaien',
      skin: 'skin',
      sound: 'geluid',
      on: 'aan',
      off: 'uit',
      skinNames: {
        soulEngorged: 'zielverzadigd',
        carapace: 'schild',
        meadows: 'weides',
        fungal: 'schimmel',
        ravines: 'ravijnen',
      },
      alt: 'een blubje {skin}',
      changeSkin: 'andere skin (nu: {skin})',
      discordDescription:
        'Het **blubje** is een "gloeiende konijnachtige" achtergrondmob dat kan piepen en voortbewegen door te huppelen.\n\n{blubChain} <:blubby:1528798838465232996>',
      discordFooter:
        '-# Van de <:wiki:1155532372528349297> <:blubby:1528798838465232996> **Minecraft Wiki** - [[wiki discord](https://discord.gg/fGdE5ZE)]',
    },
  },
  {
    code: 'pt',
    label: 'Português (Brasil)',
    dir: 'ltr',
    url: 'https://pt.blub.wiki/',
    wikiUrl: 'https://pt.minecraft.wiki/w/Dungeons_II:Blub',
    strings: {
      blub: 'blub',
      description:
        'Um blub é uma criatura ambiente semelhante a um coelho encontrada no Sift, capaz de emitir guinchos e se locomover aos saltos.',
      heading: 'levando você para a blub wiki',
      subtitle: 'ou pode continuar fazendo carinho no blub',
      skin: 'skin',
      sound: 'som',
      on: 'sim',
      off: 'não',
      skinNames: {
        soulEngorged: 'inchado por almas',
        carapace: 'carapaça',
        meadows: 'prados',
        fungal: 'fúngico',
        ravines: 'ravinas',
      },
      alt: 'um blub {skin}',
      changeSkin: 'alterar skin (atual: {skin})',
      discordDescription:
        'Um **blub** é uma criatura ambiente "semelhante a um coelho" encontrada no Sift, capaz de emitir guinchos e se locomover aos saltos.\n\n{blubChain} <:blubby:1528798838465232996>',
      discordFooter:
        '-# Da <:blubby:1155532372528349297> <:blubby:1528798838465232996> **Minecraft Wiki** - [[junte-se ao discord da wiki inglesa](https://discord.gg/fGdE5ZE)]',
    },
  },
]

for (const locale of locales) {
  const { blub } = locale.strings

  locale.blubChain = Array.from({ length: 15 }, () => blub).join(' ')
  locale.marquee = Array.from({ length: 75 }, () => blub).join(' ')
  locale.discordHeading = `## [**${blub.charAt(0).toUpperCase()}${blub.slice(1)}**](${locale.url})`
}

module.exports = locales
