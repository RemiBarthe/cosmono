<template>
  <section>
    <div class="text-white">
      <h1 class="font-bold font-sans:Amaranth text-title py-3 px-4">
        {{ titleAventureCosmono }}
      </h1>
      <br />
      <div class="font-sans:OpenSans px-4">
        <p>{{ textAventureCosmonop1 }}</p>
        <br />
        <p>{{ textAventureCosmonop2 }}</p>
        <br />
        <p>{{ textAventureCosmonop3 }}</p>
        <br />
        <p class="text-red-400">{{ textAventureCosmonop4 }}</p>
        <br />
        <p>{{ textAventureCosmonop5 }}</p>
        <br />
        <p class="font-bold">{{ textAventureCosmonop6 }}</p>
        <br />
        <button
          class="
            bg-yellowPrincipal
            text-black
            font-sans:OpenSans font-bold
            absolute
            justify-center
            py-2
            px-4
            border-solid border-yellowSecondary border-5
            rounded-full
          "
        >
          Rejoins-nous !
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    titleAventureCosmono: "L'aventure cosmono",
    textAventureCosmonop1:
      "Lors de nos différentes explorations spatiales, nous avons découvert que la mise en place ou l’accès à un projet peut parfois être compliqué...",
    textAventureCosmonop2:
      "Ne pas savoir par où commencer, ne pas avoir d'idée peut rapidement faire en sorte que le projet tombe à l’eau…",
    textAventureCosmonop3:
      "Dans un état d’esprit agile cosmono guide et accompagne tous ses membres dans l’optique d’aller toujours plus haut et découvrir ensemble de nouvelles merveilles.",
    textAventureCosmonop4: "// texte pour un possible client",
    textAventureCosmonop5:
      "Nous avons donc eu l’idée innovante de donner la possibilité à tout le monde de devenir un pionnier.",
    textAventureCosmonop6: "Viens parcourir l’espace avec nous."
  })
};
</script>