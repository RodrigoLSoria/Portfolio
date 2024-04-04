
const ProjectDetailsPage = () => {
    // Slug is retrieved from the URL
    const { slug } = match.params;

    // You can define your project details as an object or import it from another file
    const projectDetails = {
        'greenlet-project': {
            name: 'Greenlet',
            description: 'Greenlet is a project.........................',
        },
        'happycode': {
            name: 'Happy Code',

        },
        // Add more projects here
    };

    // Lookup the project details using the slug
    const project = projectDetails[slug];

    return (
        <div>
            <h2>{project.name}</h2>
            // Render additional project details here
        </div>
    );
};

export default ProjectDetailsPage
