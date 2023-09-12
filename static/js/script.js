function changeClassAnimation() {
    const buttons = document.querySelectorAll('.button-animation');

    buttons.forEach(function (button) {
        const icon = button.querySelector('.fas');

        button.addEventListener('mouseover', function () {
            icon.style.marginLeft = '1em';
        });

        button.addEventListener('mouseout', function () {
            icon.style.marginLeft = '';
        });
    });
}

function changeArticleCaseClassAnimation() {
    const articleCases = document.querySelectorAll('.article-case');

    articleCases.forEach(function (articleCase) {
        articleCase.addEventListener('mouseover', function () {
            articleCase.classList.add('article-selected');
        });

        articleCase.addEventListener('mouseout', function () {
            articleCase.classList.remove('article-selected');
        });
    });
}


function stickyNavbar() {
    const navbar = document.getElementById("navbar");
    const navbarMobile = document.getElementById("mobile-nav");

    window.onscroll = function () {
        if (window.scrollY > navbar.offsetTop) {
            navbar.classList.add('sticky');
            navbarMobile.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
            navbarMobile.classList.remove('sticky');
        }
    }
}

function mobileStickyNavbar() {
    const navbar = document.getElementById("mobile-nav");

    window.onscroll = function () {
        if (window.scrollY > navbar.offsetTop) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
}

function hoverIcon() {
    const icons = document.querySelectorAll("body > footer > div.footer-2 > ul i")

    icons.forEach(function (icon) {
        icon.addEventListener('mouseover', function () {
            icon.classList.add('fa-beat');
        });

        icon.addEventListener('mouseout', function () {
            icon.classList.remove('fa-beat');
        });
    });
}

function hoverProjects() {
    const projectCases = document.querySelectorAll("body > section > div.all-projects > div")

    projectCases.forEach(function (projectCase) {
        projectCase.addEventListener('mouseover', function () {
            projectCase.classList.add('onMouseOver');
        });

        projectCase.addEventListener('mouseout', function () {
            projectCase.classList.remove('onMouseOver');
        });
    });
}

function mobileMenu() {
    console.log("mobileMenu function called"); // Ajoutez cette ligne pour vérifier l'appel de la fonction

    const hamburgerButton = document.querySelector("#mobile-nav button.menu");
    const fullScreenMenu = document.querySelector("#mobile-nav ul.menu-fullscreen");

    hamburgerButton.addEventListener('click', function () {
        fullScreenMenu.classList.toggle("visible");
        fullScreenMenu.classList.toggle("hidden");
    });
}

// function filterProjects() {
//     // Sélection des boutons de filtrage
//     const filterHtmlCss = document.querySelector(".b-html-css");
//     const filterJavascript = document.querySelector(".b-javascript");
//     const filterJava = document.querySelector(".b-java");
//     const filterPython = document.querySelector(".b-python");
//
//     // Sélection des cases de projet
//     const projectCases = document.querySelectorAll("body > section > div.all-projects > div");
//
//     filterHtmlCss.addEventListener('click', function () {
//         const tagHtmlCss = document.querySelector(".tag-html-css");
//         tagHtmlCss.classList.toggle("hiddenItem");
//
//         filterHtmlCss.classList.toggle("clicked");
//     });
//
//     filterJavascript.addEventListener('click', function () {
//         const tagJavascript = document.querySelector(".tag-javascript");
//         tagJavascript.classList.toggle("hiddenItem");
//
//         filterJavascript.classList.toggle("clicked");
//     });
//
//     filterJava.addEventListener('click', function () {
//         const tagJava = document.querySelector(".tag-java");
//         tagJava.classList.toggle("hiddenItem");
//
//         filterJava.classList.toggle("clicked");
//     });
//
//     filterPython.addEventListener('click', function () {
//         const tagPython = document.querySelector(".tag-python");
//         tagPython.classList.toggle("hiddenItem");
//
//         filterPython.classList.toggle("clicked");
//     });
// }

function filterArticlesV2() {
    // Sélectionner tous les boutons de filtrage
    const filterHtmlCss = document.querySelector("body > section > div.filtres > .filter-article.b-html-css");
    const filterJavascript = document.querySelector("body > section > div.filtres > button.filter-article.b-javascript");
    const filterJava = document.querySelector("body > section > div.filtres > .filter-article.b-java");
    const filterPython = document.querySelector("body > section > div.filtres > .filter-article.b-python");
    const filterProductivity = document.querySelector("body > section > div.filtres > button.filter-article.b-productivity");
    const filterAll = document.querySelector("body > section > div.filtres > button.filter-article.b-all")

    // Sélection de tous les articles preview
    const tagHtmlCss = document.querySelectorAll(".article-preview.tag-html-css");
    const tagJavascript = document.querySelectorAll(".article-preview.tag-javascript");
    const tagJava = document.querySelectorAll(".article-preview.tag-java");
    const tagPython = document.querySelectorAll(".article-preview.tag-python");
    const tagProductivity = document.querySelectorAll(".article-preview.tag-productivity");

    // Etat de base de la page
    // Bouton All est déjà clicked
    // Aucun article n'est hidden (ils sont donc tous visibles)

    // Si je clique sur le filtre HTML CSS
    filterHtmlCss.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterHtmlCss.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterPython.classList.remove("clicked");
        filterProductivity.classList.remove("clicked");

        // De plus tous les articles HTML CSS ne sont pas hidden
        tagHtmlCss.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagJavascript.forEach((element) => element.classList.add("hiddenItem"));
        tagJava.forEach((element) => element.classList.add("hiddenItem"));
        tagPython.forEach((element) => element.classList.add("hiddenItem"));
        tagProductivity.forEach((element) => element.classList.add("hiddenItem"));


    });

    // Si je clique sur le bouton Javascript

    filterJavascript.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterJavascript.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterPython.classList.remove("clicked");
        filterProductivity.classList.remove("clicked");

        // De plus tous les articles Javascript ne sont pas hidden
        tagJavascript.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagHtmlCss.forEach((element) => element.classList.add("hiddenItem"));
        tagJava.forEach((element) => element.classList.add("hiddenItem"));
        tagPython.forEach((element) => element.classList.add("hiddenItem"));
        tagProductivity.forEach((element) => element.classList.add("hiddenItem"));

    });

    // Si je clique sur le bouton Java

    filterJava.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterJava.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterPython.classList.remove("clicked");
        filterProductivity.classList.remove("clicked");

        // De plus tous les articles Java ne sont pas hidden
        tagJava.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagHtmlCss.forEach((element) => element.classList.add("hiddenItem"));
        tagJavascript.forEach((element) => element.classList.add("hiddenItem"));
        tagPython.forEach((element) => element.classList.add("hiddenItem"));
        tagProductivity.forEach((element) => element.classList.add("hiddenItem"));

    });

    // Si je clique sur le bouton Python

    filterPython.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterPython.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterProductivity.classList.remove("clicked");

        // De plus tous les articles Python ne sont pas hidden
        tagPython.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagHtmlCss.forEach((element) => element.classList.add("hiddenItem"));
        tagJavascript.forEach((element) => element.classList.add("hiddenItem"));
        tagJava.forEach((element) => element.classList.add("hiddenItem"));
        tagProductivity.forEach((element) => element.classList.add("hiddenItem"));

    });

    // Si je clique sur le bouton Productivity

    filterProductivity.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterProductivity.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterPython.classList.remove("clicked");

        // De plus tous les articles Productivity ne sont pas hidden
        tagProductivity.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagHtmlCss.forEach((element) => element.classList.add("hiddenItem"));
        tagJavascript.forEach((element) => element.classList.add("hiddenItem"));
        tagJava.forEach((element) => element.classList.add("hiddenItem"));
        tagPython.forEach((element) => element.classList.add("hiddenItem"));

    });

    // Pour le bouton All

    filterAll.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterAll.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterProductivity.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterPython.classList.remove("clicked");

        // De plus tous les articles ne sont pas hidden
        tagProductivity.forEach(element => element.classList.remove("hiddenItem"));
        tagHtmlCss.forEach((element) => element.classList.remove("hiddenItem"));
        tagJavascript.forEach((element) => element.classList.remove("hiddenItem"));
        tagJava.forEach((element) => element.classList.remove("hiddenItem"));
        tagPython.forEach((element) => element.classList.remove("hiddenItem"));

    });

}


function filterArticles() {


    filterHtmlCss.addEventListener('click', function () {
        const tagHtmlCss = document.querySelector(".article-preview.tag-html-css");
        tagHtmlCss.classList.toggle("hiddenItem");

        // On désélectionne le reste des filtres
        filterAll.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterPython.classList.remove("clicked");
        filterProductivity.classList.remove("clicked");

        // et on met le bon en selectionné
        filterHtmlCss.classList.toggle("clicked");

        // et on enleve le hiddenItem des articles preview

        const tagJavascript = document.querySelector(".article-preview.tag-javascript");
        const tagJava = document.querySelector(".article-preview.tag-java");
        const tagPython = document.querySelector(".article-preview.tag-python");
        const tagProductivity = document.querySelector(".article-preview.tag-productivity");
        tagHtmlCss.classList.remove("hiddenItem");
        tagJavascript.classList.add("hiddenItem");
        tagJava.classList.add("hiddenItem");
        tagPython.classList.add("hiddenItem");
        tagProductivity.classList.add("hiddenItem");

        console.log("Le bouton HTML CSS a été cliqué")

    });

    filterJavascript.addEventListener('click', function () {
        const tagJavascript = document.querySelector(".article-preview.tag-javascript");
        tagJavascript.classList.toggle("hiddenItem");

        // On désélectionne le reste des filtres
        filterAll.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterPython.classList.remove("clicked");
        filterProductivity.classList.remove("clicked");

        // et on met le bon en selectionné
        filterHtmlCss.classList.toggle("clicked");

        // et on enleve le hiddenItem des articles preview

        const tagHtmlCss = document.querySelector(".article-preview.tag-html-css");
        const tagJava = document.querySelector(".article-preview.tag-java");
        const tagPython = document.querySelector(".article-preview.tag-python");
        const tagProductivity = document.querySelector(".article-preview.tag-productivity");
        tagHtmlCss.classList.add("hiddenItem");
        tagJavascript.classList.remove("hiddenItem");
        tagJava.classList.add("hiddenItem");
        tagPython.classList.add("hiddenItem");
        tagProductivity.classList.add("hiddenItem");
        console.log("Le bouton Javascript a été cliqué")

    });

    filterJava.addEventListener('click', function () {
        const tagJava = document.querySelector(".article-preview.tag-java");
        tagJava.classList.toggle("hiddenItem");
        filterAll.classList.remove("clicked");


        filterJava.classList.toggle("clicked");
        console.log("Le bouton Java a été cliqué")

    });

    filterPython.addEventListener('click', function () {
        const tagPython = document.querySelector(".article-preview.tag-python");
        tagPython.classList.toggle("hiddenItem");
        filterAll.classList.remove("clicked");


        filterPython.classList.toggle("clicked");
        console.log("Le bouton Python a été cliqué")

    });
    filterProductivity.addEventListener('click', function () {
        const tagProductivity = document.querySelector(".article-preview.tag-productivity");
        tagProductivity.classList.toggle("hiddenItem");
        filterAll.classList.remove("clicked");


        filterProductivity.classList.toggle("clicked");
        console.log("Le bouton Productivité a été cliqué")
    });

    filterAll.addEventListener('click', function () {
        const tagHtmlCss = document.querySelector(".article-preview.tag-html-css");
        const tagJavascript = document.querySelector(".article-preview.tag-javascript");
        const tagJava = document.querySelector(".article-preview.tag-java");
        const tagPython = document.querySelector(".article-preview.tag-python");
        const tagProductivity = document.querySelector(".article-preview.tag-productivity");
        tagHtmlCss.classList.toggle("hiddenItem");
        tagJavascript.classList.toggle("hiddenItem");
        tagJava.classList.toggle("hiddenItem");
        tagPython.classList.toggle("hiddenItem");
        tagProductivity.classList.toggle("hiddenItem");

        filterAll.classList.toggle("clicked");


        if (filterAll.classList.contains("clicked")) {
            filterHtmlCss.classList.remove("clicked")
            filterJavascript.classList.remove("clicked")
            filterJava.classList.remove("clicked")
            filterPython.classList.remove("clicked")
            filterProductivity.classList.remove("clicked")

            tagHtmlCss.classList.remove("hiddenItem")
            tagJava.classList.remove("hiddenItem")
            tagJavascript.classList.remove("hiddenItem")
            tagPython.classList.remove("hiddenItem")
            tagProductivity.classList.remove("hiddenItem")
        } else {
            filterHtmlCss.classList.add("clicked")
            filterJavascript.classList.add("clicked")
            filterJava.classList.add("clicked")
            filterPython.classList.add("clicked")
            filterProductivity.classList.add("clicked")

            tagHtmlCss.classList.add("hiddenItem")
            tagJava.classList.add("hiddenItem")
            tagJavascript.classList.add("hiddenItem")
            tagPython.classList.add("hiddenItem")
            tagProductivity.classList.add("hiddenItem")
        }

    })


}

function infoSchoolMobile() {
    const iconInformationMMI = document.querySelector("i.mmi-info")
    const textBoxMMI = document.querySelector("div.description-school-mobile.mmi-info")
    const exitTextBoxMMI = document.querySelector("div.description-school-mobile.mmi-info > i")
    const darkGrid = document.querySelector(".darkGrid")

    // Calcul de la hauteur de la page pour la darkGrid

    const body = document.body
    const html = document.documentElement;

    const height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    // Je clique sur icone information
    // removeDisplayNone class display none sur la textBox
    // Et ajoute le fond en plus sombre de la page (optionnel)
    // Appuie sur la croix pour ajouter la classe DisplayNone à la textBox

    iconInformationMMI.addEventListener('click', function () {
        textBoxMMI.classList.toggle('HiddenTextBox');
        console.log("Le bouton a été cliqué")
        console.log(darkGrid.className);
    })

    exitTextBoxMMI.addEventListener('click', function () {
        textBoxMMI.classList.toggle('HiddenTextBox');
    })

}

function setupSection(iconSelector, textBoxSelector, exitSelector) {
    const icon = document.querySelector(iconSelector);
    const textBox = document.querySelector(textBoxSelector);
    const exit = document.querySelector(exitSelector);


    // La darkGrid
    const body = document.body
    const html = document.documentElement;

    const height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    const darkGrid = document.querySelector(".darkGrid")

    icon.addEventListener('click', function () {
        textBox.classList.toggle('HiddenTextBox');
        console.log("Le bouton a été cliqué");
        icon.style.zIndex = "0"
        textBox.style.zIndex = "11037"
        darkGrid.classList.toggle('displayNone')
        darkGrid.style.minHeight = "10000px";
    });

    exit.addEventListener('click', function () {
        textBox.classList.toggle('HiddenTextBox');
        icon.style.zIndex = "99"
        darkGrid.classList.toggle('displayNone')
    });
}

// Appel pour la section MMI
setupSection("i.for-mobile.mmi-info", "div.description-school-mobile.mmi-info", "div.description-school-mobile.mmi-info > i");

// Appel pour la section Comen
setupSection("i.for-mobile.comen-info", "div.description-school-mobile.comen-info", "div.description-school-mobile.comen-info > i");

// Appel pour la section Informatique
setupSection("i.for-mobile.info-info", "div.description-school-mobile.info-info", "div.description-school-mobile.info-info > i");

function filterProjectsV2() {
    // Sélectionner tous les boutons de filtrage
    const filterHtmlCss = document.querySelector("body > section > div.filtres > button.b-html-css");
    const filterJavascript = document.querySelector("body > section > div.filtres > button.b-javascript");
    const filterJava = document.querySelector("body > section > div.filtres > button.b-java");
    const filterPython = document.querySelector("body > section > div.filtres > button.b-python");
    const filterAll = document.querySelector("body > section > div.filtres > button.b-all")

    // Sélection de tous les articles preview
    const tagHtmlCss = document.querySelectorAll(".project.tag-html-css");
    const tagJavascript = document.querySelectorAll(".project.tag-javascript");
    const tagJava = document.querySelectorAll(".project.tag-java");
    const tagPython = document.querySelectorAll(".project.tag-python");

    // Etat de base de la page
    // Bouton All est déjà clicked
    // Aucun article n'est hidden (ils sont donc tous visibles)

    // Si je clique sur le filtre HTML CSS
    filterHtmlCss.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterHtmlCss.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterPython.classList.remove("clicked");

        // De plus tous les articles HTML CSS ne sont pas hidden
        tagHtmlCss.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagJavascript.forEach((element) => element.classList.add("hiddenItem"));
        tagJava.forEach((element) => element.classList.add("hiddenItem"));
        tagPython.forEach((element) => element.classList.add("hiddenItem"));


    });

    // Si je clique sur le bouton Javascript

    filterJavascript.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterJavascript.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterPython.classList.remove("clicked");

        // De plus tous les articles Javascript ne sont pas hidden
        tagJavascript.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagHtmlCss.forEach((element) => element.classList.add("hiddenItem"));
        tagJava.forEach((element) => element.classList.add("hiddenItem"));
        tagPython.forEach((element) => element.classList.add("hiddenItem"));

    });

    // Si je clique sur le bouton Java

    filterJava.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterJava.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterPython.classList.remove("clicked");

        // De plus tous les articles Java ne sont pas hidden
        tagJava.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagHtmlCss.forEach((element) => element.classList.add("hiddenItem"));
        tagJavascript.forEach((element) => element.classList.add("hiddenItem"));
        tagPython.forEach((element) => element.classList.add("hiddenItem"));

    });

    // Si je clique sur le bouton Python

    filterPython.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterPython.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterHtmlCss.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterJava.classList.remove("clicked");

        // De plus tous les articles Python ne sont pas hidden
        tagPython.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagHtmlCss.forEach((element) => element.classList.add("hiddenItem"));
        tagJavascript.forEach((element) => element.classList.add("hiddenItem"));
        tagJava.forEach((element) => element.classList.add("hiddenItem"));

    });

    // Si je clique sur le bouton Productivity

    // Pour le bouton All

    filterAll.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterAll.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterHtmlCss.classList.remove("clicked");
        filterJavascript.classList.remove("clicked");
        filterJava.classList.remove("clicked");
        filterPython.classList.remove("clicked");

        // De plus tous les articles ne sont pas hidden
        tagHtmlCss.forEach((element) => element.classList.remove("hiddenItem"));
        tagJavascript.forEach((element) => element.classList.remove("hiddenItem"));
        tagJava.forEach((element) => element.classList.remove("hiddenItem"));
        tagPython.forEach((element) => element.classList.remove("hiddenItem"));

    });
}

function copyClipboard() {
    const link = window.location.href;
    const copyButton = document.querySelector("body > div.share > div > a:nth-child(1) > i")

    copyButton.addEventListener('click', function () {
        navigator.clipboard.writeText(link);
    })
}

function filterArticlesTempo() {
    // Sélectionner tous les boutons de filtrage
    const filterAdobeXD = document.querySelector("body > section > div.filtres > .filter-article.b-adobexd");
    const filterProductivity = document.querySelector("body > section > div.filtres > button.filter-article.b-productivity");
    const filterAll = document.querySelector("body > section > div.filtres > button.filter-article.b-all")

    // Sélection de tous les articles preview
    const tagAdobeXD = document.querySelectorAll(".article-preview.tag-adobexd");
    const tagProductivity = document.querySelectorAll(".article-preview.tag-productivity");

    // Si je clique sur le filtre HTML CSS
    filterAdobeXD.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterAdobeXD.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterProductivity.classList.remove("clicked");

        // De plus tous les articles HTML CSS ne sont pas hidden
        tagAdobeXD.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagProductivity.forEach((element) => element.classList.add("hiddenItem"));


    });

    // Si je clique sur le bouton Productivity

    filterProductivity.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterProductivity.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterAdobeXD.classList.remove("clicked");

        // De plus tous les articles Productivity ne sont pas hidden
        tagProductivity.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagAdobeXD.forEach((element) => element.classList.add("hiddenItem"));

    });

    // Pour le bouton All

    filterAll.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterAll.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterProductivity.classList.remove("clicked");
        filterAdobeXD.classList.remove("clicked");

        // De plus tous les articles ne sont pas hidden
        tagProductivity.forEach(element => element.classList.remove("hiddenItem"));
        tagAdobeXD.forEach((element) => element.classList.remove("hiddenItem"));

    });

}

function filterProjectsTempo() {
    // Sélectionner tous les boutons de filtrage
    const filterSiteWeb = document.querySelector("body > section > div.filtres > button.b-siteweb");
    const filterApplication = document.querySelector("body > section > div.filtres > button.b-application");
    const filterAll = document.querySelector("body > section > div.filtres > button.b-all")

    // Sélection de tous les articles preview
    const tagSiteWeb = document.querySelectorAll(".project.tag-siteweb");
    const tagApplication = document.querySelectorAll(".project.tag-application");

    // Etat de base de la page
    // Bouton All est déjà clicked
    // Aucun article n'est hidden (ils sont donc tous visibles)

    // Si je clique sur le filtre HTML CSS
    filterSiteWeb.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterSiteWeb.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");

        filterApplication.classList.remove("clicked");

        // De plus tous les articles HTML CSS ne sont pas hidden
        tagSiteWeb.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagApplication.forEach((element) => element.classList.add("hiddenItem"));


    });





    // Si je clique sur le bouton Python

    filterApplication.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterApplication.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterAll.classList.remove("clicked");
        filterSiteWeb.classList.remove("clicked");


        // De plus tous les articles Python ne sont pas hidden
        tagApplication.forEach(element => element.classList.remove("hiddenItem"));

        // De ce fait tous les autres qui n'ont pas ce tag, le deviennent (hidden)
        tagSiteWeb.forEach((element) => element.classList.add("hiddenItem"));

    });


    // Pour le bouton All

    filterAll.addEventListener('click', function () {
        // Le bouton du filtre HTML CSS devient clicked
        filterAll.classList.add("clicked");
        // Donc les autres sont forcément en non clicked
        filterSiteWeb.classList.remove("clicked");
        filterApplication.classList.remove("clicked");

        // De plus tous les articles ne sont pas hidden
        tagSiteWeb.forEach((element) => element.classList.remove("hiddenItem"));
        tagApplication.forEach((element) => element.classList.remove("hiddenItem"));

    });
}
