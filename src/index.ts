let holder = document.querySelectorAll('.JSuspense-wraper .content');
window.addEventListener("load", (event) => {
    console.log('loaded');
    holder.forEach((ele: any) => {
        ele.classList.add('loaded')
        ele.parentElement.classList.remove('JSuspense-wraper')
    })
});