const postFiles = [
    "25-11-22-inequalities.html",
    "25-05-29-complex-numbers.html",
    "25-05-28-test.html",
]

const previewContainer = document.getElementById('posts-preview');

function loadPosts() {
    postFiles.sort().reverse().forEach(async (file) => {
        try {
            const res = await fetch(`posts/${file}`);
            const html = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const h2 = doc.querySelector('h1');
            const info = doc.querySelector('.info');

            if (h2 && info) {
                const previewDiv = document.createElement('div');
                previewDiv.className = 'post-preview';
                previewDiv.innerHTML = `
                <h3><a href="posts/${file}">${h2.textContent}</a></h3>
                <p>${info.innerHTML}</p>
              `;
                previewContainer.appendChild(previewDiv);
            }
        } catch (err) {
            console.error(`Error loading ${file}:`, err);
        }
    });
}

function toggleSolution(header) {
    if(!solutionsEnabled){
        return;
    }
    const post = header.parentElement;
    let children = post.children;
    for(let i=0; i<children.length; i++){
        let child = children[i];
        if (child.tagName.toLowerCase() === 'button') {
            child.innerHTML = post.classList.contains('open') ? 'Розв\'язок ▾' : 'Розв\'язок ▴';
        }
    }
    post.classList.toggle('open');
}

if(category){
    loadComments(category);
}

async function loadComments(catg) {
    let response = await fetch('https://backend-for-students-production.up.railway.app/api/comments/' + catg);
    if(!response.ok){
        console.error(response);
        return;
    }

    let data = await response.json();

    let commentsDisplay = document.getElementById('commentsDisplay');
    let commentsHTML = '';
    data.forEach(comment => {
        commentsHTML += `
            <div class="post-preview">
                <h4>${comment.name}</h4>
                <p>${comment.text}</p>
            </div>
        `;
    });
    commentsDisplay.innerHTML = commentsHTML;
}

async function postComment(){
    let name = document.getElementById('nameInput').value;
    let text = document.getElementById('commentInput').value;

    let payload = {
        category: category,
        text: text,
        name: name
    };

    if(!name ){
        let inpt = document.getElementById('nameInput');
        inpt.classList.add('error');
        return;
    }
    if(!text ){
        let inpt = document.getElementById('commentInput');
        inpt.classList.add('error');
        return;
    }

    let response = await fetch('https://backend-for-students-production.up.railway.app/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if(!response.ok){
        console.error(response);
    }

    let data = await response.json();
    console.log(data);
    document.getElementById('nameInput').value = '';
    document.getElementById('commentInput').value = '';

    await loadComments(category);
}

