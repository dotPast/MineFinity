function toggleTheme() {
    var mainHtml = document.getElementsByTagName('html')[0];
    var button = document.getElementById('themeButton')
    if (mainHtml.getAttribute('data-theme') === 'light') {
        mainHtml.setAttribute('data-theme', 'dark');
        button.src = "/assets/moon.svg"
    } else {
        mainHtml.setAttribute('data-theme', 'light');
        button.src = '/assets/sun.svg'
    }
}

const openServerDialogButton = document.getElementById('openServerDialog');
const closeServerDialogButton = document.getElementById('closeServerDialog');
const altCloseServerDialogButton = document.getElementById('altCloseServerDialog');
const copyIPServerDialogButton = document.getElementById('copyIPServerDialog');
const serverDialog = document.getElementById('serverDialog');

openServerDialogButton.addEventListener("click", () => {
    serverDialog.showModal();
    copyIPServerDialogButton.innerText = "Скопировать IP"
})

closeServerDialogButton.addEventListener("click", () => {
    serverDialog.close();
})

altCloseServerDialogButton.addEventListener("click", () => {
    serverDialog.close();
})

copyIPServerDialogButton.addEventListener("click", () => {
    navigator.clipboard.writeText('Placeholder:IP');
    copyIPServerDialogButton.innerText = "Скопировано!";
})