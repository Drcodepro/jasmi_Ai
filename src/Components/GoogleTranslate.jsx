import { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
    const isInitialized = useRef(false);

    // Function to initialize the Google Translate Element
    const googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: 'en,ja',
                    autoDisplay: true,
                },
                'google_translate_element'
            );
        }
    };

    useEffect(() => {
        if (!isInitialized.current) {
            // Check if the script is already present on the page
            const existingScript = document.querySelector(
                'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
            );

            if (!existingScript) {
                // Create script element if not present
                const script = document.createElement('script');
                script.src =
                    '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);

                // Set the initialization function on the window object
                window.googleTranslateElementInit = googleTranslateElementInit;

                script.onload = () => {
                    googleTranslateElementInit(); // Ensure it initializes after loading
                };

                script.onerror = () => {
                    console.error('Failed to load Google Translate script.');
                };
            } else {
                // If script already exists, initialize the translate element
                googleTranslateElementInit();
            }

            // Mark as initialized to prevent redundant script additions
            isInitialized.current = true;
        }

        return () => {
            // Optionally remove script or just keep cleanup minimal to avoid affecting global state
            const script = document.querySelector(
                'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
            );
            if (script) {
                // Uncomment if you want to remove the script when the component unmounts
                // document.body.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        const changePlaceholderText = () => {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
                const firstOption = select.querySelector('option[value=""]');
                if (firstOption) {
                    firstOption.textContent = 'Language'; // Customize the default placeholder text
                }
            }
        };

        // Use a MutationObserver to detect when the Google Translate dropdown is available
        const observer = new MutationObserver(() => {
            changePlaceholderText();
        });

        // Observe changes in the DOM, particularly within the #google_translate_element
        const targetNode = document.getElementById('google_translate_element');
        if (targetNode) {
            observer.observe(targetNode, { childList: true, subtree: true });
        }

        return () => {
            // Disconnect the observer on cleanup
            observer.disconnect();
        };
    }, []);

    return <div className="top-0 right-[20%] z-90" id="google_translate_element"></div>;
};

export default GoogleTranslate;
