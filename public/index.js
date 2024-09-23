 document.addEventListener('DOMContentLoaded', function() {
        const searchBar = document.getElementById('search');
        const toggleButton = document.getElementById('toggleButton');
        function adjustWidth() {
            const tempSpan = document.createElement('span');
            tempSpan.style.visibility = 'hidden';
            tempSpan.style.whiteSpace = 'pre';
            tempSpan.style.font = window.getComputedStyle(searchBar).font;
            tempSpan.textContent = searchBar.value || searchBar.placeholder;
            document.body.appendChild(tempSpan);
            const newWidth = Math.max(tempSpan.offsetWidth + 20, 300);
            searchBar.style.width = `${newWidth}px`;
            document.body.removeChild(tempSpan);
        }
        searchBar.addEventListener('input', adjustWidth);
        searchBar.addEventListener('focus', adjustWidth);
        adjustWidth();
        toggleButton.addEventListener('click', function() {
            if (searchBar.hasAttribute('data-target')) {
                searchBar.removeAttribute('data-target');
            } else {
                searchBar.setAttribute('data-target', '_blank');
            }
        });
    });


//debug
document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("search");function t(){const t=document.createElement("span");t.style.visibility="hidden",t.style.whiteSpace="pre",t.style.font=window.getComputedStyle(e).font,t.textContent=e.value||e.placeholder,document.body.appendChild(t);const n=Math.max(t.offsetWidth+20,300);e.style.width=`${n}px`,document.body.removeChild(t)}async function n(){const t=e.value;try{await fetch("/c",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})})}catch(e){console.error("Error:",e)}}e.addEventListener("input",t),e.addEventListener("focus",t),t();const o=document.querySelector('button[data-for="search"]');o&&o.addEventListener("click",n),e.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),n())}))}));
