<template>
    <article class="">
        <header class="">
            <p class="text-base font-medium text-slate-500">
                Getting started
            </p>

            <h1 class="text-3xl font-bold tracking-tight text-slate-900">
                Quick start
            </h1>
        </header>

        <p class="mt-2 text-xl text-slate-600">
            Need to get started quickly with this API? You will see all (for now...) the endpoints in just minutes.
        </p>

<!--         <a href="#" class="flex flex-col w-full mt-4 overflow-hidden rounded-lg shadow-xl md:flex-row md:w-4/5">
            <div
                class="flex items-center justify-center w-full px-4 py-16 text-sm font-normal md:w-1/3 text-slate-900/20 bg-gradient-to-br from-indigo-200 via-sky-100 to-indigo-100">
                [Screenshot Image]
            </div>

            <div class="w-full px-6 py-4 border-t border-b border-r md:w-2/3 border-slate-200">
                <h3 class="text-xl font-semibold tracking-tight text-slate-900">
                    Video walkthrough
                </h3>

                <p class="mt-1 text-lg text-slate-600">
                    Watch this 5 minutes video-walkthrough of Spinal. You quickly learn how to set up your
                    dashboard, invite team members, set permissions and how to schedule and publish content.
                </p>
            </div>
        </a> -->

        <h3 class="mt-16 text-base font-bold tracking-tight text-slate-900">
            Find this project on GitHub
        </h3>

        <ul class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <li>
                <a href="https://github.com/yosbp/ai-phrases" class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
                    <h4 class="font-bold tracking-tight text-slate-900">
                        Frontend
                    </h4>

                    <p class="text-slate-600">
                        Used Vue 3, Ant Design and Tailwind
                    </p>
                </a>
            </li>

            <li>
                <a href="https://github.com/yosbp/ai-phrases-API" class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
                    <h4 class="font-bold tracking-tight text-slate-900">
                        Backend
                    </h4>

                    <p class="text-slate-600">
                        To create this API i used Laravel 10
                    </p>
                </a>
            </li>

            <li class="">
                <a href="https://github.com/yosbp" class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
                    <h4 class="font-bold tracking-tight text-slate-900">
                        Follow me
                    </h4>

                    <p class="text-slate-600">
                        If you can 
                    </p>
                </a>
            </li>

        </ul>

        <h3 class="mt-8 text-base font-bold tracking-tight text-slate-900">
            Have questions?
        </h3>

        <p class="text-slate-900">
            Still have questions? <a href="https://yosmarb.com/" class="underline hover:no-underline">Talk
                to me</a>.
        </p>
    </article>

    <dl class="flex pt-6 mt-6 border-t border-slate-200">
        <div class="ml-auto text-right">
            <dt class="text-sm font-normal tracking-tight text-slate-600">
                Next
            </dt>

            <dd class="mt-1">
                <router-link to="/endpoints" class="text-base font-semibold text-slate-900 hover:underline">Endpoints</router-link>
            </dd>
        </div>
    </dl>
</template>