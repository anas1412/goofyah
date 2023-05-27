# Goofy Ah Extension

![Extension Icon](images/icon.png)

## Description

The Goofy Ah Extension is a Chrome extension that plays a fun sound effect whenever the word "poop" appears in the browser. It injects a content script into web pages, monitors the DOM for the word "poop," and triggers the sound effect when found.

## Features

- Plays a sound effect when the word "poop" is detected in web pages.
- Adds an entertaining element to browsing experiences.

## Installation

1. Clone the repository or download the source code.
2. Open Google Chrome and go to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the folder containing the extension.

## Usage

1. Make sure the extension is installed and enabled in Chrome.
2. Browse the web as usual.
3. Whenever the word "poop" appears in a web page, the extension will play the designated sound effect.

## Customization

If you want to change the sound effect, follow these steps:

1. Replace the `sound.mp3` file located in the `audio` folder with your desired sound effect file.
2. Make sure the new sound effect file retains the name `sound.mp3`.

## Troubleshooting

- If the sound effect doesn't play, ensure that the sound file `sound.mp3` is located in the `audio` folder of the extension.
- Make sure the extension is enabled in Chrome's extensions settings.

## Contribution

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

The Goofy Ah Extension uses the following open-source libraries and resources:

- [Google Chrome Extensions API](https://developer.chrome.com/docs/extensions/)
- [FontAwesome](https://fontawesome.com/)
