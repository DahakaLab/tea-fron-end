export function titleNode() {
    let titleText, logoTitle, viewPort;

    logoTitle = document.createElement('link');
    logoTitle.rel = 'shortcut icon';
    logoTitle.href = 'http://s1.iconbird.com/ico/2013/9/450/w256h2561380453904Leaf256x25632.png';
    logoTitle.type = 'image/png';

    titleText = document.createElement('title');
    titleText.innerHTML = 'Чайный сервис';

    viewPort = document.createElement('meta');
    viewPort.name = 'viewport';
    viewPort.content = 'width=device-width, initial-scale=1.0';

    document.head.appendChild(viewPort);
    document.head.appendChild(logoTitle);
    document.head.appendChild(titleText);
}