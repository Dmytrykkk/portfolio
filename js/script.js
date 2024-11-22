document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const fixedBottomOffset = 10 * window.innerHeight / 100;

    function handleScroll() {
        const scrollTop = content.scrollTop;
        const clientHeight = content.clientHeight;
        const scrollHeight = content.scrollHeight;

        const topBlur = scrollTop > 0;

        const bottomBlur = scrollTop + clientHeight < scrollHeight - fixedBottomOffset;

        if (topBlur) {
            content.classList.add('blur-top');
        } else {
            content.classList.remove('blur-top');
        }

        if (bottomBlur) {
            content.classList.add('blur-bottom');
        } else {
            content.classList.remove('blur-bottom');
        }
    }

    content.addEventListener('scroll', handleScroll);
    handleScroll();
});




document.querySelectorAll('.sidebar .navigation a, .contacts a, .burger-navigation a').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('active-animation');
    });

    button.addEventListener('mouseup', () => {
        setTimeout(() => {
            button.classList.remove('active-animation');
        }, 100);
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('active-animation');
    });
});


document.querySelectorAll('.sidebar .navigation a, .burger-navigation a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
});
