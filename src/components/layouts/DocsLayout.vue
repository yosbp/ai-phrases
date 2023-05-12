<template>
    <header class="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
      <div class="flex items-center flex-grow basis-0">
        <router-link class="text-lg font-semibold tracking-tight text-slate-900" :to="{name: 'Home'}">AI Phrases API</router-link>
      </div>
  
      <div class="items-center justify-end flex-grow hidden basis-0 md:flex">
        <router-link :to="{name: 'Home'}" class="px-4 py-2 text-sm font-semibold rounded bg-slate-900 text-slate-50 transition ease-in-out delay-75 hover:scale-105 duration-200">Go to homepage</router-link>
      </div>
    </header>
  
    <main class="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
      <label for="navigation" class="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-slate-600 border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
        </svg>
      </label>
  
      <input type="checkbox" name="navigation" id="navigation" class="hidden peer" />
      <div class="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
        <div class="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>
  
        <nav class="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
          <ul role="list" class="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
            <li>
              <h3 class="font-semibold tracking-tight text-slate-900">
                Getting started
              </h3>
  
              <ul role="list" class="pl-3 mt-3 space-y-2">
                <li>
                  <router-link exact-active-class="my-2 py-2 px-8 bg-gray-200 text-gray-700 rounded-md border-gray-700" to="/docs" class="text-slate-600 hover:text-slate-800">Quick start guide</router-link>
                </li>
  
              </ul>
            </li>
  
            <li>
              <h3 class="font-semibold tracking-tight text-slate-900">
                Endpoints
              </h3>
  
              <ul role="list" class="pl-3 mt-3 space-y-2">
                <li>
                  <router-link exact-active-class="my-2 py-2 px-8 bg-gray-200 text-gray-700 rounded-md border-gray-700" to="/endpoints/single" class="text-slate-600 hover:text-slate-800">Get Single Quote</router-link>
                </li>
  
                <li>
                  <router-link exact-active-class="my-2 py-2 px-8 bg-gray-200 text-gray-700 rounded-md border-gray-700" to="/endpoints/multiple" class="text-slate-600 hover:text-slate-800">Get Multiple Quotes</router-link>
                </li>

                <li>
                  <router-link exact-active-class="my-2 py-2 px-8 bg-gray-200 text-gray-700 rounded-md border-gray-700" to="/endpoints/language" class="text-slate-600 hover:text-slate-800">Get in Spanish</router-link>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
      </div>
  
      <div class="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">

        <router-view></router-view>
  
      </div>
    </main>
  </template>