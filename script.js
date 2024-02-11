const IntroduceButton = document.getElementById('introduce');
const UserName = document.getElementById('user-name');

IntroduceButton.addEventListener('click', () => {
    const Name = prompt('Привет! Как тебя зовут?', 'Мария');
    if (Name)
        UserName.textContent = Name;
})