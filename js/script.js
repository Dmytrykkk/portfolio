document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const fixedBottomOffset = 10 * window.innerHeight / 100;

    function handleScroll() {
        const scrollTop = content.scrollTop; // Відстань прокрутки зверху
        const clientHeight = content.clientHeight; // Висота видимої частини
        const scrollHeight = content.scrollHeight; // Загальна висота контенту

        // Визначення, чи потрібно розмиття зверху
        const topBlur = scrollTop > 0;

        // Визначення, чи потрібно розмиття знизу
        const bottomBlur = scrollTop + clientHeight < scrollHeight - fixedBottomOffset;

        // Додаємо або видаляємо класи для розмиття
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

    // Додаємо обробник події прокрутки
    content.addEventListener('scroll', handleScroll);

    // Викликаємо функцію при завантаженні сторінки
    handleScroll();
});



// Додаємо анімацію для кнопок у навігації
document.querySelectorAll('.sidebar .navigation a, .contacts a').forEach(button => {
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


document.querySelectorAll('.sidebar .navigation a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Забороняємо стандартну поведінку посилання

        const targetId = link.getAttribute('href').slice(1); // Отримуємо ID цілі
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Плавна прокрутка
                block: 'start' // Прокрутка до початку елемента
            });
        }
    });
});
