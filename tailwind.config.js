const c=n=>`var(--${n})`;
export default {darkMode:'class',content:['./index.html','./src/**/*.{js,jsx}'],theme:{extend:{colors:{bg:c('bg'),bg2:c('bg2'),card:c('card'),tx:c('tx'),tx2:c('tx2'),bd:c('bd'),ac:c('ac')},fontFamily:{sans:['Lato','sans-serif']}}}};
