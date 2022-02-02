const card = {
    component: "div",
    id: 'card',
    className: "card m-5",
    styles:

        [
            {
                name: 'width',
                value: '50%',
            },
        ],
    children: [
        {
            component: 'img',
            id: 'card-img',
            className: "card-img-top",
            src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
            alt: "Image alt",
        },
        {
            component: 'div',
            id: 'card-body',
            className: 'card-body',
            children: [
                {
                    component: 'h5',
                    id: 'card-title',
                    className: 'card-title',
                    children: 'Card Title'

                },
                {
                    component: 'p',
                    id: 'card-text',
                    className: 'card-text',
                    children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                },
                {
                    component: 'a',
                    id: 'card-button',
                    className: 'btn btn-primary',
                    href: "#",
                    children: "button"
                }
            ]
        }
    ]

}
export default card