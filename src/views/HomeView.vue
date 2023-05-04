<template>
  <div class="text-3xl min-h-screen flex justify-center items-center">
    <div class="text-center w-[95%] md:w-1/2 " ref="phrase"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TypeIt from 'typeit';

const phrase = ref(null);

const data = ref([
  {
    "phrase": "Lo peor de mantener los recuerdos no es el dolor. Es la soledad de ello. Los recuerdos necesitan ser compartidos.",
    "book": "The Giver (Lois Lowry)"
  },
  {
    "phrase": "Y en ese momento, juro que éramos infinitos.",
    "book": "The Perks of Being a Wallflower (Stephen Chbosky)"
  },
  {
    "phrase": "Mi vida no es más que una gota en un océano ilimitado. Pero, ¿qué es un océano sino una multitud de gotas?",
    "book": "Cloud Atlas (David Mitchell)"
  },
  {
    "phrase": "Fue la posibilidad de la oscuridad lo que hizo que el día pareciera tan brillante.",
    "book": "The Dark Tower (Stephen King)"
  },
  {
    "phrase": "Me atravesaste el alma. Soy mitad agonía, mitad esperanza.",
    "book": "Persuasión (Jane Austen)"
  },
  {
    "phrase": "Lo más aterrador de la distancia es no saber si te echarán de menos o te olvidarán.",
    "book": "The Notebook (Nicholas Sparks)"
  },
  {
    "phrase": "Ella tenía piel azul, y él también. Él lo mantenía oculto, y ella también. Buscaron el azul toda su vida, pero pasaron de largo, sin saber.",
    "book": "Every Thing on It (Shel Silverstein)"
  },
  {
    "phrase": "Solo podemos aprender a amar amando.",
    "book": "The Bell (Iris Murdoch)"
  },
  {
    "phrase": "Y, al final, el amor que recibes es igual al amor que das.",
    "book": "The Beatles, The End of the Abbey Road Medley"
  }
]

)

onMounted(() => {
  let currentIndex = ref(0);

  const typeNextPhrase = () => {
    const currentPhrase = data.value[currentIndex.value].phrase;
    const currentBook = data.value[currentIndex.value].book;
    new TypeIt(phrase.value, {
      waitUntilVisible: true,
      speed: 50,
      cursor: false
    })
      .type(currentPhrase)
      .pause(1000)
      .type(`<div class="text-end mt-12">${currentBook}</div>`)
      .pause(5000)
      .delete(currentBook.length + 2 + currentPhrase.length)
      .exec(() => {
        currentIndex.value = (currentIndex.value + 1) % data.value.length;
        typeNextPhrase();
      })
      .go();
  };

  typeNextPhrase();
});

</script>

<style scoped>


</style>
