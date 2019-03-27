(() => {

    // Load your images on page-load
    const preloader = () => {
        let imagesList, images, i;
        imagesList = [
            "./img/Primary.png",
            "./img/Secondary.png",
            "./img/Tertiary.png"
        ];

        images = [];
        for (i = 0; i < imagesList.length; i += 1){
            images[i] = new Image();
            images[i].src = imagesList[i];}

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };

    window.addEventListener("load", preloader);

   /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    let options, contents, wrapper, i;

     /* Complete your resource-object that will store the dynamic content.
        Resource object should 3 sub-objects. Give your sub-objects
        meaningful names. Every sub-object should have the following
        properties headingContent, bodyText, imgUrl and imgAlt. */

    options = document.querySelectorAll(".options button");
    wrapper = document.querySelector(".content");
    contents = {
        primary: {
            headingContent: "Primary Recycling",
            textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget molestie tellus. Cras diam ante, volutpat vitae tortor nec, lobortis gravida metus. Cras a ipsum tincidunt, efficitur leo quis, accumsan ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Fusce gravida enim quis luctus ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit euismod malesuada. Aliquam vel aliquam quam. Maecenas sit amet urna leo. Etiam consectetur mattis diam, eget porttitor eros dapibus non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            imgUrl: "./img/primary.png",
            imgAlt: "primary-recycling"
        },
        secondary: {
            headingContent: "Secondary Recycling",
            textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget molestie tellus. Cras diam ante, volutpat vitae tortor nec, lobortis gravida metus. Cras a ipsum tincidunt, efficitur leo quis, accumsan ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Fusce gravida enim quis luctus ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit euismod malesuada. Aliquam vel aliquam quam. Maecenas sit amet urna leo. Etiam consectetur mattis diam, eget porttitor eros dapibus non",
            imgUrl: "./img/secondary.png",
            imgAlt: "secondary-recycling"
        },
        tertiary: {
            headingContent: "Tertiary Recycling",
            textContent: "Cras a ipsum tincidunt, efficitur leo quis, accumsan ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Fusce gravida enim quis luctus ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit euismod malesuada. Aliquam vel aliquam quam. Maecenas sit amet urna leo. Etiam consectetur mattis diam, eget porttitor eros dapibus non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            imgUrl: "./img/tertiary.png",
            imgAlt: "tertiary-recycling"
        }
    };

    /* Start your handleSelection function here. */ 
    const handleSelection = (e) => {

        let title,
            content,
            image,
            paragraph,
            selectedContent,
            i;

        content = document.querySelector(".dynamic-content");

        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

        for (i = 0; i < options.length; i++) {
            if (options[i].hasAttribute("id")) {
                options[i].removeAttribute("id");
            }
        }

        e.target.setAttribute("id", "active-btn");

        title = document.createElement("h2");
        paragraph = document.createElement("p");
        image = document.createElement("img");
        selectedContent = e.target.getAttribute("data-content");

        title.innerHTML = contents[selectedContent].headingContent;
        paragraph.innerHTML = contents[selectedContent].textContent;
        image.src = contents[selectedContent].imgUrl;
        image.alt = contents[selectedContent].imgAlt;

        content.appendChild(title);
        content.appendChild(image);
        content.appendChild(paragraph);

        container.appendChild(content);

    };

    for (i = 0; i < options.length; i++) {
        options[i].addEventListener("click", handleSelection);
    }

})();
