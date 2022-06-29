const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const imgContainer = document.getElementById('img-container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

images.forEach((element, index) => {
    const div = document.createElement('div');
    div.classList.add('div-container', 'position-relative');

    const title = document.createElement('div');
    title.classList.add('position-absolute', 'ms-title');
    title.innerHTML = element.title;

    const text = document.createElement('div');
    text.classList.add('position-absolute', 'ms-text');
    text.innerHTML = element.description;

    const img = document.createElement('img');
    img.src = element.url;

    if (index != 0) {
        div.classList.add('d-none');
    }

    div.append(img);
    div.append(title);
    div.append(text);
    imgContainer.append(div);
});

const thumbnail = document.getElementById('thumbnail');

images.forEach((element, index) => {
    const div = document.createElement('div');
    div.classList.add('col', 'p-0');

    const img = document.createElement('img');
    img.src = element.url;

    if (index != 0) {
        div.classList.add('opacity-50');
    }

    div.append(img);
    thumbnail.append(div);
});

let i = 0;

prev.addEventListener('click', function () {
    i = backwards(i);
});

next.addEventListener('click', function () {
    i = forwards(i);
});

function forwards(index) {
    index++;
    if (index >= images.length) {
        index = 0;
        imgContainer.children[images.length - 1].classList.add('d-none');
        imgContainer.children[index].classList.remove('d-none');

        thumbnail.children[images.length - 1].classList.add('opacity-50');
        thumbnail.children[index].classList.remove('opacity-50');
    } else {
        imgContainer.children[index - 1].classList.add('d-none');
        imgContainer.children[index].classList.remove('d-none');

        thumbnail.children[index - 1].classList.add('opacity-50');
        thumbnail.children[index].classList.remove('opacity-50');
    }
    return index;
}

function backwards(index) {
    index--;
    if (index <= -1) {
        index = images.length - 1;
        imgContainer.children[0].classList.add('d-none');
        imgContainer.children[index].classList.remove('d-none');

        thumbnail.children[0].classList.add('opacity-50');
        thumbnail.children[index].classList.remove('opacity-50');
    } else {
        imgContainer.children[index + 1].classList.add('d-none');
        imgContainer.children[index].classList.remove('d-none');

        thumbnail.children[index + 1].classList.add('opacity-50');
        thumbnail.children[index].classList.remove('opacity-50');
    }
    return index;
}