<template>
  <article class="">
    <header class="">
      <p class="text-base font-medium text-slate-500">
        Endpoints
      </p>

      <h1 class="text-3xl font-bold tracking-tight text-slate-900">
        Get Multiple Random Quotes
      </h1>
    </header>

    <div
      class="mt-8 prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:underline prose-pre:bg-slate-900">
      <!-- component -->
      <div class="bg-gray-100">
        <div class="mx-5 bg-gray-800 shadow-2xl rounded-lg overflow-auto">
          <div id="code-area" class="py-4 px-4 mt-1 text-white text-xl">
            <div class="mb-2">
              <span>
                <span class="text-orange-400">fetch</span>(<span
                  class="text-green-400">'https://api.iaphrases.live/api/phrases/3'</span>)
                <br>
                .<span class="text-yellow-300">then</span> (res => res.<span class="text-blue-400">json( )</span>)
                <br>
                .<span class="text-yellow-300">then</span> (<span class="text-red-400">console</span>.log);
                <br>
              </span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-lg font-bold my-4">Output</h2>

      <div class="bg-gray-100">
        <div class="mx-5 bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
          <div id="code-area" class="py-4 px-4 mt-1 text-white text-xl">
            <div class="mb-2">

              { <br>
              <span class="text-orange-400 ml-3">"phrases"</span>: [ <br>
              <!-- First Phrase -->
              <span class="ml-6">{</span> <br>
              <span class="text-orange-400 ml-12">"id"</span>:<span class="text-green-300"> 1</span>, <br>
              <span class="text-orange-400 ml-12">"phrase"</span>:<span class="text-green-300"> "I have waited for this
                opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and
                everlasting love."</span>, <br>
              <span class="text-orange-400 ml-12">"author"</span>:<span class="text-green-300"> "Gabriel Garcia
                Marquez"</span>, <br>
              <span class="text-orange-400 ml-12">"source"</span>:<span class="text-green-300"> "book"</span> <br>
              <span class="ml-6">}</span>, <br>
              <!-- Second Phrase -->
              <span class="ml-6">{</span> <br>
              <span class="text-orange-400 ml-12">"id"</span>:<span class="text-green-300"> 2</span>, <br>
              <span class="text-orange-400 ml-12">"phrase"</span>:<span class="text-green-300"> "It is better to be
                unhappy and know the worst, than to be happy in a fool's paradise."</span>, <br>
              <span class="text-orange-400 ml-12">"author"</span>:<span class="text-green-300"> "Fyodor
                Dostoevsky"</span>, <br>
              <span class="text-orange-400 ml-12">"source"</span>:<span class="text-green-300"> "book"</span> <br>
              <span class="ml-6">}</span>, <br>
              <!-- Third Phrase -->
              <span class="ml-6">{</span> <br>
              <span class="text-orange-400 ml-12">"id"</span>:<span class="text-green-300"> 3</span>, <br>
              <span class="text-orange-400 ml-12">"phrase"</span>:<span class="text-green-300"> "Her heart, she knew,
                would never be made whole because it was held captive by him."</span>, <br>
              <span class="text-orange-400 ml-12">"author"</span>:<span class="text-green-300"> "Julia Quinn"</span>, <br>
              <span class="text-orange-400 ml-12">"source"</span>:<span class="text-green-300"> "book"</span> <br>
              <span class="ml-6">}</span>, <br>

              <span class="ml-3">]</span>, <br>
              <span class="">}</span>, <br>

            </div>
          </div>
        </div>
      </div>

      <dl class="flex pt-6 mt-6 border-t border-slate-200">
        <div class="mr-auto text-left">
          <dt class="text-sm font-normal tracking-tight text-slate-600">
            Previous
          </dt>

          <dd class="mt-1">
            <router-link to="/endpoints/single" class="text-base font-semibold text-slate-900 hover:underline">Get
              Single Quotes</router-link>
          </dd>
        </div>

        <div class="ml-auto text-right">
          <dt class="text-sm font-normal tracking-tight text-slate-600">
            Next
          </dt>

          <dd class="mt-1">
            <router-link to="/endpoints/language" class="text-base font-semibold text-slate-900 hover:underline">Get
              Spanish Quotes</router-link>
          </dd>
        </div>
      </dl>


  </div>
</article></template>