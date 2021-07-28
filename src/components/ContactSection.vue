<template>
  <section
    class="
      text-base
      md:text-base-lg
      text-white
      font-text
      px-4
      md:px-28
      py-6
      md:py-8
    "
  >
    <h2 class="font-title text-title md:text-title-lg mb-4 md:mb-5">
      Monte à bord du vaiseau
    </h2>
    <p class="mb-4 md:mb-5">
      Que tu aies une idée de projet folle.<br />Que tu aies envie d’apprendre.
      <br />Que tu désires être un pionnier ou un explorateur.<br />
      Il y a de la place pour tout le monde chez
      <span class="text-primary">cosmono</span>.<br />Rejoins-nous !
    </p>
    <br /><br />
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-password"
          >
            E-mail
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
            "
            id="email"
            type="email"
          />
          <p class="text-gray-600 text-xs italic">
            Some tips - as long as needed
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class="
              no-resize
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
              h-48
              resize-none
            "
            id="message"
          ></textarea>
          <p class="text-gray-600 text-xs italic">
            Re-size can be disabled by set by resize-none / resize-y / resize-x
            / resize
          </p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="
              shadow
              bg-teal-400
              hover:bg-teal-400
              focus:shadow-outline
              focus:outline-none
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
            type="button"
          >
            Send
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data: () => ({})
};
</script>
