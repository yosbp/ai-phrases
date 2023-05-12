<template>
	<section class="p-6 my-6 dark:text-gray-100">
		<div class="container grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
			<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
				<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
					<svg class="h-9 w-9 dark:text-gray-800" viewBox="0 0 512 512" version="1.1"
						xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<title>list</title>
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="add" fill="#000000" transform="translate(64.000000, 64.000000)">
									<path
										d="M106.666667,1.42108547e-14 L384,1.42108547e-14 L384,42.6666667 L106.666667,42.6666667 L106.666667,1.42108547e-14 Z M1.42108547e-14,1.42108547e-14 L64,1.42108547e-14 L64,42.6666667 L1.42108547e-14,42.6666667 L1.42108547e-14,1.42108547e-14 Z M106.666667,106.666667 L384,106.666667 L384,149.333333 L106.666667,149.333333 L106.666667,106.666667 Z M1.42108547e-14,106.666667 L64,106.666667 L64,149.333333 L1.42108547e-14,149.333333 L1.42108547e-14,106.666667 Z M106.666667,213.333333 L384,213.333333 L384,256 L106.666667,256 L106.666667,213.333333 Z M1.42108547e-14,213.333333 L64,213.333333 L64,256 L1.42108547e-14,256 L1.42108547e-14,213.333333 Z M106.666667,320 L384,320 L384,362.666667 L106.666667,362.666667 L106.666667,320 Z M1.42108547e-14,320 L64,320 L64,362.666667 L1.42108547e-14,362.666667 L1.42108547e-14,320 Z"
										id="Combined-Shape"> </path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leading-none">{{ data.phrases }}</p>
					<p class="capitalize">Phrases</p>
				</div>
			</div>
			<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
				<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
					<svg class="h-9 w-9 dark:text-gray-800" viewBox="0 0 24 24" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<path d="M18 12H6V6H11" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path d="M6 17H18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path
								d="M16 2H3.5C2.67157 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67157 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V11"
								stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M16.5 5.5L18 7L22 2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
								stroke-linejoin="round"></path>
						</g>
					</svg>
				</div>
				<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leading-none">{{ data.actives }}</p>
					<p class="capitalize">Actives</p>
				</div>
			</div>
			<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
				<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
					<svg viewBox="0 0 1024 1024" class="h-9 w-9 dark:text-gray-800" version="1.1"
						xmlns="http://www.w3.org/2000/svg" fill="currentColor">
						<g id="SVGRepo_bgCarrier" stroke-width=""></g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<path
								d="M511.9 183c-181.8 0-329.1 147.4-329.1 329.1s147.4 329.1 329.1 329.1c181.8 0 329.1-147.4 329.1-329.1S693.6 183 511.9 183z m0 585.2c-141.2 0-256-114.8-256-256s114.8-256 256-256 256 114.8 256 256-114.9 256-256 256z"
								fill="#0F1F3C"></path>
							<path d="M548.6 365.7h-73.2v161.4l120.5 120.5 51.7-51.7-99-99z" fill="#0F1F3C"></path>
						</g>
					</svg>
				</div>
				<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leading-none">{{ data.pending }}</p>
					<p class="capitalize">Pending</p>
				</div>
			</div>
<!-- 			<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
				<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
						class="h-9 w-9 dark:text-gray-800">
						<path
							d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z">
						</path>
					</svg>
				</div>
				<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leading-none">17%</p>
					<p class="capitalize">Bounce rate</p>
				</div>
			</div> -->
		</div>
	</section>
</template>
<script setup>
import phraseUseStore from '../../stores/phraseStore';
import { ref } from 'vue';

const store = phraseUseStore();

const data = ref([]);

store.dashboardData().then((res) => {
	data.value = res.data;
});


</script>
