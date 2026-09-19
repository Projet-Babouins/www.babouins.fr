// Configuration d'Astro : https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Adresse publique du site (sert au sitemap, aux liens canoniques et à Open Graph).
  // Pas d'option `base` : le site est servi à la racine du domaine personnalisé.
  site: 'https://www.babouins.fr',

  // Génère sitemap-index.xml à chaque build.
  integrations: [sitemap()],

  // `true` : les espaces et retours à la ligne se comportent comme en HTML classique.
  // (Le mode par défaut, 'jsx', colle les mots quand on revient à la ligne avant une balise.)
  compressHTML: true,

  // Police des titres. Astro la télécharge au moment du build et l'héberge avec le site :
  // aucun appel à un service externe pour les visiteurs.
  // Elle est ensuite utilisée via la variable --font-title de src/styles/global.css.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-bricolage',
      weights: [800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  markdown: {
    shikiConfig: {
      // Un seul thème sombre pour les blocs de code, lisible en mode clair comme en mode sombre.
      theme: 'github-dark',
    },
  },
});
